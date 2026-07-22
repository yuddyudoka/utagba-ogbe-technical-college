import svgPaths from "./svg-3h2es2zdcj";
import imgImageWeldingSparksInATechnicalWorkshop from "./44dd83f8fdd17433468eac6424c5e0d628aaf222.png";
import imgImageStudentsTrainingInAMechanicalWorkshop from "./577d0d5f8077b76a00b284a73c4a092097a8086f.png";
import imgImageAutomotiveWorkshop from "./ce512f4db09e6c5df524fb09efb0556b3f5e4e8b.png";
import imgImageElectricalInstallationLab from "./fda2d64a71fb05e36cd50074bb8508a5437c29c0.png";
import imgImageFabricationWeldingBay from "./171e3ab87ed18d22622c9d7bf98bdedefef568c9.png";
import imgImageConstructionYard from "./f24223f7185837f78a0265a0b6d6ee3401817a78.png";
import imgImageWoodworkStudio from "./755a165808a8e65bfa1d868e26650bc7aaa2c43a.png";
import imgImageHvacTrainingRoom from "./73894e559342300320b620612d3e1c0e7033c273.png";
import imgImageWithFallback from "./2c5f724c8337c9343d87a1369a8ed7dcf1632e45.png";

function Heading() {
  return (
    <div className="relative shrink-0 w-[768px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <div className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap">
          <p className="leading-[1.1] mb-0 text-[90px] whitespace-pre">{`SKILLS THAT `}</p>
          <p className="text-[90px] whitespace-pre">
            <span className="leading-[1.1] text-[#f4b224]">{`BUILD `}</span>
            <span className="leading-[1.1]">NIGERIA</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Lora:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-[rgba(255,255,255,0.7)] w-[576px]">
          <span className="font-['Manrope:Regular',sans-serif] leading-[29.25px] text-[18px]">{`Utagba-Ogbe Technical College prepares students for productive careers and self-employment through hands-on vocational education accredited by the `}</span>
          <span className="font-['Manrope:Bold',sans-serif] font-bold leading-[29.25px] text-[18px] text-white">National Board for Technical Education</span>
          <span className="font-['Manrope:Regular',sans-serif] leading-[29.25px] text-[18px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M4.375 4.375H10.625V10.625" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M4.375 10.625L10.625 4.375" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#f4b224] h-full relative shrink-0" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[32px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[16px] text-black whitespace-nowrap">VIEW PROGRAMS</p>
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-full relative shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[0.8px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32.8px] py-[14.8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[16px] text-white whitespace-nowrap">HOW TO APPLY</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49.6px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Heading />
        <ParagraphMargin />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[96px] pt-[149px] px-[40px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function ImageWeldingSparksInATechnicalWorkshop() {
  return (
    <div className="relative shrink-0 w-[1165px]" data-name="Image (Welding sparks in a technical workshop)">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgImageWeldingSparksInATechnicalWorkshop} />
        <div className="absolute bg-[rgba(0,0,0,0.7)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container />
      </div>
    </div>
  );
}

function ImageStudentsTrainingInAMechanicalWorkshop() {
  return (
    <div className="h-[382.95px] relative shrink-0 w-full" data-name="Image (Students training in a mechanical workshop)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStudentsTrainingInAMechanicalWorkshop} />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[382.95px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageStudentsTrainingInAMechanicalWorkshop />
      </div>
    </div>
  );
}

function Text() {
  return <div className="bg-[#f4b224] h-px relative shrink-0 w-[32px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f4b224] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">About the College</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-[510.6px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[46.608px] not-italic relative shrink-0 text-[#0c0c0c] text-[44px] tracking-[-0.4661px] w-[511px]">CENTRE OF EXCELLENCE IN TECHNICAL EDUCATION</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-[510.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[511px]">Founded in 1989 and owned by the Delta State Ministry of Education, Utagba-Ogbe Technical College is a cornerstone of vocational development in Ndokwa West LGA. For over three decades, we have empowered students with practical, industry-relevant skills.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-[510.6px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[511px]">Our mission is to create a quality learning environment that meets the education, training, and development expectations of students — equipping them for the labour market and self-employment.</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center p-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.14px] whitespace-nowrap">LEARN MORE ABOUT US</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
        <Heading1 />
        <Paragraph />
        <Paragraph1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-center relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[96.8px] pt-[96px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Text2() {
  return <div className="bg-black h-px relative shrink-0 w-[32px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-black tracking-[1.2px] uppercase whitespace-nowrap">Our Programmes</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-[416.813px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0c0c0c] text-[0px] whitespace-nowrap">
          <p className="leading-[normal] mb-0 text-[44px] whitespace-pre">{`TECHNICAL COURSES `}</p>
          <p className="leading-[normal] text-[#f4b224] text-[44px] whitespace-pre">AVAILABLE</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[416.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Heading2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p33b0c200} id="Vector" stroke="var(--stroke-0, #0C0C0C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p22ad4980} id="Vector_2" stroke="var(--stroke-0, #0C0C0C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[24.8px] py-[12.8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black tracking-[-0.14px] whitespace-nowrap">VIEW ALL PROGRAMS</p>
        <Icon2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container10 />
        <Link3 />
      </div>
    </div>
  );
}

function ImageAutomotiveWorkshop() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Image (Automotive Workshop)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAutomotiveWorkshop} />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageAutomotiveWorkshop />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] tracking-[0.2px] whitespace-nowrap">Motor Vehicle Mechanic Works</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-full">Comprehensive training in automotive repair, maintenance, and diagnostics.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container14 />
        <Container15 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageElectricalInstallationLab() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Image (Electrical Installation Lab)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageElectricalInstallationLab} />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageElectricalInstallationLab />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] tracking-[0.2px] whitespace-nowrap">{`Electrical Maintenance & Installation`}</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-[306.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[307px]">Master electrical systems, wiring, and installation techniques.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container17 />
        <Container18 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageFabricationWeldingBay() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Image (Fabrication & Welding Bay)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFabricationWeldingBay} />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageFabricationWeldingBay />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] tracking-[0.2px] whitespace-nowrap">Fabrication and Welding</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-[306.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[307px]">Learn metal fabrication, welding techniques, and structural metalwork.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Heading5 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container20 />
        <Container21 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageConstructionYard() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Image (Construction Yard)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageConstructionYard} />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageConstructionYard />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] tracking-[0.2px] whitespace-nowrap">{`Mechanical Engineering & Craft Practice`}</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-[306.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[307px]">Hands-on training in mechanical systems, tools, and engineering principles.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Heading6 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container23 />
        <Container24 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageWoodworkStudio() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Image (Woodwork Studio)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWoodworkStudio} />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWoodworkStudio />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] tracking-[0.2px] whitespace-nowrap">Plumbing and Pipefitting</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-[306.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[307px]">Expert training in water systems, pipework, and plumbing installations.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Heading7 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container26 />
        <Container27 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageHvacTrainingRoom() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Image (HVAC Training Room)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHvacTrainingRoom} />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageHvacTrainingRoom />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c0c0c] text-[20px] tracking-[0.2px] whitespace-nowrap">{`Bricklaying, Blocklaying & Concreting`}</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-[306.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[307px]">Build solid foundations in construction and masonry techniques.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Heading8 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white relative shrink-0 w-[348px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <Container29 />
        <Container30 />
      </div>
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-start flex flex-wrap gap-[40px_20px] items-start relative shrink-0 w-[1085px]" data-name="Container">
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
      <Container25 />
      <Container28 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative size-full">
        <Container9 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[96.8px] pt-[96px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#f4b224] text-[36px] whitespace-nowrap">15+</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.14px] uppercase whitespace-nowrap">Technical Programs</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center p-[20px] relative size-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#f4b224] text-[36px] whitespace-nowrap">20+</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white tracking-[-0.14px] uppercase whitespace-nowrap">Instructors</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center p-[20px] relative size-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#f4b224] text-[36px] whitespace-nowrap">90%</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white tracking-[-0.14px] uppercase whitespace-nowrap">Employment Rate</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center p-[20px] relative size-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#f4b224] text-[36px] whitespace-nowrap">8+</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.919px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[14px] text-white tracking-[-0.14px] uppercase whitespace-nowrap">Modern Workshops</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center p-[20px] relative size-full">
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[101.6px] items-start p-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container32 />
      <Container35 />
      <Container38 />
      <Container41 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[40px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.53%_6.96%_8.14%_6.09%]">
      <div className="absolute inset-[-5%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 36.6654">
          <g id="Group 2">
            <path d={svgPaths.pc694680} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p36b4c300} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[23px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[45px] relative shrink-0 w-[297.063px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[#0c0c0c] text-[24px] tracking-[0.768px] whitespace-nowrap">NBTE Accredited</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-[297.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[298px]">All programmes are accredited by the National Board for Technical Education, guaranteeing quality and national recognition of certificates.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#ccc] border-l-[0.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-[transparent] border-l-[0.3px] border-solid content-stretch flex flex-col items-start pl-[32.3px] pr-[32px] py-[36px] relative size-full">
        <Icon3 />
        <Heading9 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p4868218} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3b324f80} id="Vector_2" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2e68cb80} id="Vector_3" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p14626a20} id="Vector_4" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[45px] relative shrink-0 w-[297.069px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[#0c0c0c] text-[24px] tracking-[0.768px] whitespace-nowrap">Delta State Government</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-[297.069px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[298px]">Owned and operated by the Delta State Ministry of Education, PMB 5051, Asaba — ensuring institutional stability and public mandate.</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#ccc] border-l-[0.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-[transparent] border-l-[0.3px] border-solid content-stretch flex flex-col items-start pl-[32.3px] pr-[32px] py-[36px] relative size-full">
        <Icon4 />
        <Heading10 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p13785480} id="Vector" stroke="var(--stroke-0, #F4B224)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[45px] relative shrink-0 w-[297.069px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[#0c0c0c] text-[24px] tracking-[0.768px] whitespace-nowrap">Community Anchor</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-[297.069px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#666] text-[14px] w-[298px]">Beyond education, our campus serves as an emergency relief centre during regional flooding, reflecting our commitment to Kwale community.</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#ccc] border-l-[0.6px] border-r-[0.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-[transparent] border-l-[0.3px] border-r-[0.3px] border-solid content-stretch flex flex-col items-start px-[32.3px] py-[36px] relative size-full">
        <Icon5 />
        <Heading11 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[235.8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___361.06px_361.07px_361.07px] grid-rows-[_235.80px] relative size-full">
        <Container46 />
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative size-full">
        <Container45 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[96.8px] pt-[96px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Black',sans-serif] leading-[56px] not-italic relative shrink-0 text-[44px] text-black whitespace-nowrap">READY TO BUILD YOUR FUTURE?</p>
      </div>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.7)] w-[512px]">Applications for the 2025/2026 academic session are now open. Secure your place in one of our accredited NTC or NBC programmes.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-[518.163px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container51 />
        <ParagraphMargin1 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-black relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[32px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">APPLY NOW</p>
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[34px] py-[18px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">VIEW PROGRAMS</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[56px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[40px] relative size-full">
          <Container50 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f4b224] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Home1() {
  return (
    <div className="relative shrink-0 w-[1165.2px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageWeldingSparksInATechnicalWorkshop />
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
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

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-[335.05px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#ccc] text-[14px] w-[336px]">Empowering students with practical technical skills since 1989. Fully accredited by the National Board for Technical Education (NBTE).</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[335.05px]" data-name="Container">
      <Link6 />
      <Paragraph11 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Barlow_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">Navigate</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Programs</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">Admissions</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[30px] relative shrink-0 w-[147.538px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[10px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ccc] text-[14px] whitespace-nowrap">News</p>
      </div>
    </div>
  );
}

function Link12() {
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
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Link12 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[147.538px]" data-name="Container">
      <Container56 />
      <List />
    </div>
  );
}

function Container58() {
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

function Container57() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[241.287px]" data-name="Container">
      <Container58 />
      <List1 />
    </div>
  );
}

function Container60() {
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

function Text4() {
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
        <Text4 />
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

function Text5() {
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
        <Text5 />
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

function Text6() {
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
        <Text6 />
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

function Container59() {
  return (
    <div className="content-stretch flex flex-col h-[225.994px] items-start relative shrink-0 w-[241.287px]" data-name="Container">
      <Container60 />
      <List2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Container55 />
      <Container57 />
      <Container59 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[1085.162px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container54 />
        <Frame />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ccc] text-[12px] whitespace-nowrap">© 2025 Utagba-Ogbe Technical College, Kwale. All rights reserved.</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#ccc] text-[12px] whitespace-nowrap">Delta State Ministry of Education · PMB 5051, Asaba</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[40px] relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container53() {
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
        <Container53 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Home1 />
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

function Link13() {
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
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f4b224] text-[16px] tracking-[0.98px] whitespace-nowrap">HOME</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] tracking-[0.98px] whitespace-nowrap">ABOUT</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] tracking-[0.98px] whitespace-nowrap">COURSES</p>
      </div>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] tracking-[0.98px] whitespace-nowrap">ADMISSIONS</p>
      </div>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] tracking-[0.98px] whitespace-nowrap">CONTACT</p>
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

function Container62() {
  return (
    <div className="bg-[#f4b224] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[16px] text-black whitespace-nowrap">APPLY NOW</p>
      </div>
    </div>
  );
}

function Layout1() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1165.2px]" data-name="Layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[40px] relative size-full">
        <Link13 />
        <List3 />
        <Container62 />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home">
      <Body />
      <Layout1 />
    </div>
  );
}