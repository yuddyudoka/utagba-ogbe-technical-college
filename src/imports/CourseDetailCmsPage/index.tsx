import svgPaths from "./svg-by5if6doaf";
import imgSection from "./78106b2658bf5182cf323d2b805b4b2520a8d4e9.png";
import imgImageWithFallback from "./2c5f724c8337c9343d87a1369a8ed7dcf1632e45.png";

function Heading() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1085.2px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[72px] not-italic relative shrink-0 text-[72px] text-white whitespace-nowrap">{`Tiling & Interlocking`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-[1165.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[400px] left-0 top-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end pb-[40px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[218.48%] left-[0.07%] max-w-none top-[-35.06%] w-full" src={imgSection} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.8)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container />
      </div>
    </div>
  );
}

function Text() {
  return <div className="bg-black h-px relative shrink-0 w-[32px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-black tracking-[1.2px] uppercase whitespace-nowrap">Programme Overview</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-[707.463px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#0c0c0c] text-[16px] w-[708px]">{`This program covers all aspects of tiling and interlocking works, from surface preparation and adhesive application to laying ceramic, porcelain, and stone tiles on walls and floors. Students also learn interlocking paving, cladding, and grouting techniques. Demand for skilled tilers in Nigeria's booming real estate sector makes this program a gateway to stable employment.`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container6 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[24px] whitespace-nowrap">WHAT YOU WILL LEARN</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon />
        <Heading1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f4b224] text-[12px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[19.25px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">{`Surface Preparation & Levelling`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start px-[20px] py-[16px] relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f4b224] text-[12px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[19.25px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">{`Adhesive & Mortar Technology`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start px-[20px] py-[16px] relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f4b224] text-[12px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[19.25px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">Floor Tiling Techniques</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start px-[20px] py-[16px] relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f4b224] text-[12px] whitespace-nowrap">04</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[19.25px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">{`Wall Tiling & Cladding`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start px-[20px] py-[16px] relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f4b224] text-[12px] whitespace-nowrap">05</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[19.25px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">{`Ceramic & Porcelain Tiles`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start px-[20px] py-[16px] relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f4b224] text-[12px] whitespace-nowrap">06</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[19.25px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">Interlocking Paving</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start px-[20px] py-[16px] relative size-full">
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] gap-x-px gap-y-px grid grid-cols-[__353.23px_353.23px] grid-rows-[___51.25px_51.25px_51.25px] h-[155.75px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[707.463px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container8 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c647980} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13d22180} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[24px] whitespace-nowrap">CAREER OUTCOMES</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon1 />
        <Heading2 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[707.463px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#666] text-[14px] whitespace-nowrap">Graduates of this programme are prepared for roles including:</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16.8px] py-[8.8px] top-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">Tiler</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[75.22px] px-[16.8px] py-[8.8px] top-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">{`Floor & Wall Finisher`}</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[253.26px] px-[16.8px] py-[8.8px] top-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">Cladding Specialist</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[427.55px] px-[16.8px] py-[8.8px] top-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">Interlocking Paving Contractor</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16.8px] py-[8.8px] top-[49.6px]" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">Building Finishes Supervisor</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[87.2px] relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[235.2px] relative shrink-0 w-[707.463px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container17 />
        <Paragraph1 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[707.463px]" data-name="Container">
      <Container5 />
      <Container7 />
      <Container16 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] tracking-[0.35px] uppercase whitespace-nowrap">Programme Details</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_23_1741)" id="Icon">
          <path d={svgPaths.p185087f0} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 3.75V7.5L10 8.75" id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_23_1741">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Duration</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">2 Years</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Icon2 />
        <Container23 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p143b0800} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p23297d80} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Certificate</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">National Technical Certificate</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[198.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[280.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[24px] relative size-full">
        <Icon3 />
        <Container27 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p143b0800} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p23297d80} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Accreditation</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c0c0c] text-[14px] whitespace-nowrap">NBTE Accredited</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-[110.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-[280.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[24px] relative size-full">
        <Icon4 />
        <Container31 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[280.131px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <Container22 />
        <Container26 />
        <Container30 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24.8px] relative size-full">
        <Heading3 />
        <Container21 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[329.731px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[1085.194px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container4 />
        <Container19 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[64.8px] pt-[40px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[24px] whitespace-nowrap">OTHER PROGRAMMES</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#f4b224] text-[14px] whitespace-nowrap">All Programmes</p>
        <Icon5 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading4 />
        <Link />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#f4b224] text-[11px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8.8px] py-[2.8px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">NTC</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8.8px] py-[2.8px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">3 Years</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20.6px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function ProgramDetail() {
  return (
    <div className="relative shrink-0 w-full" data-name="ProgramDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Text19 />
        <Container37 />
      </div>
    </div>
  );
}

function ProgramDetail1() {
  return (
    <div className="h-[43px] relative shrink-0 w-[305.063px]" data-name="ProgramDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] whitespace-nowrap">Motor Vehicle Mechanic Works</p>
      </div>
    </div>
  );
}

function ProgramDetail2() {
  return (
    <div className="content-stretch flex flex-col h-[45.5px] items-start overflow-clip relative shrink-0 w-full" data-name="ProgramDetail">
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[306px]">Comprehensive training in automotive repair, maintenance, and diagnostics.</p>
    </div>
  );
}

function ProgramDetailMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="ProgramDetail:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <ProgramDetail2 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[28px] relative size-full">
        <ProgramDetail />
        <ProgramDetail1 />
        <ProgramDetailMargin />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#f4b224] text-[11px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8.8px] py-[2.8px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">NTC</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8.8px] py-[2.8px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">3 Years</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20.6px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Text23 />
        <Text24 />
      </div>
    </div>
  );
}

function ProgramDetail3() {
  return (
    <div className="relative shrink-0 w-full" data-name="ProgramDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Text22 />
        <Container38 />
      </div>
    </div>
  );
}

function ProgramDetail4() {
  return (
    <div className="h-[43px] relative shrink-0 w-[305.069px]" data-name="ProgramDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] whitespace-nowrap">{`Electrical Maintenance & Installation`}</p>
      </div>
    </div>
  );
}

function ProgramDetail5() {
  return (
    <div className="content-stretch flex flex-col h-[45.5px] items-start overflow-clip relative shrink-0 w-full" data-name="ProgramDetail">
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[306px]">Master electrical systems, wiring, and installation techniques.</p>
    </div>
  );
}

function ProgramDetailMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="ProgramDetail:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <ProgramDetail5 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[28px] relative size-full">
        <ProgramDetail3 />
        <ProgramDetail4 />
        <ProgramDetailMargin1 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#f4b224] text-[11px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8.8px] py-[2.8px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">NTC</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8.8px] py-[2.8px] relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">3 Years</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20.6px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Text26 />
        <Text27 />
      </div>
    </div>
  );
}

function ProgramDetail6() {
  return (
    <div className="relative shrink-0 w-full" data-name="ProgramDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Text25 />
        <Container39 />
      </div>
    </div>
  );
}

function ProgramDetail7() {
  return (
    <div className="h-[43px] relative shrink-0 w-[305.069px]" data-name="ProgramDetail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] whitespace-nowrap">Fabrication and Welding</p>
      </div>
    </div>
  );
}

function ProgramDetail8() {
  return (
    <div className="content-stretch flex flex-col h-[45.5px] items-start overflow-clip relative shrink-0 w-full" data-name="ProgramDetail">
      <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[306px]">Learn metal fabrication, welding techniques, and structural metalwork.</p>
    </div>
  );
}

function ProgramDetailMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="ProgramDetail:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <ProgramDetail8 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[28px] relative size-full">
        <ProgramDetail6 />
        <ProgramDetail7 />
        <ProgramDetailMargin2 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] gap-x-px gap-y-px grid grid-cols-[___361.06px_361.07px_361.07px] grid-rows-[_172.50px] h-[172.5px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative size-full">
        <Container35 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[64px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[80px] relative size-full">
        <Section />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-[335.05px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#ccc] text-[14px] w-[336px]">Empowering students with practical technical skills since 1989. Fully accredited by the National Board for Technical Education (NBTE).</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[335.05px]" data-name="Container">
      <Link4 />
      <Paragraph2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">Navigate</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Programs</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Admissions</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">News</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[186px] relative shrink-0 w-[147.538px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[147.538px]" data-name="Container">
      <Container43 />
      <List />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">Top Programs</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Electrical Installation</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[241.287px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Motor Vehicle Mechanics</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[241.287px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">{`Fabrication & Welding`}</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[241.287px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">{`Plumbing & Pipefitting`}</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[241.287px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">{`Bricklaying & Concreting`}</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[241.287px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">{`Carpentry & Joinery`}</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[186px] relative shrink-0 w-[241.287px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[241.287px]" data-name="Container">
      <Container45 />
      <List1 />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p19778e80} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ccc] text-[14px] w-full">Kwale, Ndokwa West, Delta State, Nigeria</p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <IconMargin />
        <Text28 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p5c184f0} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a640080} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ccc] text-[14px] w-full">enquiry@utagbatechnicalcollege.com.ng</p>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[56px] relative shrink-0 w-[241.287px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[16px] relative size-full">
        <IconMargin1 />
        <Text29 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_279)" id="Icon">
          <path d={svgPaths.p2c04e800} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_279">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#ccc] text-[14px] w-full">
          <p className="leading-[20px] mb-0">Contact admissions office</p>
          <p className="leading-[20px]">for enquiries</p>
        </div>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[56px] relative shrink-0 w-[241.287px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[16px] relative size-full">
        <IconMargin2 />
        <Text30 />
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="h-[173.5px] relative shrink-0 w-[241.287px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem6 />
        <ListItem7 />
        <ListItem8 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[241.287px]" data-name="Container">
      <Container47 />
      <List2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Container42 />
      <Container44 />
      <Container46 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[1085.162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container41 />
        <Frame />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ccc] text-[12px] whitespace-nowrap">© 2025 Utagba-Ogbe Technical College, Kwale. All rights reserved.</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ccc] text-[12px] whitespace-nowrap">Delta State Ministry of Education · PMB 5051, Asaba</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[40px] relative size-full">
        <Container48 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative size-full">
        <Frame1 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[56px] pt-[56.8px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white min-h-[776px] relative shrink-0 w-full" data-name="Layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-[1165.2px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Layout />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Link11() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(102,102,102,0.7)] tracking-[0.98px] whitespace-nowrap">HOME</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(102,102,102,0.7)] tracking-[0.98px] whitespace-nowrap">ABOUT</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f4b224] text-[16px] tracking-[0.98px] whitespace-nowrap">COURSES</p>
      </div>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(102,102,102,0.7)] tracking-[0.98px] whitespace-nowrap">ADMISSIONS</p>
      </div>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(102,102,102,0.7)] tracking-[0.98px] whitespace-nowrap">CONTACT</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="relative shrink-0" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
        <ListItem12 />
        <ListItem13 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#f4b224] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[16px] text-black whitespace-nowrap">APPLY NOW</p>
      </div>
    </div>
  );
}

function Layout2() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1165.2px]" data-name="Layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[40px] relative size-full">
        <Link11 />
        <List3 />
        <Container49 />
      </div>
    </div>
  );
}

function Layout1() {
  return (
    <div className="absolute bg-white h-[80.8px] left-0 top-0 w-[1165.2px]" data-name="Layout">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <Layout2 />
      </div>
    </div>
  );
}

export default function CourseDetailCmsPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Course Detail CMS page">
      <Body />
      <Layout1 />
    </div>
  );
}