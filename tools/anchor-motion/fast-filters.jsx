const assetPathPrefix = "https://www.figma.com/api/mcp/asset/218979af-0a77-4d12-bf60-47fd6d777b12";
import { motion } from "motion/react";
const imgFrame9146 = `${assetPathPrefix}/933c4.svg`;
const imgFrame17070 = `${assetPathPrefix}/9e330.svg`;
const imgFrame17071 = `${assetPathPrefix}/a8b1f.svg`;
const imgFrame17072 = `${assetPathPrefix}/cb83e.svg`;
const imgFrame17073 = `${assetPathPrefix}/03654.svg`;

export default function ImageFastFiltersTransitionAnimation() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[48px] items-start p-[32px] relative rounded-[12px] size-full" data-node-id="209:292" data-name="Image Fast Filters Transition / Animation">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[240px]" data-node-id="209:293" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="209:294" data-name="Frame">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#111827] text-[18px] w-full" data-node-id="209:295">
            Image Fast Filters
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#6b7280] text-[13px] w-full" data-node-id="209:296">
            Information
          </p>
        </div>
        <button className="bg-[#f7f7f7] content-stretch cursor-pointer flex gap-[12px] items-center justify-center p-[12px] relative rounded-[55px] shrink-0" data-node-id="209:297">
          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap" data-node-id="209:298">
            Play Animation
          </p>
          <div className="relative shrink-0 size-[40px]" data-node-id="209:299">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame9146} />
          </div>
        </button>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="209:301" data-name="Frame">
        <div
          className="flex flex-row items-center self-stretch"
          data-node-id="209:302"
          data-motion-annotations="****Carousel motion spec****

  

****Entrance****

*   Cards fade in with staggered delay (50 ms apart, left → right), 300 ms each, ease-out (0.0, 0.0, 0.58, 1.0)
*   Arrows fade in after last card, 100 ms

  

****Scroll / slide****

*   Arrow tap slides by 1 card + gap (156 px), 400 ms, ease-in-out (0.42, 0.0, 0.58, 1.0)
*   Snap to nearest card edge
*   Supports touch/drag with momentum

  

****Arrows****

*   Hover: opacity 0.6 → 1.0, 150 ms ease-out
*   Press: scale 0.95, 100 ms
*   Hidden at boundary (fade out 200 ms)

  

****Card interaction****

*   Hover: scale 1.05 + shadow fade-in, 200 ms ease-out
*   Tap: scale 0.97, 80 ms
*   Selected: border appears, 150 ms ease-in-out"
        >
          <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col gap-[36px] h-full items-center justify-center p-[24px] relative rounded-[8px] shrink-0" data-name="placeholder-before">
            <div className="content-stretch flex gap-[36px] items-center overflow-clip relative shrink-0" data-node-id="209:580">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="209:581">
                <div className="-scale-y-100 flex-none rotate-180">
                  <motion.div className="relative size-[36px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame17070} />
                  </motion.div>
                </div>
              </div>
              <div className="content-stretch flex gap-[56px] items-center relative shrink-0 w-[724px]" data-node-id="209:583" data-name="Carousel – Blank">
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:599" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:600" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:601">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:607" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:608" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:609">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:615" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:616" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:617">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:623" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:624" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:625">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:631" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:632" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:633">
                    Filter Title
                  </p>
                </motion.div>
              </div>
              <div className="flex items-center justify-center relative shrink-0" data-node-id="209:657">
                <div className="-scale-y-100 flex-none">
                  <motion.div className="relative size-[36px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame17071} />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-node-id="209:787">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="209:788">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[36px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame17072} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[56px] items-center relative shrink-0 w-[724px]" data-node-id="209:790" data-name="Carousel – Blank">
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:791" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:792" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:793">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:794" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:795" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:796">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:797" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:798" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:799">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:800" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:801" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:802">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:803" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:804" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:805">
                    Filter Title
                  </p>
                </motion.div>
                <motion.div className="blur-[0px] h-[169px] relative shrink-0 w-[100px]" data-node-id="209:806" data-name="Fast Filter">
                  <div className="absolute bg-[#333] inset-[0_0_17.16%_0] rounded-[5px]" data-node-id="209:807" data-name="image 5" />
                  <p className="[word-break:break-word] absolute capitalize font-['Geist:Regular'] font-normal inset-[88.76%_13.37%_1.78%_13.63%] leading-none text-[16px] text-[color:var(--mc-black,#1d1d1b)] text-center whitespace-nowrap" data-node-id="209:808">
                    Filter Title
                  </p>
                </motion.div>
              </div>
              <div className="flex items-center justify-center relative shrink-0" data-node-id="209:809">
                <div className="-scale-y-100 flex-none">
                  <div className="relative size-[36px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame17073} />
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