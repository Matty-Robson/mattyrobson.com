import { motion } from "motion/react";

type Component1Props = {
  className?: string;
  property1?: "Swatches" | "Swatches Hover";
};

function Component1({ className, property1 = "Swatches" }: Component1Props) {
  const isSwatchesHover = property1 === "Swatches Hover";
  return (
    <div className={className || `content-stretch flex items-center pl-[4px] relative ${isSwatchesHover ? "" : "gap-[8px]"}`} id={isSwatchesHover ? "node-35_2232" : "node-35_2233"}>
      <div className="content-stretch flex items-center relative shrink-0" id={isSwatchesHover ? "node-35_2198" : "node-35_2188"} data-name="Container">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" id={isSwatchesHover ? "node-35_2199" : "node-35_2189"} data-name="Container">
          <div className="bg-[#c8392b] relative rounded-[4px] shadow-[0px_0px_0px_1px_white,0px_0px_0px_3px_#c8392b] shrink-0 size-[16px]" id={isSwatchesHover ? "node-35_2200" : "node-35_2190"} data-name="Button - Red Check" />
          <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 size-[16px]" id={isSwatchesHover ? "node-35_2201" : "node-35_2191"} data-name="Button - Black" />
          <div className="bg-[#6b9bde] relative rounded-[4px] shrink-0 size-[16px]" id={isSwatchesHover ? "node-35_2202" : "node-35_2192"} data-name="Button - Blue" />
          {isSwatchesHover && (
            <>
              <motion.div className="bg-[#2e8b57] blur-[0px] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2205" data-name="Button - Green" />
              <motion.div className="bg-[#e6a032] blur-[0px] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2206" data-name="Button - Gold" />
              <motion.div className="bg-[#9b59b6] blur-[0px] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2207" data-name="Button - Purple" />
              <motion.div className="bg-[#e74c3c] blur-[0px] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2208" data-name="Button - Coral" />
              <motion.div className="bg-[#34acaf] blur-[0px] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2209" data-name="Button - Teal" />
              <motion.div className="bg-[#f1948a] blur-[0px] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2210" data-name="Button - Pink" />
            </>
          )}
        </div>
      </div>
      {property1 === "Swatches" && (
        <div className="content-stretch flex flex-col items-center justify-center opacity-70 relative shrink-0" data-node-id="35:2193" data-name="Button">
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[12px] relative shrink-0 text-[#08082f] text-[12px] text-center whitespace-nowrap" data-node-id="35:2194">{`Show all 7 `}</p>
        </div>
      )}
    </div>
  );
}

export default function HoverSwatches(){return <Component1 property1="Swatches Hover"/>;}
