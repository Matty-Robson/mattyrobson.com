const assetPathPrefix = "https://www.figma.com/api/mcp/asset/0e986279-36f1-4a39-9cf8-d3cef7cf55df";
import { motion } from "motion/react";
const imgAvailabilitySwitchSelected = `${assetPathPrefix}/ab7e1.svg`;
const imgExpandIndicator = `${assetPathPrefix}/9132f.svg`;
const imgExpandIndicator1 = `${assetPathPrefix}/38166.svg`;
const imgRemoveFilter = `${assetPathPrefix}/25e1a.svg`;
const imgMinimumHandle = `${assetPathPrefix}/04aea.svg`;
const imgMaximumHandle = `${assetPathPrefix}/81d33.svg`;

export default function HorizontalFilters() {
  return (
    <div className="bg-[var(--anchor-color-white,white)] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex flex-col items-start relative size-full" data-node-id="369:305" data-name="Horizontal filters">
      <div className="border-[#d7d4d9] border-b border-solid content-stretch flex items-center justify-between px-[80px] py-[24px] relative shrink-0 w-full" data-node-id="369:306" data-name="Filter and sort bar">
        <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-node-id="369:307" data-name="Filter controls">
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="369:308" data-name="Title">
            <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[20px] text-[color:var(--anchor-color-neutral-900,#111827)] whitespace-nowrap" data-node-id="369:309">{`Filter & Sort`}</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="369:310" data-name="In stock filter">
            <div className="h-[22px] relative shrink-0 w-[43px]" data-node-id="369:311" data-name="Availability switch selected">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvailabilitySwitchSelected} />
            </div>
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-[color:var(--anchor-color-brand-900,#06003e)] whitespace-nowrap" data-node-id="369:313">
              In Stock Only
            </p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="369:314" data-name="Filter selectors">
            <div className="border border-[#d7d4d9] border-solid content-stretch flex h-[38px] items-center justify-between overflow-clip px-[12px] relative rounded-[var(--button-corner-radius,6px)] shrink-0 w-[135px]" data-node-id="369:315" data-name="Filter selector">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" data-node-id="369:316">
                Price Range
              </p>
              <div className="h-[4.93px] relative shrink-0 w-[8px]" data-node-id="369:317" data-name="Expand indicator">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpandIndicator} />
              </div>
            </div>
            <div className="border border-[#d7d4d9] border-solid content-stretch flex h-[38px] items-center justify-between overflow-clip px-[12px] relative rounded-[var(--button-corner-radius,6px)] shrink-0 w-[135px]" data-node-id="369:318" data-name="Filter selector">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" data-node-id="369:319">
                Size
              </p>
              <div className="h-[4.93px] relative shrink-0 w-[8px]" data-node-id="369:320" data-name="Expand indicator">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpandIndicator} />
              </div>
            </div>
            <div className="border border-[#d7d4d9] border-solid content-stretch flex h-[38px] items-center justify-between overflow-clip px-[12px] relative rounded-[var(--button-corner-radius,6px)] shrink-0 w-[135px]" data-node-id="369:321" data-name="Filter selector">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" data-node-id="369:322">
                Colour
              </p>
              <div className="h-[4.93px] relative shrink-0 w-[8px]" data-node-id="369:323" data-name="Expand indicator">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpandIndicator} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="369:324" data-name="Sorting and results">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="369:325" data-name="Sort selection">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" data-node-id="369:326">
              Sort by:
            </p>
            <div className="border border-[#d7d4d9] border-solid content-stretch flex gap-[8px] h-[38px] items-center overflow-clip pr-[12px] relative rounded-[6px] shrink-0" data-node-id="369:327" data-name="Sort control">
              <div className="bg-[var(--button-secondary-bg,white)] border-0 border-[var(--button-secondary-border,#06003e)] border-solid content-stretch flex h-[38px] items-center justify-center pl-[12px] py-[9px] relative shrink-0" data-node-id="369:328" data-name="Sort value">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap" data-node-id="I369:328;60:13">
                  Best Selling
                </p>
              </div>
              <div className="h-[4.93px] relative shrink-0 w-[8px]" data-node-id="369:329" data-name="Expand indicator">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpandIndicator1} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] whitespace-nowrap" data-node-id="369:330">
            21 Items
          </p>
        </div>
      </div>
      <motion.div className="bg-[#f7f7f7] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[18px] relative shrink-0 w-full" data-node-id="369:331" data-name="Active filters">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="369:332">
          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[12px] text-[color:var(--anchor-color-neutral-400,#9ca3af)] uppercase whitespace-nowrap" data-node-id="369:333">
            Active Filters
          </p>
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="369:334" data-name="Selected filters">
            <motion.div className="bg-[#e6e5ec] content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="369:335" data-name="Active filter">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-brand-900,#06003e)] whitespace-nowrap" data-node-id="369:336">
                In Stock
              </p>
              <div className="relative shrink-0 size-[7.5px]" data-node-id="369:337" data-name="Remove filter">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRemoveFilter} />
              </div>
            </motion.div>
            <motion.div className="bg-[#e6e5ec] content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="370:512" data-name="Active filter — Price Range">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-brand-900,#06003e)] whitespace-nowrap" data-node-id="370:513">
                £30.00–£150.00
              </p>
              <div className="relative shrink-0 size-[7.5px]" data-node-id="370:514" data-name="Remove filter">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRemoveFilter} />
              </div>
            </motion.div>
            <motion.div className="bg-[#e6e5ec] content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="369:338" data-name="Active filter">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-brand-900,#06003e)] whitespace-nowrap" data-node-id="369:339">
                Size: L
              </p>
              <div className="relative shrink-0 size-[7.5px]" data-node-id="369:340" data-name="Remove filter">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRemoveFilter} />
              </div>
            </motion.div>
            <motion.div className="bg-[#e6e5ec] content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="369:341" data-name="Active filter">
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-brand-900,#06003e)] whitespace-nowrap" data-node-id="369:342">
                Blue
              </p>
              <div className="relative shrink-0 size-[7.5px]" data-node-id="369:343" data-name="Remove filter">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRemoveFilter} />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="369:344">
          <div className="bg-[var(--button-secondary-bg,white)] border-[length:var(--button-secondary-border-width,2px)] border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-center justify-center px-[var(--button-secondary-padding-x,24px)] py-[var(--button-secondary-padding-y,12px)] relative rounded-[var(--button-corner-radius,6px)] shrink-0 w-[180px]" data-node-id="369:345" data-name="Clear filters">
            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[#4b5563] text-[length:var(--button-font-size,14px)] whitespace-nowrap" data-node-id="I369:345;60:13">
              Clear Filters
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className="absolute bg-[var(--anchor-color-white,white)] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex flex-col gap-[16px] items-start left-[399px] overflow-clip p-[24px] rounded-[12px] top-[73px] w-[330px]" data-node-id="369:346" data-name="Price range">
        <p className="[word-break:break-word] blur-[0px] font-['Geist:Bold'] font-bold leading-[normal] min-w-full relative shrink-0 text-[16px] text-[color:var(--anchor-color-neutral-900,#111827)] w-[min-content]" data-node-id="369:347">
          Price Range
        </p>
        <motion.div className="blur-[0px] content-stretch flex h-[30px] items-center relative shrink-0 w-[282px]" data-node-id="369:348" data-name="Price slider">
          <motion.div className="bg-[var(--anchor-color-neutral-100,#f3f4f6)] h-[6px] relative rounded-[3px] shrink-0 w-[29.055px]" data-node-id="369:349" data-name="Inactive range" />
          <motion.div className="bg-[#3b82f6] h-[6px] relative shrink-0 w-[189.709px]" data-node-id="369:350" data-name="Selected range" />
          <motion.div className="bg-[var(--anchor-color-neutral-100,#f3f4f6)] h-[6px] relative rounded-[3px] shrink-0 w-[63.236px]" data-node-id="369:351" data-name="Inactive range" />
          <motion.div className="absolute left-[18.05px] size-[22px] top-[4px]" data-node-id="369:352" data-name="Minimum handle">
            <div className="absolute inset-[-9.09%_-18.18%_-27.27%_-18.18%]">
              <img alt="" className="block max-w-none size-full" src={imgMinimumHandle} />
            </div>
          </motion.div>
          <motion.div className="absolute left-[207.76px] size-[22px] top-[4px]" data-node-id="369:353" data-name="Maximum handle">
            <div className="absolute inset-[-9.09%_-18.18%_-27.27%_-18.18%]">
              <img alt="" className="block max-w-none size-full" src={imgMaximumHandle} />
            </div>
          </motion.div>
        </motion.div>
        <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="369:354" data-name="Price limits">
          <motion.div className="blur-[0px] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="369:355" data-name="Price input">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" data-node-id="369:356">
              Min Price
            </p>
            <div className="border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="369:357" data-name="Input">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-[color:var(--anchor-color-neutral-900,#111827)] whitespace-nowrap" data-node-id="369:358">
                £30.00
              </p>
            </div>
          </motion.div>
          <motion.div className="blur-[0px] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="369:359" data-name="Price input">
            <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" data-node-id="369:360">
              Max Price
            </p>
            <div className="border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="369:361" data-name="Input">
              <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-[color:var(--anchor-color-neutral-900,#111827)] whitespace-nowrap" data-node-id="369:362">
                £150.00
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="absolute bg-[var(--anchor-color-white,white)] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex flex-col gap-[24px] items-start left-[550px] overflow-clip p-[24px] rounded-[12px] top-[73px] w-[316px]" data-node-id="369:363" data-name="Size">
        <p className="[word-break:break-word] blur-[0px] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-[color:var(--anchor-color-neutral-900,#111827)] w-full" data-node-id="369:364">
          Size
        </p>
        <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="369:365" data-name="Size choices">
          <motion.div className="bg-[#f9fafb] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="369:366" data-name="Size option">
            <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="369:367">
              XS
            </p>
          </motion.div>
          <motion.div className="bg-[#f9fafb] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="369:368" data-name="Size option">
            <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="369:369">
              S
            </p>
          </motion.div>
          <motion.div className="bg-[#f9fafb] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="369:370" data-name="Size option">
            <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="369:371">
              M
            </p>
          </motion.div>
          <motion.div className="bg-[var(--anchor-color-brand-900,#06003e)] blur-[0px] border border-[var(--anchor-color-brand-900,#06003e)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="369:372" data-name="Size option">
            <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-white,white)] whitespace-nowrap" data-node-id="369:373">
              L
            </p>
          </motion.div>
          <motion.div className="bg-[#f9fafb] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="369:374" data-name="Size option">
            <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="369:375">
              XL
            </p>
          </motion.div>
          <motion.div className="bg-[#f9fafb] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="369:376" data-name="Size option">
            <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="369:377">
              XXL
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="absolute bg-[var(--anchor-color-white,white)] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex flex-col gap-[24px] h-[167px] items-start left-[701px] overflow-clip p-[24px] rounded-[12px] top-[73px] w-[462px]" data-node-id="369:378" data-name="Colour">
        <p className="[word-break:break-word] blur-[0px] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-[color:var(--anchor-color-neutral-900,#111827)] w-full" data-node-id="369:379">
          Colour
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="369:380" data-name="Colour choices">
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="369:381" data-name="Colour choices row">
            <motion.div className="bg-[var(--anchor-color-white,white)] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="369:382" data-name="Colour option">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 size-[16px]" data-node-id="369:383" data-name="Colour swatch">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I369:383;35:2188" data-name="Container">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I369:383;35:2189" data-name="Container">
                    <div className="bg-[#f5f5dc] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="I369:383;35:2190" data-name="Button - Red Check" />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-neutral-900,#111827)] whitespace-nowrap" data-node-id="369:384">
                Beige
              </p>
            </motion.div>
            <motion.div className="bg-[var(--anchor-color-white,white)] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="369:385" data-name="Colour option">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 size-[16px]" data-node-id="369:386" data-name="Colour swatch">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I369:386;35:2188" data-name="Container">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I369:386;35:2189" data-name="Container">
                    <div className="bg-[var(--anchor-color-neutral-900,#111827)] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="I369:386;35:2190" data-name="Button - Red Check" />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-neutral-900,#111827)] whitespace-nowrap" data-node-id="369:387">
                Black
              </p>
            </motion.div>
            <motion.div className="bg-[#e6e5ec] blur-[0px] border border-[var(--anchor-color-brand-900,#06003e)] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="369:388" data-name="Colour option">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 size-[16px]" data-node-id="369:389" data-name="Colour swatch">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I369:389;35:2188" data-name="Container">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I369:389;35:2189" data-name="Container">
                    <div className="bg-[#3b82f6] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="I369:389;35:2190" data-name="Button - Red Check" />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-brand-900,#06003e)] whitespace-nowrap" data-node-id="369:390">
                Blue
              </p>
            </motion.div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="369:391" data-name="Colour choices row">
            <motion.div className="bg-[var(--anchor-color-white,white)] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="369:392" data-name="Colour option">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 size-[16px]" data-node-id="369:393" data-name="Colour swatch">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I369:393;35:2188" data-name="Container">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I369:393;35:2189" data-name="Container">
                    <div className="bg-[#ef4444] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="I369:393;35:2190" data-name="Button - Red Check" />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-neutral-900,#111827)] whitespace-nowrap" data-node-id="369:394">
                Red
              </p>
            </motion.div>
            <motion.div className="bg-[var(--anchor-color-white,white)] blur-[0px] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="369:395" data-name="Colour option">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 size-[16px]" data-node-id="369:396" data-name="Colour swatch">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I369:396;35:2188" data-name="Container">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I369:396;35:2189" data-name="Container">
                    <div className="bg-[#10b981] border border-[var(--anchor-color-neutral-200,#e5e7eb)] border-solid relative rounded-[100px] shrink-0 size-[16px]" data-node-id="I369:396;35:2190" data-name="Button - Red Check" />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[13px] text-[color:var(--anchor-color-neutral-900,#111827)] whitespace-nowrap" data-node-id="369:397">
                Green
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}