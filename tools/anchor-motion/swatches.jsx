const assetPathPrefix = "https://www.figma.com/api/mcp/asset/8e163352-b259-4e43-813e-72980a74c352";
import { motion } from "motion/react";
const imgContainer = `${assetPathPrefix}/27ebb.png`;
const imgIcon = `${assetPathPrefix}/e3e46.svg`;
const imgIcon1 = `${assetPathPrefix}/6c53c.svg`;
const imgIcon2 = `${assetPathPrefix}/7b550.svg`;

type Component1Props = {
  className?: string;
  property1?: "Swatches";
};

function Component1({ className, property1 = "Swatches" }: Component1Props) {
  return (
    <div className={className || "content-stretch flex gap-[8px] items-center pl-[4px] relative"} data-node-id="35:2233">
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="35:2188" data-name="Container">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="35:2189" data-name="Container">
          <div className="bg-[#c8392b] relative rounded-[4px] shadow-[0px_0px_0px_1px_white,0px_0px_0px_3px_#c8392b] shrink-0 size-[16px]" data-node-id="35:2190" data-name="Button - Red Check" />
          <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2191" data-name="Button - Black" />
          <div className="bg-[#6b9bde] relative rounded-[4px] shrink-0 size-[16px]" data-node-id="35:2192" data-name="Button - Blue" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center opacity-70 relative shrink-0" data-node-id="35:2193" data-name="Button">
        <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[12px] relative shrink-0 text-[#08082f] text-[12px] text-center whitespace-nowrap" data-node-id="35:2194">{`Show all 7 `}</p>
      </div>
    </div>
  );
}

export default function SwatchesTransitionBeforeAfter() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[48px] items-start p-[32px] relative rounded-[12px] size-full" data-node-id="35:2071" data-name="Swatches TransitionBefore / After">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-node-id="35:2072" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="35:2073" data-name="Frame">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#111827] text-[18px] w-full" data-node-id="35:2074">
            Swatches Transition
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#6b7280] text-[13px] w-full" data-node-id="35:2075">
            Hover over swatches to reveal more
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="35:2076" data-name="Frame">
        <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col isolate items-center justify-center p-[24px] relative rounded-[8px] shrink-0" data-node-id="35:2080" data-name="placeholder-after">
          <div className="content-stretch flex items-start relative shrink-0 z-[1]" data-node-id="246:1770">
            <div className="content-stretch flex flex-col h-[603px] items-start overflow-clip relative shrink-0 w-[344px]" data-node-id="246:1771" data-name="Container">
              <div className="content-stretch flex flex-col h-[603px] items-start overflow-clip relative shrink-0 w-full" data-node-id="246:1772" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="246:1773" data-name="Link - test product">
                  <div className="content-stretch flex flex-col h-[344px] items-start overflow-clip relative shrink-0 w-full" data-node-id="246:1774" data-name="Container">
                    <div className="content-stretch flex h-[344px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="246:1775" data-name="Container">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
                      <div className="absolute content-center flex flex-wrap gap-[8px] items-center left-[12px] top-[12px] w-[268px]" data-node-id="246:1776" data-name="product-badges">
                        <div className="bg-[#f59e0b] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="246:1777" data-name="badge-popular">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[#111827] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="246:1778">
                            Popular
                          </p>
                        </div>
                        <div className="bg-[#14b8a6] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="246:1779" data-name="badge-selling-fast">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="246:1780">
                            Selling Fast
                          </p>
                        </div>
                        <div className="bg-[#dc2626] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="246:1781" data-name="badge-sale">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="246:1782">
                            Sale
                          </p>
                        </div>
                        <div className="bg-[#f3f4f6] border border-[#262626] border-solid content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="246:1783" data-name="badge-out-of-stock">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[16px] relative shrink-0 text-[#374151] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="246:1784">
                            Out of Stock
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[8px] relative shrink-0 w-full" data-node-id="246:1785" data-name="Container">
                  <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular'] font-normal items-start justify-between relative shrink-0 w-[328px]" data-node-id="246:1786" data-name="Paragraph">
                    <p className="leading-[25px] relative shrink-0 text-[#1a3521] text-[16px] text-pretty w-[249px]" data-node-id="246:1787">
                      Test Product Title
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-end leading-[normal] relative shrink-0 whitespace-nowrap" data-node-id="246:1788">
                      <p className="relative shrink-0 text-[#08082f] text-[20px]" data-node-id="246:1789">
                        £10.00
                      </p>
                      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid line-through relative shrink-0 text-[#656565] text-[12px]" data-node-id="246:1790">
                        £19.00
                      </p>
                    </div>
                  </div>
                  <Component1 className="content-stretch flex gap-[8px] items-center pl-[4px] relative shrink-0" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[328px]" data-node-id="246:1799" data-name="QuickAddComponent">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="246:1800" data-name="Container">
                      <div className="border border-[#dfdfdf] border-solid content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip px-[9px] py-[10px] relative rounded-[6px]" data-node-id="246:1801" data-name="Dropdown">
                        <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="246:1802">
                          Size: Small
                        </p>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="246:1803" data-name="Text">
                          <div className="max-w-[16px] relative shrink-0 size-[16px]" data-node-id="246:1804" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                      <div className="border border-[#dfdfdf] border-solid content-stretch flex h-[42px] items-center justify-between py-[1.6px] relative rounded-[6px] shrink-0 w-[156px]" data-node-id="246:1806" data-name="QuantitySelectorComponent">
                        <div className="content-stretch flex flex-col items-start justify-center opacity-50 relative shrink-0" data-node-id="246:1807" data-name="Button - Decrease quantity">
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-node-id="246:1808" data-name="Text">
                            <div className="max-w-[19.200000762939453px] relative shrink-0 size-[19.195px]" data-node-id="246:1809" data-name="Icon">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[24px] items-start justify-center overflow-clip relative shrink-0" data-node-id="246:1811" data-name="Number Input - Quantity">
                          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center w-full" data-node-id="246:1812">
                            1
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="246:1813" data-name="Button - Increase quantity">
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-node-id="246:1814" data-name="Text">
                            <div className="max-w-[19.200000762939453px] relative shrink-0 size-[19.195px]" data-node-id="246:1815" data-name="Icon">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-[328px]" data-node-id="246:1818" data-name="Container">
                      <div className="bg-black border border-black border-solid content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[16px] py-[8px] relative rounded-[6px]" data-node-id="246:1819" data-name="Button">
                        <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="246:1820">
                          View Product / Add to Bag
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}