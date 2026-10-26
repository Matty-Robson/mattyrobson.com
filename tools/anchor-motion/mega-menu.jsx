const assetPathPrefix = "https://www.figma.com/api/mcp/asset/b571d87a-69ee-4301-aacb-eda54a28dcbd";
import { motion } from "motion/react";
const imgFrame9133 = `${assetPathPrefix}/c5d8d.png`;
const imgFrame9134 = `${assetPathPrefix}/a1f82.png`;
const imgFrame9146 = `${assetPathPrefix}/933c4.svg`;

export default function DropdownMenuFullWidthTransitionAnimation() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[48px] items-start p-[32px] relative rounded-[12px] size-full" data-node-id="158:2429" data-name="Dropdown Menu Full Width Transition / Animation">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-node-id="158:2430" data-name="Frame">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="158:2431" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] min-w-full relative shrink-0 text-[#111827] text-[18px] w-[min-content]" data-node-id="158:2432">
            Full Width Dropdown Menu
          </p>
          <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6b7280] text-[13px] w-[min-content]" data-node-id="158:2433">
            Information
          </p>
          <button className="bg-[#f7f7f7] content-stretch cursor-pointer flex gap-[12px] items-center justify-center p-[12px] relative rounded-[55px] shrink-0" data-node-id="166:2525">
            <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap" data-node-id="166:2526">
              Play Animation
            </p>
            <div className="relative shrink-0 size-[40px]" data-node-id="166:2527">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame9146} />
            </div>
          </button>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="158:2434" data-name="Frame">
        <div className="flex flex-row items-center self-stretch" data-node-id="158:2435">
          <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center justify-center p-[24px] relative rounded-[8px] shrink-0" data-name="placeholder-before">
            <div
              className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[80px] py-[42px] relative shrink-0 w-[1600px]"
              data-node-id="158:2436"
              data-motion-annotations="****Mega Menu — Reveal Animation****

  

****Overview****

Staggered entrance — elements reveal left-to-right, menu columns first then images. Each element translates down, fades in, and deblurs simultaneously.

  

****Total duration:**** 600ms

  

****Properties animated (per element)****

*   `translateY`: -20px → 0px
*   `opacity`: 0 → 1
*   `filter: blur()`: 8px → 0px

  

****Easing:**** cubic-bezier(0.16, 1, 0.3, 1)

  

****Stagger timing****

  

| Element | Delay | Start | End |

|---|---|---|---|

| Category 1 | 0ms | 0ms | 300ms |

| Category 2 | 60ms | 60ms | 360ms |

| Category 3 | 120ms | 120ms | 420ms |

| Category 4 | 180ms | 180ms | 480ms |

| Image 1 | 240ms | 240ms | 540ms |

| Image 2 | 300ms | 300ms | 600ms |

  

****Stagger interval:**** 60ms

****Per-element duration:**** 300ms"
              data-name="Dropdown / MegaMenu"
            >
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="158:2437">
                <motion.div className="blur-[0px] content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="158:2447">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap" data-node-id="158:2448">
                    <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0" data-node-id="158:2449">
                      Category 1
                    </p>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0" data-node-id="158:2450">
                      <p className="leading-[2] mb-0">Preview link 1</p>
                      <p className="leading-[2] mb-0">Preview link 2</p>
                      <p className="leading-[2] mb-0">Preview link 3</p>
                      <p className="leading-[2] mb-0">Preview link 4</p>
                      <p className="leading-[2] mb-0">Preview link 5</p>
                      <p className="leading-[2] mb-0">Preview link 6</p>
                      <p className="leading-[2]">Preview link 7</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="blur-[0px] content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="158:2460">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap" data-node-id="158:2461">
                    <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0" data-node-id="158:2462">
                      Category 2
                    </p>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0" data-node-id="158:2463">
                      <p className="leading-[2] mb-0">Preview link 1</p>
                      <p className="leading-[2] mb-0">Preview link 2</p>
                      <p className="leading-[2] mb-0">Preview link 3</p>
                      <p className="leading-[2] mb-0">Preview link 4</p>
                      <p className="leading-[2] mb-0">Preview link 5</p>
                      <p className="leading-[2] mb-0">Preview link 6</p>
                      <p className="leading-[2]">Preview link 7</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="blur-[0px] content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="158:2473">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap" data-node-id="158:2474">
                    <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0" data-node-id="158:2475">
                      Category 3
                    </p>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0" data-node-id="158:2476">
                      <p className="leading-[2] mb-0">Preview link 1</p>
                      <p className="leading-[2] mb-0">Preview link 2</p>
                      <p className="leading-[2] mb-0">Preview link 3</p>
                      <p className="leading-[2] mb-0">Preview link 4</p>
                      <p className="leading-[2] mb-0">Preview link 5</p>
                      <p className="leading-[2] mb-0">Preview link 6</p>
                      <p className="leading-[2]">Preview link 7</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="blur-[0px] content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="158:2486">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap" data-node-id="158:2487">
                    <p className="font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0" data-node-id="158:2488">
                      Category 4
                    </p>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0" data-node-id="158:2489">
                      <p className="leading-[2] mb-0">Preview link 1</p>
                      <p className="leading-[2] mb-0">Preview link 2</p>
                      <p className="leading-[2] mb-0">Preview link 3</p>
                      <p className="leading-[2] mb-0">Preview link 4</p>
                      <p className="leading-[2] mb-0">Preview link 5</p>
                      <p className="leading-[2] mb-0">Preview link 6</p>
                      <p className="leading-[2]">Preview link 7</p>
                    </div>
                  </div>
                </motion.div>
                <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-node-id="158:2490">
                  <motion.div className="blur-[0px] relative shrink-0 size-[350px]" data-node-id="158:2500">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame9133} />
                  </motion.div>
                  <motion.div className="blur-[0px] relative shrink-0 size-[350px]" data-node-id="158:2510">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame9134} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}