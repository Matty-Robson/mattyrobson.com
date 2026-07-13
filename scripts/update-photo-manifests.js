#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");

const manifests = [
  {
    variable: "fujifilmPhotos",
    directory: "Assets/Image Bank/Digital Photography/Fujifilm XT30II"
  },
  {
    variable: "ricohPhotos",
    directory: "Assets/Image Bank/Digital Photography/Ricoh GRIIIx"
  },
  {
    variable: "pentaxPhotos",
    directory: "Assets/Image Bank/35mm/Pentax P30n"
  },
  {
    variable: "olympusTripPhotos",
    directory: "Assets/Image Bank/35mm/Olympus Trip MD3"
  },
  {
    variable: "zenitEmPhotos",
    directory: "Assets/Image Bank/35mm/Zenit EM Olympic Edition"
  },
  {
    variable: "polaroidPhotos",
    directory: "Assets/Image Bank/Polaroid/Polaroid GO"
  }
];

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff"]);
const mdlsFields = [
  "kMDItemAcquisitionMake",
  "kMDItemAcquisitionModel",
  "kMDItemLensModel",
  "kMDItemISOSpeed",
  "kMDItemFNumber",
  "kMDItemExposureTimeSeconds",
  "kMDItemFocalLength",
  "kMDItemContentCreationDate"
];

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function existingManifestItems(manifestPath) {
  if (!fs.existsSync(manifestPath)) {
    return [];
  }

  const source = fs.readFileSync(manifestPath, "utf8");
  const match = source.match(/window\.[A-Za-z0-9_$]+\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
  if (!match) {
    throw new Error(`Could not parse ${manifestPath}`);
  }

  return JSON.parse(match[1]);
}

function scanImageItems(directory) {
  const absoluteDirectory = path.join(root, directory);
  if (!fs.existsSync(absoluteDirectory)) {
    return [];
  }

  return fs.readdirSync(absoluteDirectory)
    .filter((filename) => imageExtensions.has(path.extname(filename).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename) => ({ src: toPosix(path.join(directory, filename)) }));
}

function parseMdlsValue(value) {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "(null)") {
    return "";
  }

  if (trimmed.startsWith("\"") && trimmed.endsWith("\"")) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function readMdls(filePath) {
  try {
    const output = execFileSync("mdls", [
      ...mdlsFields.flatMap((field) => ["-name", field]),
      filePath
    ], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });

    return output.split("\n").reduce((fields, line) => {
      const match = line.match(/^(kMDItem[A-Za-z0-9]+)\s+=\s+([\s\S]*)$/);
      if (match) {
        fields[match[1]] = parseMdlsValue(match[2]);
      }
      return fields;
    }, {});
  } catch (error) {
    return {};
  }
}

function readSips(filePath) {
  try {
    const output = execFileSync("sips", ["-g", "all", filePath], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    });

    return output.split("\n").reduce((fields, line) => {
      const match = line.match(/^\s+([A-Za-z0-9]+):\s+([\s\S]+)$/);
      if (match) {
        fields[match[1]] = match[2].trim();
      }
      return fields;
    }, {});
  } catch (error) {
    return {};
  }
}

function normalizeDate(value) {
  if (!value) {
    return "";
  }

  const mdlsMatch = value.match(/^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) ([+-]\d{2})(\d{2})$/);
  if (mdlsMatch) {
    return `${mdlsMatch[1]}T${mdlsMatch[2]}${mdlsMatch[3]}:${mdlsMatch[4]}`;
  }

  const sipsMatch = value.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}:\d{2}:\d{2})$/);
  if (sipsMatch) {
    return `${sipsMatch[1]}-${sipsMatch[2]}-${sipsMatch[3]}T${sipsMatch[4]}`;
  }

  return value;
}

function toNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : undefined;
}

function toPositiveNumber(value) {
  const numeric = toNumber(value);
  return numeric && numeric > 0 ? numeric : undefined;
}

function imageDimensions(item, sips) {
  const width = toNumber(sips.pixelWidth) || toNumber(item.width);
  const height = toNumber(sips.pixelHeight) || toNumber(item.height);
  return { width, height };
}

function optimizedPath(src, folderName, suffix) {
  const directory = path.posix.dirname(src);
  const extension = path.posix.extname(src);
  const stem = path.posix.basename(src, extension);
  const candidate = `${directory}/${folderName}/${stem}-${suffix}.jpg`;
  return fs.existsSync(path.join(root, candidate)) ? candidate : "";
}

function metadataForItem(item) {
  const absoluteSource = path.join(root, item.src);
  const mdls = readMdls(absoluteSource);
  const sips = readSips(absoluteSource);
  const { width, height } = imageDimensions(item, sips);
  const metadata = {
    filename: path.posix.basename(item.src),
    make: mdls.kMDItemAcquisitionMake || sips.make || undefined,
    model: mdls.kMDItemAcquisitionModel || sips.model || undefined,
    lens: mdls.kMDItemLensModel || undefined,
    iso: toPositiveNumber(mdls.kMDItemISOSpeed),
    aperture: toPositiveNumber(mdls.kMDItemFNumber),
    shutter: toPositiveNumber(mdls.kMDItemExposureTimeSeconds),
    focalLength: toPositiveNumber(mdls.kMDItemFocalLength),
    createdAt: normalizeDate(mdls.kMDItemContentCreationDate || sips.creation),
    width,
    height
  };

  Object.keys(metadata).forEach((key) => {
    if (metadata[key] === undefined || metadata[key] === "") {
      delete metadata[key];
    }
  });

  return metadata;
}

function buildManifest(config) {
  const manifestPath = path.join(root, config.directory, "manifest.js");
  const existingItems = existingManifestItems(manifestPath);
  const sourceItems = existingItems.length ? existingItems : scanImageItems(config.directory);

  const items = sourceItems.map((item) => {
    const metadata = metadataForItem(item);
    const display = item.display || optimizedPath(item.src, "display", "display") || undefined;
    const thumb = item.thumb || optimizedPath(item.src, "thumbs", "thumb") || undefined;
    const width = metadata.width || item.width;
    const height = metadata.height || item.height;

    return {
      src: item.src,
      ...(display ? { display } : {}),
      ...(thumb ? { thumb } : {}),
      ...(width ? { width } : {}),
      ...(height ? { height } : {}),
      metadata
    };
  });

  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(
    manifestPath,
    `window.${config.variable} = ${JSON.stringify(items, null, 2)};\n`
  );

  return { manifestPath, count: items.length };
}

const results = manifests.map(buildManifest);
results.forEach(({ manifestPath, count }) => {
  console.log(`${path.relative(root, manifestPath)}: ${count} photos`);
});
