const assetPathPrefix = "https://www.figma.com/api/mcp/asset/977ade9e-e03b-4ba7-bd42-12121365cca8";
import { motion } from "motion/react";
const imgScreenshot20260930At0911521 = `${assetPathPrefix}/f6782.png`;
const imgFrame9146 = `${assetPathPrefix}/933c4.svg`;
const imgIcon = `${assetPathPrefix}/cb108.svg`;

export default function TransitionAnimation() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[48px] items-start p-[32px] relative rounded-[12px] size-full" data-node-id="269:5071" data-name="Transition / Animation">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[240px]" data-node-id="269:5072" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="269:5073" data-name="Frame">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#111827] text-[18px] w-full" data-node-id="269:5074">
            Nested Menus
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#6b7280] text-[13px] w-full" data-node-id="269:5075">{`For the `}</p>
        </div>
        <button className="bg-[#f7f7f7] content-stretch cursor-pointer flex gap-[12px] items-center justify-center p-[12px] relative rounded-[55px] shrink-0" data-node-id="269:5076">
          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap" data-node-id="269:5077">
            Play Animation
          </p>
          <div className="relative shrink-0 size-[40px]" data-node-id="269:5078">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame9146} />
          </div>
        </button>
      </div>
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="269:5080" data-name="Frame">
        <div className="flex flex-row items-center self-stretch" data-node-id="269:5081">
          <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center justify-center p-[24px] relative rounded-[8px] shrink-0" data-name="placeholder-before">
            <div className="h-[163px] relative shrink-0 w-[344px]" data-node-id="273:25" data-name="Screenshot 2026-09-30 at 09.11.52 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[100.04%] left-[-16.73%] max-w-none top-0 w-[119.53%]" src={imgScreenshot20260930At0911521} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#e5e7eb] content-stretch flex items-start left-[16px] px-[10px] py-[4px] rounded-[4px] top-[16px]" data-node-id="273:27" data-name="badge">
          <p className="[word-break:break-word] font-['Geist_Mono:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#6b7280] text-[10px] uppercase whitespace-nowrap" data-node-id="273:28">
            Before
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="269:5255" data-name="Frame">
        <div className="flex flex-row items-center self-stretch" data-node-id="269:5256">
          <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center justify-center p-[24px] relative rounded-[8px] shrink-0" data-name="placeholder-before">
            <div className="h-[420px] relative shrink-0 w-[300px]" data-node-id="269:5257" data-name="Dropdown Transition Animation">
              <motion.div className="absolute bg-white h-[266px] left-0 overflow-clip rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[300px]" data-node-id="269:5258" data-name="Card">
                <motion.div className="absolute blur-[0px] h-[208px] left-[29px] top-[29px] w-[242px]" data-node-id="269:5259" data-name="Menu 1 - Original">
                  <motion.div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-0 w-[242px]" data-node-id="269:5260" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5261" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5262">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5263" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5264">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[36px] w-[242px]" data-node-id="269:5266" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5267" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5268">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5269" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5270">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[72px] w-[242px]" data-node-id="269:5272" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5273" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5274">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5275" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5276">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[108px] w-[242px]" data-node-id="269:5278" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5279" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5280">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5281" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5282">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[144px] w-[242px]" data-node-id="269:5284" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5285" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5286">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5287" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5288">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[180px] w-[242px]" data-node-id="269:5290" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5291" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5292">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5293" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5294">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div className="absolute h-[352px] left-[29px] opacity-0 top-[29px] w-[242px]" data-node-id="269:5296" data-name="Menu 2 - Expanded">
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-0 w-[242px]" data-node-id="269:5297" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5298" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5299">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5300" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5301">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[36px] w-[242px]" data-node-id="269:5303" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5304" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5305">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5306" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5307">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[72px] w-[242px]" data-node-id="269:5309" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5310" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5311">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5312" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5313">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[108px] w-[242px]" data-node-id="269:5315" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5316" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5317">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5318" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5319">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[144px] w-[242px]" data-node-id="269:5321" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5322" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5323">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5324" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5325">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[180px] w-[242px]" data-node-id="269:5327" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5328" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5329">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5330" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5331">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[216px] w-[242px]" data-node-id="269:5333" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5334" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5335">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5336" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5337">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[252px] w-[242px]" data-node-id="269:5339" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5340" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5341">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5342" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5343">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[288px] w-[242px]" data-node-id="269:5345" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5346" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5347">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5348" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5349">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute blur-[0px] content-stretch flex items-center justify-between left-0 py-[4px] top-[324px] w-[242px]" data-node-id="269:5351" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="269:5352" data-name="Link">
                      <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[20px] relative shrink-0 text-[#1a3521] text-[16px] whitespace-nowrap" data-node-id="269:5353">
                        Preview Link
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[16px] items-start pl-[8px] relative shrink-0 w-[24px]" data-node-id="269:5354" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-0" data-node-id="269:5355">
                        <div className="-rotate-90 flex-none">
                          <div className="relative size-[16px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#111827] content-stretch flex items-start left-[16px] px-[10px] py-[4px] rounded-[4px] top-[16px]" data-node-id="273:30" data-name="badge">
          <p className="[word-break:break-word] font-['Geist_Mono:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" data-node-id="273:31">
            After
          </p>
        </div>
      </div>
    </div>
  );
}