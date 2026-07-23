import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import imgLogo from "@/imports/Home/2c5f724c8337c9343d87a1369a8ed7dcf1632e45.png";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "COURSES", path: "/courses" },
  { label: "ADMISSIONS", path: "/admissions" },
  { label: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solidNav = !isHome || scrolled;

  const navBg = solidNav ? "bg-white border-b border-black/10" : "";
  const inactiveColor = solidNav ? "text-black/60" : "text-white/75";
  const iconColor = solidNav ? "text-black" : "text-white";
  const menuBg = solidNav ? "bg-white border-b border-black/10" : "bg-black/95";
  const menuDivider = solidNav ? "border-black/10" : "border-white/10";
  const inactiveMobileColor = solidNav ? "text-black/60" : "text-white/75";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-200 ${navBg}`}>
      <div className="h-20 flex items-center justify-between px-5 md:px-10 max-w-[1280px] mx-auto">
        <Link to="/" className="shrink-0">
          <img
            src={imgLogo}
            alt="Utagba-Ogbe Technical College"
            className="h-14 md:h-[60px] w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-4 xl:gap-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`font-['Manrope:Regular',sans-serif] text-base tracking-[0.98px] transition-colors hover:text-[#f4b224] ${
                    isActive ? "text-[#f4b224]" : inactiveColor
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/admissions"
            className="hidden lg:inline-flex bg-[#f4b224] px-5 py-3 font-['Manrope:Bold',sans-serif] font-bold text-base text-black hover:bg-yellow-400 transition-colors"
          >
            APPLY NOW
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-1 ${iconColor}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-navigation" className={`lg:hidden px-5 py-6 flex flex-col ${menuBg}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`font-['Manrope:Regular',sans-serif] text-base tracking-[0.98px] py-3 border-b ${menuDivider} ${
                  isActive ? "text-[#f4b224]" : inactiveMobileColor
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/admissions"
            className="mt-5 bg-[#f4b224] px-6 py-3.5 font-['Manrope:Bold',sans-serif] font-bold text-base text-black text-center"
            onClick={() => setMenuOpen(false)}
          >
            APPLY NOW
          </Link>
        </div>
      )}
    </nav>
  );
}
