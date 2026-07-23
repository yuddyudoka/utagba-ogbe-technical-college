import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import svgPaths from "@/imports/Home/svg-3h2es2zdcj";
import imgHero from "@/imports/Home/44dd83f8fdd17433468eac6424c5e0d628aaf222.png";
import imgAbout from "@/imports/Home/577d0d5f8077b76a00b284a73c4a092097a8086f.png";
import imgMotorVehicle from "@/imports/Home/ce512f4db09e6c5df524fb09efb0556b3f5e4e8b.png";
import imgElectrical from "@/imports/Home/fda2d64a71fb05e36cd50074bb8508a5437c29c0.png";
import imgWelding from "@/imports/Home/171e3ab87ed18d22622c9d7bf98bdedefef568c9.png";
import imgMechanical from "@/imports/Home/f24223f7185837f78a0265a0b6d6ee3401817a78.png";
import imgPlumbing from "@/imports/Home/755a165808a8e65bfa1d868e26650bc7aaa2c43a.png";
import imgBricklaying from "@/imports/Home/73894e559342300320b620612d3e1c0e7033c273.png";

const courses = [
  { img: imgMotorVehicle, title: "Motor Vehicle Mechanic Works", desc: "Comprehensive training in automotive repair, maintenance, and diagnostics.", slug: "motor-vehicle-mechanic-works" },
  { img: imgElectrical, title: "Electrical Maintenance & Installation", desc: "Master electrical systems, wiring, and installation techniques.", slug: "electrical-maintenance-installation" },
  { img: imgWelding, title: "Fabrication and Welding", desc: "Learn metal fabrication, welding techniques, and structural metalwork.", slug: "fabrication-and-welding" },
  { img: imgMechanical, title: "Mechanical Engineering & Craft Practice", desc: "Hands-on training in mechanical systems, tools, and engineering principles.", slug: "mechanical-engineering-craft-practice" },
  { img: imgPlumbing, title: "Plumbing and Pipefitting", desc: "Expert training in water systems, pipework, and plumbing installations.", slug: "plumbing-and-pipefitting" },
  { img: imgBricklaying, title: "Bricklaying, Blocklaying & Concreting", desc: "Build solid foundations in construction and masonry techniques.", slug: "bricklaying-blocklaying-concreting" },
];

const stats = [
  { value: "15+", label: "Technical Programs" },
  { value: "20+", label: "Instructors" },
  { value: "90%", label: "Employment Rate" },
  { value: "8+", label: "Modern Workshops" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[540px] md:min-h-[620px] lg:min-h-[680px]">
        <div className="absolute inset-0">
          <img src={imgHero} alt="Welding sparks in a technical workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-[149px] lg:pb-24">
          <div className="max-w-2xl">
            <h1
              className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-white leading-[1.1]"
              style={{ fontSize: "clamp(3.75rem, 8vw, 90px)" }}
            >
              <span className="block">SKILLS THAT</span>
              <span className="block"><span className="text-[#f4b224]">BUILD </span>NIGERIA</span>
            </h1>
            <p className="mt-3 font-['Manrope:Regular',sans-serif] text-white/70 text-sm leading-[1.625] max-w-xl">
              Utagba-Ogbe Technical College prepares students for productive careers and self-employment through hands-on vocational education accredited by the{" "}
              <strong className="font-['Manrope:Bold',sans-serif] font-bold text-white">National Board for Technical Education</strong>.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="inline-flex justify-center items-center gap-2 bg-[#f4b224] px-7 py-3.5 font-['Manrope:Bold',sans-serif] font-bold text-sm text-black hover:bg-yellow-400 transition-colors w-full sm:w-auto">
                VIEW PROGRAMS <ArrowUpRight size={15} strokeWidth={2.5} />
              </Link>
              <Link to="/admissions" className="inline-flex justify-center items-center border border-white/80 px-7 py-3.5 font-['Manrope:Bold',sans-serif] font-bold text-sm text-white hover:bg-white/10 transition-colors w-full sm:w-auto">
                HOW TO APPLY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="w-full border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start md:items-center">
            <div className="w-full md:w-[45%] lg:w-[48%] shrink-0">
              <img src={imgAbout} alt="Students training in a mechanical workshop" className="w-full h-64 sm:h-80 md:h-[383px] object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#f4b224] shrink-0" />
                <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#f4b224] text-sm tracking-[1.2px] uppercase">About the College</p>
              </div>
              <h2 className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight mt-2 md:mt-5" style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}>
                CENTRE OF EXCELLENCE IN TECHNICAL EDUCATION
              </h2>
              <p className="mt-5 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">
                Founded in 1989 and owned by the Delta State Ministry of Education, Utagba-Ogbe Technical College is a cornerstone of vocational development in Ndokwa West LGA. For over three decades, we have empowered students with practical, industry-relevant skills.
              </p>
              <p className="mt-4 mb-8 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">
                Our mission is to create a quality learning environment that meets the education, training, and development expectations of students — equipping them for the labour market and self-employment.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 border border-black px-3.5 py-3 font-['Manrope:Bold',sans-serif] font-bold text-sm text-black hover:bg-black hover:text-white transition-colors">
                LEARN MORE ABOUT US <ChevronRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────── */}
      <section className="w-full bg-[#fafafa] border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                <div className="w-8 h-px bg-black shrink-0" />
                <p className="font-['JetBrains_Mono:Regular',sans-serif] text-black text-sm tracking-[1.2px] uppercase">Our Programmes</p>
              </div>
              <h2 className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight" style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}>
                TECHNICAL COURSES <span className="text-[#f4b224]">AVAILABLE</span>
              </h2>
            </div>
            <Link to="/courses" className="hidden sm:inline-flex items-center gap-2 border border-black px-5 py-3 font-['Manrope:Bold',sans-serif] font-bold text-sm text-black hover:bg-black hover:text-white transition-colors shrink-0">
              VIEW ALL PROGRAMS <ArrowUpRight size={14} strokeWidth={2} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, i) => (
              <Link key={course.title} to={`/courses/${course.slug}`} className={`bg-white border border-black/10 overflow-hidden hover:shadow-md transition-shadow group${i >= 4 ? " hidden sm:block" : ""}`}>
                <div className="h-44 bg-[#f5f5f5] overflow-hidden">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="px-3 py-4">
                  <h3 className="font-['Barlow_Condensed:Bold',sans-serif] not-italic text-[#0c0c0c] text-xl tracking-[0.2px]">{course.title}</h3>
                  <p className="mt-2 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">{course.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link to="/courses" className="flex justify-center items-center gap-2 border border-black px-5 py-3 font-['Manrope:Bold',sans-serif] font-bold text-sm text-black hover:bg-black hover:text-white transition-colors w-full">
              VIEW ALL PROGRAMS <ArrowUpRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <section className="w-full bg-black">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center gap-1 px-5 py-7">
                <p className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#f4b224] text-[36px] leading-none">{stat.value}</p>
                <p className="font-['Manrope:Regular',sans-serif] text-white text-sm uppercase text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ────────────────────────────────────────────── */}
      <section className="w-full border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#ccc]">
            <div className="py-9 md:pr-8 lg:pr-12">
              <div className="h-10 w-6 shrink-0">
                <svg viewBox="0 0 23.3333 36.6654" fill="none" className="w-full h-full">
                  <path d={svgPaths.pc694680} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  <path d={svgPaths.p36b4c300} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                </svg>
              </div>
              <h3 className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] text-2xl tracking-[0.768px] mt-4 mb-2">NBTE Accredited</h3>
              <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">All programmes are accredited by the National Board for Technical Education, guaranteeing quality and national recognition of certificates.</p>
            </div>
            <div className="py-9 md:px-8 lg:px-12">
              <div className="size-10 shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path d={svgPaths.p4868218} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  <path d={svgPaths.p3b324f80} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  <path d={svgPaths.p2e68cb80} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                  <path d={svgPaths.p14626a20} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                </svg>
              </div>
              <h3 className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] text-2xl tracking-[0.768px] mt-4 mb-2">Delta State Government</h3>
              <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">Owned and operated by the Delta State Ministry of Education, PMB 5051, Asaba — ensuring institutional stability and public mandate.</p>
            </div>
            <div className="py-9 md:pl-8 lg:pl-12">
              <div className="size-10 shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path d={svgPaths.p13785480} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
                </svg>
              </div>
              <h3 className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] text-2xl tracking-[0.768px] mt-4 mb-2">Community Anchor</h3>
              <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">Beyond education, our campus serves as an emergency relief centre during regional flooding, reflecting our commitment to Kwale community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="w-full bg-[#f4b224]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-black leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 44px)" }}>
                READY TO BUILD YOUR FUTURE?
              </h2>
              <p className="mt-2 font-['Manrope:Regular',sans-serif] text-black/70 text-sm leading-[1.333] max-w-lg">
                Applications for the 2025/2026 academic session are now open. Secure your place in one of our accredited NTC or NBC programmes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link to="/admissions" className="inline-flex justify-center items-center bg-black px-8 py-4 font-['Manrope:ExtraBold',sans-serif] font-extrabold text-sm text-white hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
                APPLY NOW
              </Link>
              <Link to="/courses" className="inline-flex justify-center items-center border-2 border-black px-7 py-3.5 font-['Manrope:Bold',sans-serif] font-bold text-sm text-black hover:bg-black/10 transition-colors w-full sm:w-auto">
                VIEW PROGRAMS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
