import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import headerCart from "../../assets/images/icon/headercart.png";
import headerLeaf from "../../assets/images/icon/headerleaf.png";
import headerNoti from "../../assets/images/icon/headernoti.png";
import headerWallet from "../../assets/images/icon/headerwallet.png";

import {
  FiPhone,
  FiShoppingCart,
  FiBell,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";
import { LuWallet, LuLeaf } from "react-icons/lu";

import logo from "../../assets/images/logo-amrutam.png";

const navLinks = [
  { label: "Home", to: "/store" },
  { label: "Find Doctors", to: "/doctors" },
  { label: "Lab Tests", to: "/lab-tests" },
  { label: "Shop", to: "/store" },
  { label: "Forum", to: "/forum" },
  { label: "About Us", to: "/about" },
];

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#e3d6c4]">
      {/* TOP DARK STRIP – DESKTOP ONLY */}
      <div className="w-full bg-[#353535] text-white font-dm hidden md:block">
        <div className="max-w-6xl mx-auto px-6 h-[67px] relative flex items-center justify-center">
          <p className="text-[20px] font-medium leading-[140%] text-center w-full">
            Your first 5 minutes instant call is free.
          </p>

          <button
            className="
              absolute right-6 
              flex items-center justify-center gap-2 
              rounded-[16px] 
              bg-[#3E6B3B] 
              h-[51px] w-[355px]
              text-[16px] font-dm font-bold leading-[100%] capitalize
            "
          >
            <FiPhone size={18} />
            <span>Try Instant Free Call Now</span>
          </button>
        </div>
      </div>

      {/* DESKTOP: PHONE + LOGO ROW */}
      <div className="max-w-6xl mx-auto px-1 pt-4 pb-2 hidden md:flex items-center justify-between bg-[#FFF7E2]">
        {/* Phone number block */}
        <div className="flex items-center gap-1 font-dm text-[#2E5536]">
          <FiPhone size={20} className="text-[#2E5536]" />
          <span className="text-[20px] font-normal leading-[140%] capitalize">
            +91 9826352321
          </span>
        </div>

        {/* Logo block */}
        <Link to="/store" className="flex flex-col items-center gap-1 w-[267px] h-[37px]">
          <img
            src={logo}
            alt="Amrutam"
            className="w-[208px] h-[40px] object-contain"
          />
        </Link>

        {/* Right spacer (same as phone width approx) */}
        <div className="w-[186px]" />
      </div>

      {/* MOBILE HEADER ROW */}
      <div className="px-4 py-3 flex items-center justify-between md:hidden bg-[#FFF7E2]">
        <button
          className="flex items-center justify-center"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          <FiMenu size={24} className="text-[#295B34]" />
        </button>

        <Link to="/store" className="flex items-center justify-center">
          <img src={logo} alt="Amrutam" className="h-7 object-contain" />
        </Link>

        <div className="flex items-center gap-2">
          <IconCircle>
            <LuWallet size={18} className="text-[#295B34]" />
          </IconCircle>
          <IconCircle>
            <FiShoppingCart size={18} className="text-[#295B34]" />
          </IconCircle>
          <button className="px-4 py-1 rounded-full bg-[#295B34] text-white text-xs font-dm">
            Login
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isMobileNavOpen && (
        <div className="px-4 pb-3 border-t border-[#e3d6c4] md:hidden bg-[#FFF7E2]">
          <nav className="flex flex-col gap-2 font-dm text-[16px] text-[#2E5536]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileNavOpen(false)}
                className={({ isActive }) =>
                  isActive ? "font-medium text-[#2E5536]" : "text-[#2E5536]"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* DESKTOP NAV + ICONS */}
      <div className="hidden md:block bg-[#FFF7E2]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Nav links */}
          <nav className="flex items-center justify-center gap-[40px] flex-1 font-dm text-[20px] leading-[140%] text-[#2E5536]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "relative pb-1 font-dm text-[20px] leading-[140%] capitalize",
                    isActive
                      ? "text-[#2E5536] font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[3px] after:bg-[#2E5536] after:rounded-full"
                      : "text-[#2E5536] font-semibold",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons block */}
          <div className="flex items-center gap-[16px] ml-8">
        <IconCircle badge="₹2">
  <img src={headerWallet} alt="wallet" className="w-5 h-5 object-contain" />
</IconCircle>
<IconCircle badge="1">
  <img src={headerCart} alt="cart" className="w-5 h-5 object-contain" />
</IconCircle>
<IconCircle>
  <img src={headerNoti} alt="notifications" className="w-5 h-5 object-contain" />
</IconCircle>
<IconCircle>
  <img src={headerLeaf} alt="leaf" className="w-5 h-5 object-contain" />
</IconCircle>

            <button className="flex items-center justify-center">
              <FiChevronDown size={22} className="text-[#295B34]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// shared icon pill
function IconCircle({ children, badge }) {
  return (
    <div className="relative">
      <button
        className="
          w-9 h-9 rounded-full bg-[#E8ECE2] 
          flex items-center justify-center 
          cursor-pointer transition hover:scale-105 active:scale-90
        "
        onClick={() => console.log("clicked")}
      >
        {children}
      </button>

      {badge && (
        <span className="absolute -top-1 -right-2 min-w-[20px] h-[20px] px-1 rounded-full bg-[#295B34] text-[11px] text-white flex items-center justify-center font-dm">
          {badge}
        </span>
      )}
    </div>
  );
}

