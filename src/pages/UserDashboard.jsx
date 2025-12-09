// src/pages/UserDashboard.jsx
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoChatboxOutline, IoChatbox } from "react-icons/io5";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

import Layout from "../components/layout/Layout";

import heroLeafBg from "../assets/images/hero-leaf-bg.png";
import priyaProfile from "../assets/images/priya.jpg";
import questionIcon from "../assets/images/question.png";
import girl3 from "../assets/images/girl3.jpg";

// Sidebar icon images
import dashIcon from "../assets/images/icon/dash.png";
import dashAppointIcon from "../assets/images/icon/dashappoint.png";
import dashChatsIcon from "../assets/images/icon/dashchats.png";
import dashOrderIcon from "../assets/images/icon/dashorder.png";
import dashSavedIcon from "../assets/images/icon/dashsaved.png";
import dashWalletIcon from "../assets/images/icon/dashwallet.png";

function SavedPostCard({ questionAuthor, tagName }) {
  // reaction states
  const [liked, setLiked] = useState(true);
  const [replied, setReplied] = useState(true);
  const [saved, setSaved] = useState(true);

  const iconColor = "#3A643B"; // same green for border + fill

  return (
    <div className="w-full max-w-[699px] mx-auto px-4">
      <div className="flex flex-col gap-4 w-full max-w-[667px] pt-4 pb-6">
        {/* Top row: user + menu */}
        <div className="flex items-start justify-between w-full">
          {/* Left: icon + name + time */}
          <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] rounded-full border border-[#CFCFCF] flex items-center justify-center overflow-hidden">
              <img
                src={questionIcon}
                alt="Question icon"
                className="w-[26px] h-[41px] object-contain"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <span className="font-['DM_Sans'] font-normal text-[18px] leading-[19.77px] text-[#1E1E1E]">
                {questionAuthor}
              </span>
              <span className="font-['DM_Sans'] font-semibold text-[14px] leading-[19.77px] text-[#8D8D8D]">
                5 days ago
              </span>
            </div>
          </div>

          {/* Right: three-dots placeholder */}
          <button
            type="button"
            className="mt-1 p-1 rounded-full hover:bg-[#F4F4F4]"
          >
            <span className="block w-[3px] h-[3px] rounded-full bg-[#555]" />
          </button>
        </div>

        {/* Question text block */}
        <div className="max-w-[614px]">
          <p className="font-['DM_Sans'] font-medium text-[16px] leading-[28px] text-[#1E1E1E] mb-1">
            Question: Can Ayurveda help with stress and mental health issues?
          </p>
          <p className="font-['DM_Sans'] font-normal text-[14px] leading-[24px] text-[#4F4F4F]">
            Explores the potential benefits of traditional Ayurvedic practices in
            managing stress and improving mental well-being, examining holistic
            approaches like herbal remedies, meditation, and lifestyle
            adjustments.
          </p>
        </div>

        {/* Replies row */}
        <div className="flex items-center justify-between w-full max-w-[667px]">
          <div className="flex items-center gap-2">
            <span className="font-['DM_Sans'] font-semibold text-[14px] leading-[19.77px] text-[#4F4F4F]">
              Replies
            </span>
            <span className="text-[#B0B0B0]">•</span>
            <span className="font-['DM_Sans'] font-semibold text-[14px] leading-[19.77px] text-[#4F4F4F]">
              10 reply
            </span>
          </div>

          <button
            type="button"
            className="font-['DM_Sans'] font-semibold text-[16px] leading-[19.77px] text-[#3A643B]"
          >
            View All 9 Replies
          </button>
        </div>

        {/* Answer card */}
        <div className="w-full max-w-[667px] flex justify-center md:justify-end">
          <div className="w-full md:w-[538px] min-h-[247px] bg-[#EEF8EE] rounded-[8px] p-4 flex flex-col gap-[11px]">
            {/* Top: doctor info */}
            <div className="w-full max-w-[506px] flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                  <img
                    src={girl3}
                    alt="Dr. Mathew Adams"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-[6px]">
                  <span className="font-['DM_Sans'] font-semibold text-[16px] leading-[19.77px] text-[#1E1E1E]">
                    Dr. Mathew Adams
                  </span>
                  <span className="font-['DM_Sans'] font-semibold text-[14px] leading-[19.77px] text-[#A6A6A6]">
                    5 days ago
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-1 p-1 rounded-full hover:bg-[#E4F1E4]"
              >
                <span className="block w-[3px] h-[3px] rounded-full bg-[#3A643B]" />
              </button>
            </div>

            {/* Answer text with tag */}
            <p className="max-w-[506px] font-['DM_Sans'] text-[14px] leading-[24px] tracking-[0.01em] text-[#1E1E1E]">
              <span className="font-semibold">Ans. </span>
              <span className="font-medium">
                {tagName} Ayurveda offers holistic approaches like herbal
                remedies, lifestyle adjustments, and relaxation techniques to
                alleviate stress and support mental well-being. It emphasizes
                personalized care and natural methods to address the root causes
                of mental health challenges, promoting balance and harmony in
                mind and body.
              </span>
            </p>

            {/* Tiny reactions inside card */}
            <div className="mt-2 flex items-center gap-[26px] h-[21px]">
              {/* Like */}
              <button
                type="button"
                onClick={() => setLiked((v) => !v)}
                className="flex items-center gap-[5px]"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {liked ? (
                    <AiFillHeart
                      className="text-[20px]"
                      style={{ color: iconColor }}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="text-[20px]"
                      style={{ color: iconColor }}
                    />
                  )}
                </div>
                <span className="font-['DM_Sans'] font-medium text-[16px] leading-[1] text-[#3A643B]">
                  2
                </span>
              </button>

              {/* Reply */}
              <button
                type="button"
                onClick={() => setReplied((v) => !v)}
                className="flex items-center gap-[5px]"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {replied ? (
                    <IoChatbox
                      className="text-[20px]"
                      style={{ color: iconColor }}
                    />
                  ) : (
                    <IoChatboxOutline
                      className="text-[20px]"
                      style={{ color: iconColor }}
                    />
                  )}
                </div>
                <span className="font-['DM_Sans'] font-medium text-[16px] leading-[1] text-[#3A643B]">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom summary reactions */}
        <div className="mt-4 w-full max-w-[420px] ml-0 md:ml-30">
          <div className="border-t border-[#E5E5E5]/40 mb-3" />

          <div className="w-full h-auto flex flex-wrap items-center justify-start gap-x-6 gap-y-3">
            {/* Likes */}
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {liked ? (
                  <AiFillHeart
                    className="text-[24px]"
                    style={{ color: iconColor }}
                  />
                ) : (
                  <AiOutlineHeart
                    className="text-[24px]"
                    style={{ color: iconColor }}
                  />
                )}
              </div>
              <span className="font-['DM_Sans'] text-[16px] leading-[24px] text-[#8D8D8D]">
                23 Likes
              </span>
            </button>

            {/* Replies */}
            <button
              type="button"
              onClick={() => setReplied((v) => !v)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {replied ? (
                  <IoChatbox
                    className="text-[24px]"
                    style={{ color: iconColor }}
                  />
                ) : (
                  <IoChatboxOutline
                    className="text-[24px]"
                    style={{ color: iconColor }}
                  />
                )}
              </div>
              <span className="font-['DM_Sans'] text-[16px] leading-[24px] text-[#8D8D8D]">
                10 Reply
              </span>
            </button>

            {/* Saves */}
            <button
              type="button"
              onClick={() => setSaved((v) => !v)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {saved ? (
                  <BsBookmarkFill
                    className="text-[24px]"
                    style={{ color: iconColor }}
                  />
                ) : (
                  <BsBookmark
                    className="text-[24px]"
                    style={{ color: iconColor }}
                  />
                )}
              </div>
              <span className="font-['DM_Sans'] text-[16px] leading-[24px] text-[#8D8D8D]">
                3 Saves
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserDashboard() {
  const [activeSection, setActiveSection] = useState("saved-posts");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: dashIcon },
    { id: "appointments", label: "Appointments", icon: dashAppointIcon },
    { id: "wallet", label: "My Wallet", icon: dashWalletIcon },
    { id: "chats", label: "My Chats", icon: dashChatsIcon },
    { id: "orders", label: "My Orders", icon: dashOrderIcon },
    { id: "saved-posts", label: "Saved Posts", icon: dashSavedIcon },
  ];

  const handleMenuClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <Layout>
      {/* Background wrapper */}
      <div className="bg-white min-h-screen">
        {/* Hero strip */}
        <section className="w-full h-[180px] md:h-[202px] relative flex items-center justify-center overflow-hidden">
          <img
            src={heroLeafBg}
            alt="Background leaves"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative text-center px-4">
            <h1 className="font-['Nunito'] font-semibold text-[24px] md:text-[36px] leading-[1] text-[#1E1E1E] mb-3">
              Namaste, <span className="text-[#3A643B]">Priya</span>
            </h1>
            <p className="font-['Nunito'] text-[16px] md:text-[20px] leading-[1] text-[#3A643B]">
              How are you feeling today?
            </p>
          </div>
        </section>

        {/* MOBILE SLIDE-IN SIDEBAR */}
        <div
          className={`fixed inset-0 z-40 lg:hidden transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* drawer */}
          <div className="relative w-[280px] max-w-[80%] h-full bg-white shadow-xl px-5 py-6 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={priyaProfile}
                    alt="Priya Singhal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-['Poppins'] font-semibold text-[16px] text-[#3A643B]">
                    Priya Singhal
                  </span>
                  <span className="font-['Poppins'] text-[12px] text-[#4F4F4F]">
                    New Delhi, India
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-[#F2F2F2]"
              >
                <FiX className="text-[20px] text-[#3A643B]" />
              </button>
            </div>

            <div className="border-t border-[#E5E5E5]" />

            <div className="flex flex-col gap-2">
              {menuItems.map(({ id, label, icon }) => {
                const isActive = id === activeSection;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleMenuClick(id)}
                    className={`w-full h-[54px] flex items-center gap-4 px-4 rounded-[8px] text-left ${
                      isActive
                        ? "bg-[#E4F4E4]"
                        : "bg-transparent hover:bg-[#F7F9F7]"
                    }`}
                  >
                    <div
                      className={`w-[32px] h-[32px] rounded-[8px] flex items-center justify-center ${
                        isActive ? "bg-[#3A643C]" : "bg-[#3A643B0D]"
                      }`}
                    >
                      <img
                        src={icon}
                        alt={label}
                        className="w-[18px] h-[18px] object-contain scale-150"
                      />
                    </div>
                    <span
                      className={`font-['Poppins'] text-[14px] ${
                        isActive
                          ? "text-[#3A643B] font-semibold"
                          : "text-[#4F4F4F]"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="w-full max-w-[1180px] mx-auto mt-8 pb-16 flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 lg:px-0">
          {/* Mobile header with menu button */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={priyaProfile}
                  alt="Priya Singhal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Poppins'] font-semibold text-[16px] text-[#3A643B]">
                  Priya Singhal
                </span>
                <span className="font-['Poppins'] text-[12px] text-[#4F4F4F]">
                  24th July, 1999 • 25 yrs
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#E5E5E5] bg-white shadow-sm"
            >
              <FiMenu className="text-[18px] text-[#3A643B]" />
              <span className="font-['Poppins'] text-[13px] text-[#3A643B]">
                Dashboard Menu
              </span>
            </button>
          </div>

          {/* LEFT SIDEBAR - DESKTOP ONLY */}
          <aside className="hidden lg:flex w-[295px] flex-col gap-4">
            {/* Profile card */}
            <div className="w-full h-[288px] border border-[#E5E5E5] rounded-[12px] px-14 py-11 flex flex-col items-center gap-[11px]">
              <div className="w-[96px] h-[96px] rounded-full overflow-hidden">
                <img
                  src={priyaProfile}
                  alt="Priya Singhal"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center mt-1">
                <p className="font-['Poppins'] font-semibold text-[20px] leading-[1] text-[#3A643B]">
                  Priya Singhal
                </p>
                <p className="mt-3 font-['Poppins'] text-[15px] leading-[1] text-[#4F4F4F]">
                  24th July, 1999, 25 years
                </p>
                <p className="mt-2 font-['Poppins'] text-[15px] leading-[1] text-[#4F4F4F]">
                  New Delhi, India
                </p>
              </div>
            </div>

            {/* Menu */}
            <div className="w-full h-[834px] border border-[#E5E5E5] rounded-[12px] px-5 py-8 flex flex-col gap-[11px]">
              {menuItems.map(({ id, label, icon }) => {
                const isActive = id === activeSection;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveSection(id)}
                    className={`w-full h-[64px] flex items-center gap-4 px-6 rounded-[8px] transition-colors ${
                      isActive
                        ? "bg-[#E4F4E4]"
                        : "bg-transparent hover:bg-[#F7F9F7]"
                    }`}
                  >
                    <div
                      className={`w-[36px] h-[36px] rounded-[8px] flex items-center justify-center ${
                        isActive ? "bg-[#3A643C]" : "bg-[#3A643B0D]"
                      }`}
                    >
                      <img
                        src={icon}
                        alt={label}
                        className="w-[20px] h-[20px] object-contain scale-150"
                      />
                    </div>

                    <span
                      className={`font-['Poppins'] text-[16px] leading-[1] ${
                        isActive
                          ? "text-[#3A643B] font-semibold"
                          : "text-[#4F4F4F]"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT SIDE: Saved Posts card */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[699px] border border-[#E5E5E5] rounded-[20px] bg-white pb-8">
              {/* Header strip */}
              <div className="h-[60px] md:h-[68px] bg-[#EEF8EE] rounded-t-[20px] border-b border-[#3A643B80] flex items-center px-4 md:px-6">
                <span className="font-['DM_Sans'] font-semibold text-[18px] md:text-[20px] text-[#3A643B]">
                  Saved Posts
                </span>
              </div>

              {/* Saved posts list */}
              <div className="pt-2 flex flex-col gap-8">
                <SavedPostCard
                  questionAuthor="Anonymous"
                  tagName="@Anonymous-3427 "
                />
                <div className="border-t border-[#E5E5E5] mx-4" />
                <SavedPostCard questionAuthor="Shubham" tagName="@Shubham " />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
