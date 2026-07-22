import { Link } from "react-router";
import svgPaths from "@/imports/Home/svg-3h2es2zdcj";
import imgLogo from "@/imports/Home/2c5f724c8337c9343d87a1369a8ed7dcf1632e45.png";

const footerNav = ["Home", "About", "Programs", "Admissions", "Contact"];
const footerNavPaths = ["/", "/about", "/courses", "/admissions", "/contact"];

const footerPrograms = [
  { label: "Electrical Installation", slug: "electrical-maintenance-installation" },
  { label: "Motor Vehicle Mechanics", slug: "motor-vehicle-mechanic-works" },
  { label: "Fabrication & Welding", slug: "fabrication-and-welding" },
  { label: "Plumbing & Pipefitting", slug: "plumbing-and-pipefitting" },
  { label: "Bricklaying & Concreting", slug: "bricklaying-blocklaying-concreting" },
  { label: "Carpentry & Joinery", slug: "carpentry-and-joinery" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-black/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-14 pb-14">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-12">

          {/* Brand */}
          <div className="shrink-0 max-w-[335px]">
            <Link to="/" className="block mb-5">
              <img
                src={imgLogo}
                alt="Utagba-Ogbe Technical College"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="font-['Manrope:Regular',sans-serif] text-[#ccc] text-sm leading-[1.625]">
              Empowering students with practical technical skills since 1989.
              Fully accredited by the National Board for Technical Education (NBTE).
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10 flex-1">

            {/* Navigate */}
            <div>
              <p className="font-['Barlow_Condensed:Bold',sans-serif] not-italic text-white text-xs tracking-[1.2px] uppercase mb-4">
                Navigate
              </p>
              <ul className="flex flex-col gap-2.5">
                {footerNav.map((label, i) => (
                  <li key={label}>
                    <Link
                      to={footerNavPaths[i]}
                      className="font-['Manrope:Regular',sans-serif] text-[#ccc] text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Programs */}
            <div>
              <p className="font-['Barlow_Condensed:Bold',sans-serif] not-italic text-white text-xs tracking-[1.2px] uppercase mb-4">
                Top Programs
              </p>
              <ul className="flex flex-col gap-2.5">
                {footerPrograms.map((prog) => (
                  <li key={prog.slug}>
                    <Link
                      to={`/courses/${prog.slug}`}
                      className="font-['Manrope:Regular',sans-serif] text-[#ccc] text-sm hover:text-white transition-colors"
                    >
                      {prog.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-['Barlow_Condensed:Bold',sans-serif] not-italic text-white text-xs tracking-[1.2px] uppercase mb-4">
                Contact
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 mt-0.5 shrink-0">
                    <path d={svgPaths.p19778e80} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.p37b99980} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </svg>
                  <span className="font-['Manrope:Regular',sans-serif] text-[#ccc] text-sm">
                    Kwale, Ndokwa West, Delta State, Nigeria
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 mt-0.5 shrink-0">
                    <path d={svgPaths.p5c184f0} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.p2a640080} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </svg>
                  <span className="font-['Manrope:Regular',sans-serif] text-[#ccc] text-sm break-all">
                    enquiry@utagbatechnicalcollege.com.ng
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 mt-0.5 shrink-0">
                    <defs>
                      <clipPath id="cp_phone_footer">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                    <path
                      d={svgPaths.p2c04e800}
                      stroke="#F4B224"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.16667"
                      clipPath="url(#cp_phone_footer)"
                    />
                  </svg>
                  <span className="font-['Manrope:Regular',sans-serif] text-[#ccc] text-sm">
                    Contact admissions office
                    <br />
                    for enquiries
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#ccc] text-xs">
            © 2025 Utagba-Ogbe Technical College, Kwale. All rights reserved.
          </p>
          <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#ccc] text-xs">
            Delta State Ministry of Education · PMB 5051, Asaba
          </p>
        </div>
      </div>
    </footer>
  );
}
