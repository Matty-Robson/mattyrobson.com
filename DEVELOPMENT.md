# Development and publishing

Work on `codex/development`. Keep `main` for approved releases to mattyrobson.com.
The latest observed GitHub Pages deployment used `main`; the Pages settings API
was unavailable during setup. In GitHub → Settings → Pages, verify the publishing
source is the root of `main` before relying on this separation.

## Preview locally

From the project directory, run:

```sh
sh scripts/preview.sh
```

Open http://localhost:8000. Stop the server with Ctrl+C. To use another port,
run `PORT=8001 sh scripts/preview.sh`. This preview is available only on this computer.
Refresh the browser after editing files.

## Save development work

Commit selected changes on `codex/development`. Push that branch to back it up:

```sh
git push -u origin codex/development
```

## Publish an approved release

Commit all intended changes first and ensure the working tree is clean. Open a
pull request from `codex/development` into `main`, review it, then merge when ready
to publish. Merging into the configured Pages source triggers deployment.
Check the GitHub Actions deployment and the live site afterward.

Before the next round of development, with a clean working tree:

```sh
git switch codex/development
git fetch origin
git merge origin/main
```

Avoid pushing development changes directly to `main`.
