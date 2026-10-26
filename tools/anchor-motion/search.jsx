const assetPathPrefix = "https://www.figma.com/api/mcp/asset/6448c6af-a318-48f1-8330-f3de0529833e";
import { motion } from "motion/react";
const imgProductImage = `${assetPathPrefix}/3e059.png`;
const imgProductImage1 = `${assetPathPrefix}/9266d.png`;
const imgProductImage2 = `${assetPathPrefix}/f3eab.png`;
const imgProductImage3 = `${assetPathPrefix}/f18ba.png`;
const imgFrame9146 = `${assetPathPrefix}/933c4.svg`;
const imgCloseIcon = `${assetPathPrefix}/78dfa.svg`;
const imgSearchIcon = `${assetPathPrefix}/2b11b.svg`;
const imgClearQuery = `${assetPathPrefix}/3cd7c.svg`;
const imgArrowUpLeft = `${assetPathPrefix}/9d94e.svg`;

export default function TransitionAnimation() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[48px] items-start p-[32px] relative rounded-[12px] size-full" data-node-id="318:233" data-name="Transition / Animation">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[240px]" data-node-id="318:234" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="318:235" data-name="Frame">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#111827] text-[18px] w-full" data-node-id="318:236">
            Search With Results
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#6b7280] text-[13px] w-full" data-node-id="318:237">
            Surfaces most relevant results with button to advance to a full results page
          </p>
        </div>
        <button className="bg-[#f7f7f7] content-stretch cursor-pointer flex gap-[12px] items-center justify-center p-[12px] relative rounded-[55px] shrink-0" data-node-id="318:238">
          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap" data-node-id="318:239">
            Play Animation
          </p>
          <div className="relative shrink-0 size-[40px]" data-node-id="318:240">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame9146} />
          </div>
        </button>
      </div>
      <div className="content-stretch flex h-[1055px] items-center relative shrink-0" data-node-id="318:242" data-name="Frame">
        <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center justify-center p-[24px] relative rounded-[8px] shrink-0" data-node-id="318:243" data-name="placeholder-before">
          <div className="bg-[var(--anchor-color-white,white)] border-[#eaeaea] border-[length:var(--anchor-dimension-1,1px)] border-solid content-stretch flex flex-col h-[885px] items-start overflow-clip relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-[512px]" data-node-id="318:338" data-name="Search drawer — results">
            <div className="bg-[#f7f7f7] border-[#eaeaea] border-b border-solid content-stretch flex h-[76px] items-center justify-between overflow-clip pb-[16px] pt-[24px] px-[24px] relative shrink-0 w-full" data-node-id="318:339" data-name="Drawer header">
              <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#1f1f1f] text-[22px] whitespace-nowrap" data-node-id="318:340">
                Search
              </p>
              <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-node-id="318:341" data-name="Close button">
                <div className="relative shrink-0 size-[20px]" data-node-id="318:342" data-name="Close icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCloseIcon} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start overflow-clip px-[24px] py-[16px] relative shrink-0 w-full" data-node-id="318:344" data-name="Search input container">
              <div className="bg-[var(--anchor-color-white,white)] border border-[#eaeaea] border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-[44px] items-center min-w-px overflow-clip px-[16px] py-[12px] relative rounded-[6px]" data-node-id="318:345" data-name="Search input">
                <div className="relative shrink-0 size-[18px]" data-node-id="318:346" data-name="Search icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchIcon} />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium'] font-medium leading-[normal] min-w-px relative text-[#1f1f1f] text-[15px]" data-node-id="318:348">
                  linen shirts
                </p>
                <div className="relative shrink-0 size-[14px]" data-node-id="318:349" data-name="Clear query">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClearQuery} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-h-px overflow-clip pb-[24px] pt-[8px] px-[24px] relative w-full" data-node-id="318:351" data-name="Search results">
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="318:363" data-name="Products">
                <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 text-[#757575] w-full whitespace-nowrap" data-node-id="318:364" data-name="Results heading">
                  <p className="font-['Geist:Bold'] font-bold relative shrink-0 text-[14px] uppercase" data-node-id="318:365">
                    results
                  </p>
                  <p className="font-['Geist:Regular'] font-normal relative shrink-0 text-[12px]" data-node-id="318:366">
                    24 results
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="318:367" data-name="Product list">
                  <motion.div className="blur-[0px] content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="318:377" data-name="Product result">
                    <div className="relative rounded-[6px] shrink-0 size-[88px]" data-node-id="318:378" data-name="Product image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgProductImage} />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="318:379" data-name="Product details">
                      <p className="font-['Geist:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#1f1f1f] text-[15px] w-[min-content]" data-node-id="318:380">
                        Classic Linen Shirt
                      </p>
                      <p className="font-['Geist:Regular'] font-normal min-w-full relative shrink-0 text-[#757575] text-[12px] w-[min-content]" data-node-id="318:381">
                        Men’s · Natural
                      </p>
                      <p className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap" data-node-id="318:382">
                        £59.00
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="blur-[0px] content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="318:392" data-name="Product result">
                    <div className="relative rounded-[6px] shrink-0 size-[88px]" data-node-id="318:393" data-name="Product image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgProductImage1} />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="318:394" data-name="Product details">
                      <p className="font-['Geist:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#1f1f1f] text-[15px] w-[min-content]" data-node-id="318:395">
                        Relaxed Linen Shirt
                      </p>
                      <p className="font-['Geist:Regular'] font-normal min-w-full relative shrink-0 text-[#757575] text-[12px] w-[min-content]" data-node-id="318:396">
                        Women’s · White
                      </p>
                      <p className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap" data-node-id="318:397">
                        £54.00
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="blur-[0px] content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="318:407" data-name="Product result">
                    <div className="relative rounded-[6px] shrink-0 size-[88px]" data-node-id="318:408" data-name="Product image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgProductImage2} />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="318:409" data-name="Product details">
                      <p className="font-['Geist:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#1f1f1f] text-[15px] w-[min-content]" data-node-id="318:410">
                        Short Sleeve Linen Shirt
                      </p>
                      <p className="font-['Geist:Regular'] font-normal min-w-full relative shrink-0 text-[#757575] text-[12px] w-[min-content]" data-node-id="318:411">
                        Men’s · Sand
                      </p>
                      <p className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap" data-node-id="318:412">
                        £49.00
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="blur-[0px] content-stretch flex gap-[16px] items-center overflow-clip py-[8px] relative shrink-0 w-full" data-node-id="318:422" data-name="Product result">
                    <div className="relative rounded-[6px] shrink-0 size-[88px]" data-node-id="318:423" data-name="Product image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgProductImage3} />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="318:424" data-name="Product details">
                      <p className="font-['Geist:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#1f1f1f] text-[15px] w-[min-content]" data-node-id="318:425">
                        Striped Linen Shirt
                      </p>
                      <p className="font-['Geist:Regular'] font-normal min-w-full relative shrink-0 text-[#757575] text-[12px] w-[min-content]" data-node-id="318:426">
                        Women’s · Blue stripe
                      </p>
                      <p className="font-['Geist:Medium'] font-medium relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap" data-node-id="318:427">
                        £64.00
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="318:352" data-name="Suggestions">
                <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#757575] text-[14px] uppercase whitespace-nowrap" data-node-id="318:353">
                  Suggestions
                </p>
                <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full" data-node-id="318:354" data-name="Suggestion list">
                  <div className="content-stretch flex items-center justify-between overflow-clip py-[10px] relative shrink-0 w-full" data-node-id="318:355" data-name="Suggestion">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#1f1f1f] text-[15px] whitespace-nowrap" data-node-id="318:356">
                      linen shirts men
                    </p>
                    <div className="flex items-center justify-center relative shrink-0" data-node-id="318:357">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="relative size-[14px]" data-name="arrow-up-left">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpLeft} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-between overflow-clip py-[10px] relative shrink-0 w-full" data-node-id="318:359" data-name="Suggestion">
                    <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#1f1f1f] text-[15px] whitespace-nowrap" data-node-id="318:360">
                      linen shirts women
                    </p>
                    <div className="flex items-center justify-center relative shrink-0" data-node-id="318:361">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="relative size-[14px]" data-name="arrow-up-left">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpLeft} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--anchor-color-white,white)] border-[#eaeaea] border-solid border-t content-stretch flex h-[88px] items-center overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="318:428" data-name="Results action">
              <div className="bg-[var(--button-secondary-bg,white)] border-[#eaeaea] border-[length:var(--button-secondary-border-width,2px)] border-solid content-stretch flex flex-[1_0_0] h-[44px] items-center justify-center min-w-px px-[var(--button-secondary-padding-x,24px)] py-[var(--button-secondary-padding-y,12px)] relative rounded-[var(--button-corner-radius,6px)]" data-node-id="318:429" data-name="View all results">
                <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[var(--button-line-height,20px)] relative shrink-0 text-[#1f1f1f] text-[length:var(--button-font-size,14px)] whitespace-nowrap" data-node-id="I318:429;60:13">
                  View all 24 results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}