import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#d7e2d8] font-dm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">

        {/* LEFT – contact */}
        <div>
          <h4 className="font-pop text-sm font-semibold text-[#315e3b] mb-4 tracking-wide">
            Get in touch
          </h4>

          <a href="mailto:support@amrutam.global" className="block text-sm text-[#214031] mb-4 hover:underline">
            support@amrutam.global
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-[#214031] leading-6 mb-4 hover:underline"
          >
            Amrutam Pharmaceuticals Pvt Ltd.,<br />
            chitragupt ganj, Nai Sadak, Lashkar,<br />
            Gwalior - 474001
          </a>

          <a href="tel:+919713171999" className="block text-sm text-[#214031] mb-6 hover:underline">
            +91 9713171999
          </a>

          <div className="flex items-center gap-4">
            {[
              <FaFacebookF />,
              <FaInstagram />,
              <FaYoutube />,
              <FaTwitter />,
              <FaLinkedinIn />,
              <FaPinterestP />,
            ].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-[#356636] text-white flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,0.15)]"
              >
                {Icon}
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE – links */}
        <div>
          <h4 className="font-pop text-sm font-semibold text-[#315e3b] mb-4 tracking-wide">
            Information
          </h4>
          <ul className="space-y-2 text-sm text-[#1f3526]">
            {[
              "About Us",
              "Terms and Conditions",
              "Privacy Policy",
              "Privacy Policy for Mobile Apps",
              "Shipping, return and cancellation Policy",
              "International Delivery",
              "For Businesses, Hotels, and Resorts",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – newsletter */}
        <div className="lg:pl-8">
          <h4 className="font-pop text-sm font-semibold text-[#315e3b] mb-4 tracking-wide text-center">
            Subscribe to our Newsletter and join
            <br />
            Amrutam Family today!
          </h4>

          <div className="mt-10 w-full max-w-md">
            <div className="flex rounded-full overflow-hidden border border-[#5b7c5d] bg-transparent">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-6 py-3 text-sm bg-transparent outline-none text-[#214031] placeholder:text-[#6a7f6c]"
              />
              <button className="px-4 py-1 bg-black text-white text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
