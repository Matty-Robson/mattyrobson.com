const assetPathPrefix = "https://www.figma.com/api/mcp/asset/175b3c5b-ef22-4c65-b858-f21cef66475b";
import { motion } from "motion/react";
const imgVector = `${assetPathPrefix}/6ee51.svg`;
const imgPhosphorPlusRegular = `${assetPathPrefix}/9d214.svg`;
const imgPhosphorCaretDownRegular = `${assetPathPrefix}/07d31.svg`;

export default function AccordionPdpTransitionAnimation() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[48px] items-start p-[32px] relative rounded-[12px] size-full" data-node-id="218:1264" data-name="Accordion PDP Transition / Animation">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-node-id="218:1265" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="218:1266" data-name="Frame">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#111827] text-[18px] w-full" data-node-id="218:1267">
            Accordion PDP
          </p>
          <p className="font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#6b7280] text-[13px] w-full" data-node-id="218:1268">
            Information
          </p>
        </div>
      </div>
      <div className="content-stretch flex h-[318px] items-start justify-center relative shrink-0" data-node-id="218:1273" data-name="Frame">
        <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center p-[24px] relative rounded-[8px] shrink-0" data-node-id="218:1274" data-name="placeholder-before">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1303" data-name="Container">
            <motion.div className="border-[#999] border-b-[length:var(--button-utility-border-width,1px)] border-solid content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1310" data-name="Details 1">
              <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-node-id="218:1311" data-name="Summary">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[#2b2b2b] text-[16px] uppercase whitespace-nowrap" data-node-id="218:1312">
                  Accordion title
                </p>
                <div className="content-stretch flex flex-col items-start min-w-[16px] relative shrink-0" data-node-id="218:1313" data-name="Text">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="218:1314" data-name="Phosphor / Plus / Regular">
                    <div className="absolute left-0 overflow-clip size-[16px] top-0" data-node-id="218:1315" data-name="Phosphor / Plus / Regular">
                      <motion.div className="absolute inset-[12.5%]" data-node-id="218:1322" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[112px] relative shrink-0 w-full" data-node-id="218:1323" data-name="Container">
                <p className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[24px] left-[16px] text-[#0c0c0c] text-[16px] text-pretty top-0 w-[618px]" data-node-id="218:1336">
                  There are a range of carriage options to choose from during the checkout process, these will be appropriate for the order weight, size and postcode. An estimated delivery date will also be displayed with each option available. All our couriers collect by 5pm Monday to Friday only.
                </p>
              </div>
            </motion.div>
            <div className="border-[#999] border-b-[length:var(--button-utility-border-width,1px)] border-solid content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1337" data-name="Details">
              <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-node-id="218:1338" data-name="Summary">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[#2b2b2b] text-[16px] uppercase whitespace-nowrap" data-node-id="218:1339">
                  Accordion title
                </p>
                <div className="content-stretch flex flex-col items-start min-w-[16px] relative shrink-0" data-node-id="218:1340" data-name="Text">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="218:1341" data-name="Phosphor / Plus / Regular">
                    <div className="absolute left-0 size-[16px] top-0" data-node-id="218:1342" data-name="Phosphor / Plus / Regular">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorPlusRegular} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[112px] relative shrink-0 w-full" data-node-id="218:1344" data-name="Container">
                <p className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[24px] left-[16px] text-[#0c0c0c] text-[16px] text-pretty top-0 w-[618px]" data-node-id="218:1345">
                  There are a range of carriage options to choose from during the checkout process, these will be appropriate for the order weight, size and postcode. An estimated delivery date will also be displayed with each option available. All our couriers collect by 5pm Monday to Friday only.
                </p>
              </div>
            </div>
            <div className="border-[#999] border-b-[length:var(--button-utility-border-width,1px)] border-solid content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1346" data-name="Details">
              <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-node-id="218:1347" data-name="Summary">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[#2b2b2b] text-[16px] uppercase whitespace-nowrap" data-node-id="218:1348">
                  Accordion title
                </p>
                <div className="content-stretch flex flex-col items-start min-w-[16px] relative shrink-0" data-node-id="218:1349" data-name="Text">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="218:1350" data-name="Phosphor / Plus / Regular">
                    <div className="absolute left-0 size-[16px] top-0" data-node-id="218:1351" data-name="Phosphor / Plus / Regular">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorPlusRegular} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[112px] relative shrink-0 w-full" data-node-id="218:1353" data-name="Container">
                <p className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[24px] left-[16px] text-[#0c0c0c] text-[16px] text-pretty top-0 w-[618px]" data-node-id="218:1354">
                  There are a range of carriage options to choose from during the checkout process, these will be appropriate for the order weight, size and postcode. An estimated delivery date will also be displayed with each option available. All our couriers collect by 5pm Monday to Friday only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex h-[318px] items-start justify-center relative shrink-0"
        data-node-id="218:1633"
        data-motion-annotations="****Accordion expand / collapse animation****

  

Timeline duration: ****2.875s****. The first accordion item demonstrates the open → hold → close cycle.

  

****Phase 1 — Expand (1s → 1.55s)****

*   Container height animates from 53px to 164px
*   Caret icon rotates 180° (points up)
*   Body text fades in (opacity 0 → 1) and slides up 12px into place
*   Easing: cubic-bezier(0.16, 1, 0.3, 1) — fast deceleration

  

****Phase 2 — Hold open (1.55s → 2.6s)****

*   All properties hold at their expanded values

  

****Phase 3 — Collapse (2.6s → 2.875s)****

*   Container height returns to 53px
*   Caret rotates back to 0°
*   Body text fades out and slides down 12px
*   Easing: cubic-bezier(0.7, 0, 0.84, 0) — fast acceleration

  

****Implementation notes****

*   Use CSS `max-height` or `grid-template-rows` for the expand/collapse height transition
*   Rotate the caret with `transform: rotate(180deg)`
*   Body text uses a combined opacity + translateY transition, slightly delayed (~150ms after expand starts)
*   Collapse is faster than expand (275ms vs 550ms)"
        data-name="Frame"
      >
        <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center p-[24px] relative rounded-[8px] shrink-0" data-node-id="218:1634" data-name="placeholder-before">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1635" data-name="Container">
            <motion.div className="border-[#999] border-b-[length:var(--button-utility-border-width,1px)] border-solid content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1642" data-name="Details 1">
              <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-node-id="218:1643" data-name="Summary">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[#2b2b2b] text-[16px] uppercase whitespace-nowrap" data-node-id="218:1644">
                  Accordion title
                </p>
                <div className="content-stretch flex flex-col items-start min-w-[16px] relative shrink-0" data-node-id="218:1645" data-name="Text">
                  <motion.div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="218:1652" data-name="Phosphor / Caret Down / Regular">
                    <div className="absolute left-0 size-[16px] top-0" data-node-id="218:1653" data-name="Phosphor / Caret Down / Regular">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="h-[112px] relative shrink-0 w-full" data-node-id="218:1655" data-name="Container">
                <p className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[24px] left-[16px] text-[#0c0c0c] text-[16px] text-pretty top-0 w-[618px]" data-node-id="218:1668">
                  There are a range of carriage options to choose from during the checkout process, these will be appropriate for the order weight, size and postcode. An estimated delivery date will also be displayed with each option available. All our couriers collect by 5pm Monday to Friday only.
                </p>
              </div>
            </motion.div>
            <div className="border-[#999] border-b-[length:var(--button-utility-border-width,1px)] border-solid content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1669" data-name="Details">
              <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-node-id="218:1670" data-name="Summary">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[#2b2b2b] text-[16px] uppercase whitespace-nowrap" data-node-id="218:1671">
                  Accordion title
                </p>
                <div className="content-stretch flex flex-col items-start min-w-[16px] relative shrink-0" data-node-id="218:1672" data-name="Text">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="218:1673" data-name="Phosphor / Caret Down / Regular">
                    <div className="absolute left-0 size-[16px] top-0" data-node-id="218:1674" data-name="Phosphor / Caret Down / Regular">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[112px] relative shrink-0 w-full" data-node-id="218:1676" data-name="Container">
                <p className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[24px] left-[16px] text-[#0c0c0c] text-[16px] text-pretty top-0 w-[618px]" data-node-id="218:1677">
                  There are a range of carriage options to choose from during the checkout process, these will be appropriate for the order weight, size and postcode. An estimated delivery date will also be displayed with each option available. All our couriers collect by 5pm Monday to Friday only.
                </p>
              </div>
            </div>
            <div className="border-[#999] border-b-[length:var(--button-utility-border-width,1px)] border-solid content-stretch flex flex-col h-[53px] items-start overflow-clip relative shrink-0 w-[650px]" data-node-id="218:1678" data-name="Details">
              <div className="content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full" data-node-id="218:1679" data-name="Summary">
                <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[#2b2b2b] text-[16px] uppercase whitespace-nowrap" data-node-id="218:1680">
                  Accordion title
                </p>
                <div className="content-stretch flex flex-col items-start min-w-[16px] relative shrink-0" data-node-id="218:1681" data-name="Text">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="218:1682" data-name="Phosphor / Caret Down / Regular">
                    <div className="absolute left-0 size-[16px] top-0" data-node-id="218:1683" data-name="Phosphor / Caret Down / Regular">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[112px] relative shrink-0 w-full" data-node-id="218:1685" data-name="Container">
                <p className="[word-break:break-word] absolute font-['Geist:Regular'] font-normal leading-[24px] left-[16px] text-[#0c0c0c] text-[16px] text-pretty top-0 w-[618px]" data-node-id="218:1686">
                  There are a range of carriage options to choose from during the checkout process, these will be appropriate for the order weight, size and postcode. An estimated delivery date will also be displayed with each option available. All our couriers collect by 5pm Monday to Friday only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}