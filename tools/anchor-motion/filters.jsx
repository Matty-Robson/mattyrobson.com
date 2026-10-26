const assetPathPrefix = "https://www.figma.com/api/mcp/asset/e8dcf41f-a2ca-4cf5-9e67-345f46094181";
const imgIcon = `${assetPathPrefix}/eaa88.svg`;
const imgIcon1 = `${assetPathPrefix}/4b2ff.svg`;
const imgIcon2 = `${assetPathPrefix}/bb3ed.svg`;
const imgIcon3 = `${assetPathPrefix}/47367.svg`;
const imgPhosphorXRegular = `${assetPathPrefix}/e8904.svg`;
const imgPhosphorXRegular1 = `${assetPathPrefix}/f5cdb.svg`;
const imgPhosphorCaretDownRegular = `${assetPathPrefix}/21ca8.svg`;
const imgPhosphorCheckRegular = `${assetPathPrefix}/51cdd.svg`;
const imgDivider = `${assetPathPrefix}/02cc0.svg`;
const imgEllipse = `${assetPathPrefix}/abaeb.svg`;
const imgEllipse1 = `${assetPathPrefix}/11137.svg`;
const imgEllipse2 = `${assetPathPrefix}/5e9ea.svg`;
const imgEllipse3 = `${assetPathPrefix}/7b39d.svg`;
const imgEllipse4 = `${assetPathPrefix}/a7d25.svg`;
const imgLeftDragHandle = `${assetPathPrefix}/8911b.svg`;

export default function FilterDrawer() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[48px] items-start p-[32px] relative rounded-[12px] size-full" data-node-id="35:1413" data-name="Filter Drawer">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-node-id="35:1414" data-name="Frame">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="35:1415" data-name="Frame">
          <p className="font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#111827] text-[18px] w-full" data-node-id="35:1416">
            Filter Drawer
          </p>
          <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#6b7280] text-[13px] w-full whitespace-pre-wrap" data-node-id="35:1417">
            <p className="leading-[1.4] mb-0">{`Active filter chips replace hidden state. Users see what's applied and can remove filters inline without hunting through each section.`}</p>
            <p className="leading-[1.4] mb-0">​</p>
            <p className="leading-[1.4] mb-0">{`A "3 Active" badge on the header gives immediate feedback on filter count, reducing cognitive load.`}</p>
            <p className="leading-[1.4] mb-0">​</p>
            <p className="leading-[1.4] mb-0">Toggle switches for Availability replace a collapsed accordion, making the most common filter one-tap instead of two.</p>
            <p className="leading-[1.4] mb-0">​</p>
            <p className="leading-[1.4] mb-0">{`Pill selectors for Size and colour swatches replace a scrolling text list with "See more" links. All options are visible at a glance, cutting interaction steps.`}</p>
            <p className="leading-[1.4] mb-0">​</p>
            <p className="leading-[1.4] mb-0">A visible range slider for Price gives spatial context the raw number inputs lacked, making it faster to narrow a range.</p>
            <p className="leading-[1.4] mb-0">​</p>
            <p className="leading-[1.4]">{`The primary "Apply" CTA is now visually dominant over the secondary "Clear Filters" text link, establishing a clear action hierarchy and reducing accidental filter resets.`}</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[24px] h-[1055px] items-center relative shrink-0" data-node-id="35:1418" data-name="Frame">
        <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center justify-center px-[24px] relative rounded-[8px] shrink-0" data-node-id="35:1419" data-name="placeholder-before">
          <div className="absolute bg-[#e5e7eb] content-stretch flex items-start left-[15px] px-[10px] py-[4px] rounded-[4px] top-[15px]" data-node-id="35:1420" data-name="badge">
            <p className="[word-break:break-word] font-['Geist_Mono:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#6b7280] text-[10px] uppercase whitespace-nowrap" data-node-id="35:1421">
              Before
            </p>
          </div>
          <div className="bg-[#f2f2f2] content-stretch drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex flex-col h-[885px] items-start max-w-[512px] relative shrink-0 w-[512px]" data-node-id="35:1455" data-name="MobileFilterDrawerComponent">
            <div className="bg-white border-[#f5f5f5] border-b border-solid content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[512px]" data-node-id="35:1456" data-name="MobileFilterDrawerHeader">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:1457" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1458" data-name="Text">
                  <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[20px] relative shrink-0 text-[20px] text-black whitespace-nowrap" data-node-id="35:1459">{`Filter & Sort`}</p>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="35:1460" data-name="Button - Close drawer">
                  <div className="relative shrink-0 size-[24px]" data-node-id="35:1461" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[745_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="35:1463" data-name="MobileFilterDrawerContent">
              <div className="content-stretch flex flex-col items-start pb-[80px] px-[20px] relative shrink-0 w-[512px]" data-node-id="35:1464" data-name="FacetFiltersForm">
                <div className="border-[#dfdfdf] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:1465" data-name="FilterAccordion">
                  <div className="content-stretch flex items-center justify-between py-[20px] relative shrink-0 w-[472px]" data-node-id="35:1466" data-name="Button">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1467" data-name="Text">
                      <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1468">
                        Availability
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[12px] items-start pr-[8px] relative shrink-0 w-[20px]" data-node-id="35:1469" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" data-node-id="35:1470">
                        <div className="flex-none rotate-180">
                          <div className="relative size-[12px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#dfdfdf] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-[472px]" data-node-id="35:1472" data-name="FilterAccordion">
                  <div className="content-stretch flex items-center justify-between py-[20px] relative shrink-0 w-full" data-node-id="35:1473" data-name="Button">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1474" data-name="Text">
                      <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1475">
                        Price
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[12px] items-start pr-[8px] relative shrink-0 w-[20px]" data-node-id="35:1476" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" data-node-id="35:1477">
                        <div className="flex-none rotate-180">
                          <div className="relative size-[12px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-node-id="35:1479" data-name="Container">
                    <div className="content-stretch flex items-center relative shrink-0 w-[472px]" data-node-id="35:1480" data-name="Container">
                      <div className="content-stretch flex flex-[228_0_0] flex-col items-start min-w-px relative" data-node-id="35:1481" data-name="Container">
                        <div className="content-stretch flex flex-col h-[25px] items-start pb-[4px] relative shrink-0 w-[228px]" data-node-id="35:1482" data-name="Label">
                          <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1483">
                            Min
                          </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0)] border border-[#dfdfdf] border-solid content-stretch flex flex-col h-[39px] items-start justify-center overflow-clip px-[12px] py-[8px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[228px]" data-node-id="35:1484" data-name="Number Input">
                          <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9ca3af] text-[14px] w-full" data-node-id="35:1485">
                            0.0
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[228_0_0] flex-col items-start min-w-px pl-[16px] relative" data-node-id="35:1486" data-name="Container">
                        <div className="content-stretch flex flex-col h-[25px] items-start pb-[4px] relative shrink-0 w-[228px]" data-node-id="35:1487" data-name="Label">
                          <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1488">
                            Max
                          </p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0)] border border-[#dfdfdf] border-solid content-stretch flex flex-col h-[39px] items-start justify-center overflow-clip px-[12px] py-[8px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[228px]" data-node-id="35:1489" data-name="Number Input">
                          <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9ca3af] text-[14px] w-full" data-node-id="35:1490">
                            17998.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[37px] items-start pt-[16px] relative shrink-0 w-[472px]" data-node-id="35:1491" data-name="Container">
                      <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1492">{`Range: £0 to £17,998.00 `}</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#dfdfdf] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-[472px]" data-node-id="35:1493" data-name="FilterAccordion">
                  <div className="content-stretch flex items-center justify-between py-[20px] relative shrink-0 w-full" data-node-id="35:1494" data-name="Button">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1495" data-name="Text">
                      <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1496">
                        Size
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[12px] items-start pr-[8px] relative shrink-0 w-[20px]" data-node-id="35:1497" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" data-node-id="35:1498">
                        <div className="flex-none rotate-180">
                          <div className="relative size-[12px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-node-id="35:1500" data-name="Container">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="35:1501" data-name="Label">
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-node-id="35:1502" data-name="Text:margin">
                        <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1503" data-name="Text" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1504" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1505">{`Small `}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[33px] items-center pt-[12px] relative shrink-0 w-[472px]" data-node-id="35:1506" data-name="Label">
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-node-id="35:1507" data-name="Text:margin">
                        <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1508" data-name="Text" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1509" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1510">{`small `}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[33px] items-center pt-[12px] relative shrink-0 w-[472px]" data-node-id="35:1511" data-name="Label">
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-node-id="35:1512" data-name="Text:margin">
                        <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1513" data-name="Text" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1514" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1515">{`Medium `}</p>
                      </div>
                    </div>
                    <div className="h-[53px] relative shrink-0 w-full" data-node-id="35:1516" data-name="Container">
                      <div className="absolute h-[41px] left-[0.11px] opacity-70 top-[12px] w-[91px]" data-node-id="35:1517" data-name="Button">
                        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Quicksand:Regular'] font-normal leading-[21px] left-[45.89px] text-[14px] text-black text-center top-[-0.75px] whitespace-nowrap" data-node-id="35:1518">
                          See more (+3)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#dfdfdf] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-[472px]" data-node-id="35:1519" data-name="FilterAccordion">
                  <div className="content-stretch flex items-center justify-between py-[20px] relative shrink-0 w-full" data-node-id="35:1520" data-name="Button">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1521" data-name="Text">
                      <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1522">
                        Brand
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[12px] items-start pr-[8px] relative shrink-0 w-[20px]" data-node-id="35:1523" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" data-node-id="35:1524">
                        <div className="flex-none rotate-180">
                          <div className="relative size-[12px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-node-id="35:1526" data-name="Container">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="35:1527" data-name="Label">
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-node-id="35:1528" data-name="Text:margin">
                        <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1529" data-name="Text" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1530" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1531">{`Hydrogen Vendor `}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[33px] items-center pt-[12px] relative shrink-0 w-[472px]" data-node-id="35:1532" data-name="Label">
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-node-id="35:1533" data-name="Text:margin">
                        <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1534" data-name="Text" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1535" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1536">{`LM-Framework `}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[33px] items-center pt-[12px] relative shrink-0 w-[472px]" data-node-id="35:1537" data-name="Label">
                      <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-node-id="35:1538" data-name="Text:margin">
                        <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1539" data-name="Text" />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1540" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1541">{`LT-Datepicker `}</p>
                      </div>
                    </div>
                    <div className="h-[53px] relative shrink-0 w-full" data-node-id="35:1542" data-name="Container">
                      <div className="absolute h-[41px] left-[0.11px] opacity-70 top-[12px] w-[91px]" data-node-id="35:1543" data-name="Button">
                        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Quicksand:Regular'] font-normal leading-[21px] left-[45.89px] text-[14px] text-black text-center top-[-0.75px] whitespace-nowrap" data-node-id="35:1544">
                          See more (+3)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[#dfdfdf] border-b border-solid content-stretch flex flex-col h-[243px] items-start relative shrink-0 w-[472px]" data-node-id="35:1545" data-name="FilterAccordion">
                  <div className="content-stretch flex items-center justify-between py-[20px] relative shrink-0 w-full" data-node-id="35:1546" data-name="Button">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1547" data-name="Text">
                      <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1548">
                        Color
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[12px] items-start pr-[8px] relative shrink-0 w-[20px]" data-node-id="35:1549" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" data-node-id="35:1550">
                        <div className="flex-none rotate-180">
                          <div className="relative size-[12px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[_472px] grid-rows-[____40px_40px_40px_41px] h-[181px] pb-[20px] relative shrink-0 w-full" data-node-id="35:1552" data-name="Container">
                    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pl-[4px] relative row-1 self-stretch shrink-0" data-node-id="35:1553" data-name="SwatchesItemComponent:margin">
                      <div className="content-stretch flex h-[40px] items-start relative shrink-0 w-[468px]" data-node-id="35:1554" data-name="SwatchesItemComponent">
                        <div className="content-stretch flex gap-[8px] h-full items-center pr-[8px] py-[8px] relative shrink-0 w-[76px]" data-node-id="35:1555" data-name="Label">
                          <div className="bg-white border-4 border-[rgba(0,0,0,0.1)] border-solid relative rounded-[32px] shrink-0 size-[24px]" data-node-id="35:1556" data-name="Container">
                            <div className="absolute left-0 rounded-[32px] size-[16px] top-0" data-node-id="35:1557" data-name="Checkbox" />
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1558" data-name="Text">
                            <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1559">
                              Beige
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pl-[4px] relative row-2 self-stretch shrink-0" data-node-id="35:1560" data-name="SwatchesItemComponent:margin">
                      <div className="content-stretch flex h-[40px] items-start relative shrink-0 w-[468px]" data-node-id="35:1561" data-name="SwatchesItemComponent">
                        <div className="content-stretch flex gap-[8px] h-full items-center pr-[8px] py-[8px] relative shrink-0 w-[76px]" data-node-id="35:1562" data-name="Label">
                          <div className="bg-black border-4 border-[rgba(0,0,0,0.1)] border-solid relative rounded-[32px] shrink-0 size-[24px]" data-node-id="35:1563" data-name="Container">
                            <div className="absolute left-0 rounded-[32px] size-[16px] top-0" data-node-id="35:1564" data-name="Checkbox" />
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1565" data-name="Text">
                            <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1566">
                              Black
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pl-[4px] relative row-3 self-stretch shrink-0" data-node-id="35:1567" data-name="SwatchesItemComponent:margin">
                      <div className="content-stretch flex h-[40px] items-start relative shrink-0 w-[468px]" data-node-id="35:1568" data-name="SwatchesItemComponent">
                        <div className="content-stretch flex gap-[8px] h-full items-center pr-[8px] py-[8px] relative shrink-0 w-[68px]" data-node-id="35:1569" data-name="Label">
                          <div className="bg-[#6b9bde] border-4 border-[rgba(0,0,0,0.1)] border-solid relative rounded-[32px] shrink-0 size-[24px]" data-node-id="35:1570" data-name="Container">
                            <div className="absolute left-0 rounded-[32px] size-[16px] top-0" data-node-id="35:1571" data-name="Checkbox" />
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1572" data-name="Text">
                            <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="35:1573">
                              Blue
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 content-stretch flex flex-col items-center justify-center justify-self-start opacity-70 pb-[20px] relative row-4 self-stretch shrink-0 w-[96px]" data-node-id="35:1574" data-name="Button">
                      <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" data-node-id="35:1575">
                        See more (+13)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-[#dfdfdf] border-b border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:1576" data-name="FilterAccordion">
                  <div className="content-stretch flex items-center justify-between py-[20px] relative shrink-0 w-full" data-node-id="35:1577" data-name="Button">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1578" data-name="Text">
                      <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1579">
                        Sort by:
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col h-[12px] items-start pr-[8px] relative shrink-0 w-[20px]" data-node-id="35:1580" data-name="Icon:transform">
                      <div className="absolute flex items-center justify-center left-0 size-[12px] top-0" data-node-id="35:1581">
                        <div className="flex-none rotate-180">
                          <div className="relative size-[12px]" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start pb-[20px] relative shrink-0 w-full" data-node-id="35:1583" data-name="Container">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[82px]" data-node-id="35:1584" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1585" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1586" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1587">
                          Featured
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[112px]" data-node-id="35:1588" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1589" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1590" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1591">
                          Most relevant
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[97px]" data-node-id="35:1592" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1593" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1594" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1595">
                          Best selling
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[145px]" data-node-id="35:1596" data-name="Label">
                      <div className="bg-black border border-black border-solid content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="35:1597" data-name="Text">
                        <div className="relative shrink-0 size-[12px]" data-node-id="35:1598" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1600" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1601">
                          Alphabetically, A-Z
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[145px]" data-node-id="35:1602" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1603" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1604" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1605">
                          Alphabetically, Z-A
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[133px]" data-node-id="35:1606" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1607" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1608" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1609">
                          Price, low to high
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[133px]" data-node-id="35:1610" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1611" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1612" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1613">
                          Price, high to low
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[129px]" data-node-id="35:1614" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1615" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1616" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1617">
                          Date, old to new
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[129px]" data-node-id="35:1618" data-name="Label">
                      <div className="bg-white border border-[#dfdfdf] border-solid relative shrink-0 size-[16px]" data-node-id="35:1619" data-name="Text" />
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:1620" data-name="Text">
                        <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[21px] relative shrink-0 text-[#1a3521] text-[14px] whitespace-nowrap" data-node-id="35:1621">
                          Date, new to old
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-[#f5f5f5] border-solid border-t content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-[512px]" data-node-id="35:1622" data-name="MobileFilterDrawerFooter">
              <div className="content-stretch flex gap-[12px] h-[50px] items-start relative shrink-0 w-[480px]" data-node-id="35:1623" data-name="Container">
                <div className="bg-[#f2f2f2] border border-[#f5f5f5] border-solid content-stretch flex flex-[200_0_0] flex-col h-full items-center justify-center min-w-px px-[16px] py-[12px] relative rounded-[9999px]" data-node-id="35:1624" data-name="Button">
                  <p className="[word-break:break-word] font-['Quicksand:Medium'] font-medium leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" data-node-id="35:1625">{`Clear filters `}</p>
                </div>
                <div className="bg-black border border-black border-solid content-stretch flex flex-[200_0_0] flex-col h-full items-center justify-center min-w-px px-[16px] py-[8px] relative" data-node-id="35:1626" data-name="Button">
                  <p className="[word-break:break-word] font-['Quicksand:Regular'] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="35:1627">{`Apply filters `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fcfcfc] border border-[#e5e7eb] border-dashed content-stretch flex flex-col h-full items-center justify-center px-[24px] relative rounded-[8px] shrink-0" data-node-id="35:1437" data-name="placeholder-after">
          <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-node-id="35:7478">
            <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[844px] items-center justify-between min-h-[844px] overflow-clip relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-[512px]" data-node-id="35:7479" data-name="filter-drawer-structured">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:7480">
                <div className="border border-[#e5e7eb] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative shrink-0 w-full" data-node-id="35:7481" data-name="header">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:7482" data-name="title-group">
                    <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[20px] whitespace-nowrap" data-node-id="35:7483">{`Filter & Sort`}</p>
                    <div className="bg-[#06003e] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-node-id="35:7484" data-name="active-badge">
                      <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="35:7485">
                        3 Active
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start p-[4px] relative shrink-0" data-node-id="35:7486" data-name="close-btn">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="35:7487" data-name="x-circle">
                      <div className="absolute left-0 size-[20px] top-0" data-node-id="35:7488" data-name="Phosphor / X / Regular">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[28px] items-start p-[20px] relative shrink-0 w-full" data-node-id="35:7490" data-name="scroll-content">
                  <div className="absolute bg-[#f7f7f7] h-[90px] left-0 top-[0.5px] w-[512px]" data-node-id="139:20" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7491" data-name="active-summary">
                    <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap" data-node-id="35:7492">
                      Active Filters
                    </p>
                    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7493" data-name="active-chips">
                      <div className="bg-[#e6e5ec] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:7494" data-name="chip-1">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7495">
                          In Stock
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7496" data-name="x-circle">
                          <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7497" data-name="Phosphor / X / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e6e5ec] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:7499" data-name="chip-2">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7500">
                          Size: L
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7501" data-name="x-circle">
                          <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7502" data-name="Phosphor / X / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e6e5ec] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:7504" data-name="chip-3">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7505">
                          Blue
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7506" data-name="x-circle">
                          <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7507" data-name="Phosphor / X / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="35:7509" data-name="accordion-sections">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7510" data-name="accordion-availability">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7511" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7512">
                          Availability
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7513" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7514" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="35:7516" data-name="options">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7517" data-name="option-row">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="35:7518">
                            Show in-stock only
                          </p>
                          <div className="bg-[#06003e] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-node-id="35:7519" data-name="checkbox-checked">
                            <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7520" data-name="check">
                              <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7521" data-name="Phosphor / Check / Regular">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCheckRegular} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7523" data-name="option-row">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap" data-node-id="35:7524">
                            Out of stock items
                          </p>
                          <div className="border border-[#9ca3af] border-solid relative rounded-[4px] shrink-0 size-[20px]" data-node-id="35:7525" data-name="checkbox-unchecked" />
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="35:7526" data-name="divider">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7527" data-name="accordion-price-range">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7528" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7529">
                          Price Range
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7530" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7531" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:7533" data-name="inputs-row">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="35:7534" data-name="min-input">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" data-node-id="35:7535">
                            Min Price
                          </p>
                          <div className="border border-[#e5e7eb] border-solid content-stretch flex items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="35:7536" data-name="input-box">
                            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="35:7537">
                              £0.00
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="35:7538" data-name="max-input">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" data-node-id="35:7539">
                            Max Price
                          </p>
                          <div className="border border-[#e5e7eb] border-solid content-stretch flex items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="35:7540" data-name="input-box">
                            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="35:7541">
                              £150.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="35:7542" data-name="divider">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7543" data-name="accordion-size">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7544" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7545">
                          Size
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7546" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7547" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7549" data-name="size-chips">
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7550" data-name="size-XS">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7551">
                            XS
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7552" data-name="size-S">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7553">
                            S
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7554" data-name="size-M">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7555">
                            M
                          </p>
                        </div>
                        <div className="bg-[#06003e] border border-[#06003e] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7556" data-name="size-L">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="35:7557">
                            L
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7558" data-name="size-XL">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7559">
                            XL
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7560" data-name="size-XXL">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7561">
                            XXL
                          </p>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="35:7562" data-name="divider">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7563" data-name="accordion-color">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7564" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7565">
                          Colour
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7566" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7567" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7569" data-name="color-list">
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7570" data-name="color-Beige">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7571" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7572">
                            Beige
                          </p>
                        </div>
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7573" data-name="color-Black">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7574" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7575">
                            Black
                          </p>
                        </div>
                        <div className="bg-[#e6e5ec] border border-[#06003e] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7576" data-name="color-Blue">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7577" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7578">
                            Blue
                          </p>
                        </div>
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7579" data-name="color-Red">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7580" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7581">
                            Red
                          </p>
                        </div>
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7582" data-name="color-Green">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7583" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7584">
                            Green
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full" data-node-id="35:7585" data-name="sticky-footer">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7586" data-name="buttons">
                  <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[16px] py-[12px] relative rounded-[6px]" data-node-id="35:7587" data-name="clear-btn">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap" data-node-id="35:7588">
                      Clear Filters
                    </p>
                  </div>
                  <div className="bg-[var(--button-primary-bg,#06003e)] border-[length:var(--button-primary-border-width,0px)] border-[var(--button-primary-border,#06003e)] border-solid content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[var(--button-primary-padding-x,24px)] py-[var(--button-primary-padding-y,12px)] relative rounded-[var(--button-corner-radius,6px)]" data-node-id="35:7589" data-name="Button / Theme Default">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[color:var(--button-primary-text,white)] text-[length:var(--button-font-size,14px)] whitespace-nowrap" data-node-id="I35:7589;60:9">
                      Apply
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col h-[844px] items-center justify-between min-h-[844px] overflow-clip relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-[512px]" data-node-id="35:7590" data-name="filter-drawer-structured-PriceSlider">
              <div className="absolute bg-[#f7f7f7] h-[90px] left-[-1px] top-[58.5px] w-[512px]" data-node-id="139:21" />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:7591">
                <div className="border border-[#e5e7eb] border-solid content-stretch flex items-center justify-between px-[20px] py-[16px] relative shrink-0 w-full" data-node-id="35:7592" data-name="header">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:7593" data-name="title-group">
                    <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[20px] whitespace-nowrap" data-node-id="35:7594">{`Filter & Sort`}</p>
                    <div className="bg-[#06003e] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-node-id="35:7595" data-name="active-badge">
                      <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="35:7596">
                        3 Active
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start p-[4px] relative shrink-0" data-node-id="35:7597" data-name="close-btn">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="35:7598" data-name="x-circle">
                      <div className="absolute left-0 size-[20px] top-0" data-node-id="35:7599" data-name="Phosphor / X / Regular">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[28px] items-start p-[20px] relative shrink-0 w-full" data-node-id="35:7601" data-name="scroll-content">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7602" data-name="active-summary">
                    <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#9ca3af] text-[12px] uppercase whitespace-nowrap" data-node-id="35:7603">
                      Active Filters
                    </p>
                    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7604" data-name="active-chips">
                      <div className="bg-[#e6e5ec] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:7605" data-name="chip-1">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7606">
                          In Stock
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7607" data-name="x-circle">
                          <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7608" data-name="Phosphor / X / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e6e5ec] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:7610" data-name="chip-2">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7611">
                          Size: L
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7612" data-name="x-circle">
                          <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7613" data-name="Phosphor / X / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#e6e5ec] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="35:7615" data-name="chip-3">
                        <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7616">
                          Blue
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7617" data-name="x-circle">
                          <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7618" data-name="Phosphor / X / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorXRegular1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="35:7620" data-name="accordion-sections">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7621" data-name="accordion-availability">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7622" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7623">
                          Availability
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7624" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7625" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="35:7627" data-name="options">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7628" data-name="option-row">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="35:7629">
                            Show in-stock only
                          </p>
                          <div className="bg-[#06003e] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-node-id="35:7630" data-name="checkbox-checked">
                            <div className="overflow-clip relative shrink-0 size-[12px]" data-node-id="35:7631" data-name="check">
                              <div className="absolute left-0 size-[12px] top-0" data-node-id="35:7632" data-name="Phosphor / Check / Regular">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCheckRegular} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7634" data-name="option-row">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap" data-node-id="35:7635">
                            Out of stock items
                          </p>
                          <div className="border border-[#9ca3af] border-solid relative rounded-[4px] shrink-0 size-[20px]" data-node-id="35:7636" data-name="checkbox-unchecked" />
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="35:7637" data-name="divider">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7638" data-name="accordion-price-range">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7639" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7640">
                          Price Range
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7641" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7642" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-node-id="35:7644" data-name="slider-outer-container">
                        <div className="bg-[#f3f4f6] content-stretch flex h-[6px] items-center relative rounded-[3px] shrink-0 w-full" data-node-id="35:7645" data-name="slider-track">
                          <div className="bg-[rgba(0,0,0,0)] h-[6px] relative shrink-0 w-[48px]" data-node-id="35:7646" data-name="left-inactive-spacer" />
                          <div className="bg-[#3b82f6] flex-[1_0_0] h-[6px] min-w-px relative" data-node-id="35:7647" data-name="active-range-highlight" />
                          <div className="bg-[rgba(0,0,0,0)] h-[6px] relative shrink-0 w-[96px]" data-node-id="35:7648" data-name="right-inactive-spacer" />
                        </div>
                        <div className="absolute content-stretch flex inset-0 items-start" data-node-id="35:7649" data-name="handles-overlay">
                          <div className="absolute left-[37px] size-[22px] top-[4px]" data-node-id="35:7650" data-name="left-drag-handle">
                            <div className="absolute inset-[-9.09%_-18.18%_-27.27%_-18.18%]">
                              <img alt="" className="block max-w-none size-full" src={imgLeftDragHandle} />
                            </div>
                          </div>
                          <div className="absolute left-[355px] size-[22px] top-[4px]" data-node-id="35:7651" data-name="right-drag-handle">
                            <div className="absolute inset-[-9.09%_-18.18%_-27.27%_-18.18%]">
                              <img alt="" className="block max-w-none size-full" src={imgLeftDragHandle} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="35:7652" data-name="inputs-row">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="35:7653" data-name="min-input">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" data-node-id="35:7654">
                            Min Price
                          </p>
                          <div className="border border-[#e5e7eb] border-solid content-stretch flex items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="35:7655" data-name="input-box">
                            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="35:7656">
                              £30.00
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="35:7657" data-name="max-input">
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" data-node-id="35:7658">
                            Max Price
                          </p>
                          <div className="border border-[#e5e7eb] border-solid content-stretch flex items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="35:7659" data-name="input-box">
                            <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" data-node-id="35:7660">
                              £150.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="35:7661" data-name="divider">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7662" data-name="accordion-size">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7663" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7664">
                          Size
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7665" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7666" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7668" data-name="size-chips">
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7669" data-name="size-XS">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7670">
                            XS
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7671" data-name="size-S">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7672">
                            S
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7673" data-name="size-M">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7674">
                            M
                          </p>
                        </div>
                        <div className="bg-[#06003e] border border-[#06003e] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7675" data-name="size-L">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" data-node-id="35:7676">
                            L
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7677" data-name="size-XL">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7678">
                            XL
                          </p>
                        </div>
                        <div className="bg-[#f9fafb] border border-[#e5e7eb] border-solid content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="35:7679" data-name="size-XXL">
                          <p className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#4b5563] text-[13px] whitespace-nowrap" data-node-id="35:7680">
                            XXL
                          </p>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full" data-node-id="35:7681" data-name="divider">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <img alt="" className="block max-w-none size-full" src={imgDivider} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7682" data-name="accordion-color">
                      <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-node-id="35:7683" data-name="accordion-header">
                        <p className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[normal] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" data-node-id="35:7684">
                          Colour
                        </p>
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="35:7685" data-name="chevron-down">
                          <div className="absolute left-0 size-[16px] top-0" data-node-id="35:7686" data-name="Phosphor / CaretDown / Regular">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhosphorCaretDownRegular} />
                          </div>
                        </div>
                      </div>
                      <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7688" data-name="color-list">
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7689" data-name="color-Beige">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7690" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7691">
                            Beige
                          </p>
                        </div>
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7692" data-name="color-Black">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7693" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7694">
                            Black
                          </p>
                        </div>
                        <div className="bg-[#e6e5ec] border border-[#06003e] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7695" data-name="color-Blue">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7696" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#06003e] text-[13px] whitespace-nowrap" data-node-id="35:7697">
                            Blue
                          </p>
                        </div>
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7698" data-name="color-Red">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7699" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7700">
                            Red
                          </p>
                        </div>
                        <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="35:7701" data-name="color-Green">
                          <div className="relative shrink-0 size-[16px]" data-node-id="35:7702" data-name="Ellipse">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
                          </div>
                          <p className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[normal] relative shrink-0 text-[#111827] text-[13px] whitespace-nowrap" data-node-id="35:7703">
                            Green
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e5e7eb] border-solid content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full" data-node-id="35:7704" data-name="sticky-footer">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7705" data-name="buttons">
                  <div className="border border-[#e5e7eb] border-solid content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[16px] py-[12px] relative rounded-[6px]" data-node-id="35:7706" data-name="clear-btn">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[normal] relative shrink-0 text-[#4b5563] text-[14px] whitespace-nowrap" data-node-id="35:7707">
                      Clear Filters
                    </p>
                  </div>
                  <div className="bg-[var(--button-primary-bg,#06003e)] border-[length:var(--button-primary-border-width,0px)] border-[var(--button-primary-border,#06003e)] border-solid content-stretch flex flex-[1_0_0] items-center justify-center min-w-px px-[var(--button-primary-padding-x,24px)] py-[var(--button-primary-padding-y,12px)] relative rounded-[var(--button-corner-radius,6px)]" data-node-id="35:7708" data-name="Button / Theme Default">
                    <p className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[var(--button-line-height,20px)] relative shrink-0 text-[color:var(--button-primary-text,white)] text-[length:var(--button-font-size,14px)] whitespace-nowrap" data-node-id="I35:7708;60:9">
                      Apply
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#111827] content-stretch flex items-start left-[15px] px-[10px] py-[4px] rounded-[4px] top-[15px]" data-node-id="35:1453" data-name="badge">
            <p className="[word-break:break-word] font-['Geist_Mono:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap" data-node-id="35:1454">
              After
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}