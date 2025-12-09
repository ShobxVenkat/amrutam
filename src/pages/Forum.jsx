// src/pages/Forum.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiMoreVertical,
  FiX,
  FiPaperclip,
  FiImage,
  FiFileText,
} from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { IoChatboxOutline, IoChatbox } from "react-icons/io5";
import { HiChevronDoubleDown } from "react-icons/hi2";

import priyaImg from "../assets/images/Priya.png";
import questionIcon from "../assets/images/question.png";
import girl3 from "../assets/images/girl3.jpg";

import Layout from "../components/layout/Layout";

import recentIcon from "../assets/images/icon/recent.png";
import mostLikedIcon from "../assets/images/icon/mostliked.png";
import mostCommentedIcon from "../assets/images/icon/mostcmnt.png";
import oldestIcon from "../assets/images/icon/oldest.png";

// ---------- Single Question + Answer + Reactions Card ----------
function QuestionAnswerCard() {
  const [liked, setLiked] = useState(true);
  const [replied, setReplied] = useState(true);
  const [saved, setSaved] = useState(true);

  const active = "#a9bea9"; // icon active color
  const inactive = "#8D8D8D"; // base grey

  return (
    <>
      {/* ---- Question block wrapper ---- */}
      <div className="mt-4 w-full max-w-[699px] mx-auto px-4">
        <div className="flex flex-col gap-4 w-full max-w-[667px]">
          {/* Top row: user + menu */}
          <div className="flex items-start justify-between w-full">
            {/* Left: icon + name + time */}
            <div className="flex items-center gap-4 w-full md:w-[182px]">
              <div className="w-[52px] h-[52px] rounded-full border border-[#CFCFCF] flex items-center justify-center overflow-hidden">
                <img
                  src={questionIcon}
                  alt="Question icon"
                  className="w-[26px] h-[41px] object-contain"
                />
              </div>

              <div className="flex flex-col gap-[4px] w-auto md:w-[114px]">
                <span className="font-['DM_Sans'] font-normal text-[16px] md:text-[18px] leading-[19.77px] text-[#1E1E1E]">
                  Anonymous
                </span>
                <span className="font-['DM_Sans'] font-semibold text-[13px] md:text-[14px] leading-[19.77px] text-[#8D8D8D]">
                  5 days ago
                </span>
              </div>
            </div>

            {/* Right: three-dots */}
            <button
              type="button"
              className="mt-1 p-1 rounded-full hover:bg-[#F4F4F4]"
            >
              <FiMoreVertical className="text-[18px] text-[#555555]" />
            </button>
          </div>

          {/* Question text block */}
          <div className="max-w-[614px]">
            <p className="font-['DM_Sans'] font-medium text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#1E1E1E] mb-1">
              Question: Can Ayurveda help with stress and mental health issues?
            </p>
            <p className="font-['DM_Sans'] font-normal text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] text-[#4F4F4F]">
              Explores the potential benefits of traditional Ayurvedic practices
              in managing stress and improving mental well-being, examining
              holistic approaches like herbal remedies, meditation, and
              lifestyle adjustments.
            </p>
          </div>

          {/* Replies row */}
          <div className="flex items-center justify-between w-full max-w-[667px]">
            <div className="flex items-center gap-2">
              <span className="font-['DM_Sans'] font-semibold text-[13px] md:text-[14px] leading-[19.77px] text-[#4F4F4F]">
                Replies
              </span>
              <span className="text-[#B0B0B0]">•</span>
              <span className="font-['DM_Sans'] font-semibold text-[13px] md:text-[14px] leading-[19.77px] text-[#4F4F4F]">
                10 reply
              </span>
            </div>

            <button
              type="button"
              className="font-['DM_Sans'] font-semibold text-[14px] md:text-[16px] leading-[19.77px] text-[#3A643B]"
            >
              View All 9 Replies
            </button>
          </div>
        </div>
      </div>

      {/* ---- Answer card (Dr. Mathew Adams) ---- */}
      <div className="mt-4 w-full max-w-[667px] mx-auto px-4 md:px-0 md:pl-[129px]">
        {/* inner green card */}
        <div className="w-full md:w-[538px] min-h-[247px] bg-[#EEF8EE] rounded-[8px] p-4 flex flex-col gap-[11px]">
          {/* Top: user info + menu */}
          <div className="w-full max-w-[506px] flex items-start justify-between">
            {/* Left: dp + name + time */}
            <div className="flex items-center gap-3 w-full md:w-[245px]">
              <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                <img
                  src={girl3}
                  alt="Dr. Mathew Adams"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <span className="font-['DM_Sans'] font-semibold text-[15px] md:text-[16px] leading-[19.77px] text-[#1E1E1E]">
                  Dr. Mathew Adams
                </span>
                <span className="font-['DM_Sans'] font-semibold text-[13px] md:text-[14px] leading-[19.77px] text-[#A6A6A6]">
                  5 days ago
                </span>
              </div>
            </div>

            {/* 3 dots */}
            <button
              type="button"
              className="mt-1 p-1 rounded-full hover:bg-[#E4F1E4]"
            >
              <FiMoreVertical className="text-[18px] text-[#3A643B]" />
            </button>
          </div>

          {/* Answer text */}
          <p className="max-w-[506px] font-['DM_Sans'] text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] tracking-[0.01em] text-[#1E1E1E]">
            <span className="font-semibold">Ans.</span>
            <span className="font-medium">
              {" "}
              Ayurveda offers holistic approaches like herbal remedies,
              lifestyle adjustments, and relaxation techniques to alleviate
              stress and support mental well-being. It emphasizes personalized
              care and natural methods to address the root causes of mental
              health challenges, promoting balance and harmony in mind and body.
            </span>
          </p>

          {/* Small reactions inside card (2, 2) */}
          <div className="mt-2 flex items-center gap-[26px] h-[21px]">
            {/* Likes */}
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              className="flex items-center gap-[5px]"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {liked ? (
                  <AiFillHeart size={20} style={{ color: active }} />
                ) : (
                  <AiOutlineHeart size={20} style={{ color: inactive }} />
                )}
              </div>
              <span className="font-['DM_Sans'] font-medium text-[14px] md:text-[16px] leading-[1] text-[#8D8D8D]">
                2
              </span>
            </button>

            {/* Replies (chat icon) */}
            <button
              type="button"
              onClick={() => setReplied((v) => !v)}
              className="flex items-center gap-[5px]"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {replied ? (
                  <IoChatbox size={20} style={{ color: active }} />
                ) : (
                  <IoChatboxOutline size={20} style={{ color: inactive }} />
                )}
              </div>
              <span className="font-['DM_Sans'] font-medium text-[14px] md:text-[16px] leading-[1] text-[#8D8D8D]">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ---- Bottom reaction summary: 23 Likes | 10 Reply | 3 Saves ---- */}
      <div className="mt-6 w-full flex justify-center px-4">
        <div className="w-full max-w-[421px] h-auto flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 h-auto">
            {/* Likes summary */}
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {liked ? (
                  <AiFillHeart size={24} style={{ color: active }} />
                ) : (
                  <AiOutlineHeart size={24} style={{ color: inactive }} />
                )}
              </div>
              <span className="font-['DM_Sans'] text-[14px] md:text-[16px] leading-[24px] text-[#8D8D8D]">
                23 Likes
              </span>
            </button>

            {/* Reply summary (chat icon) */}
            <button
              type="button"
              onClick={() => setReplied((v) => !v)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {replied ? (
                  <IoChatbox size={24} style={{ color: active }} />
                ) : (
                  <IoChatboxOutline size={24} style={{ color: inactive }} />
                )}
              </div>
              <span className="font-['DM_Sans'] text-[14px] md:text-[16px] leading-[24px] text-[#8D8D8D]">
                10 Reply
              </span>
            </button>

            {/* Saves summary */}
            <button
              type="button"
              onClick={() => setSaved((v) => !v)}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {saved ? (
                  <BsBookmarkFill size={24} style={{ color: active }} />
                ) : (
                  <BsBookmark size={24} style={{ color: inactive }} />
                )}
              </div>
              <span className="font-['DM_Sans'] text-[14px] md:text-[16px] leading-[24px] text-[#8D8D8D]">
                3 Saves
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ------------------ Main Forum Page ------------------
export default function Forum() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("questions");

  // FILTER STATE
  const [activeFilter, setActiveFilter] = useState("recent");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = [
    { id: "recent", label: "Recent", icon: recentIcon },
    { id: "mostLiked", label: "Most Liked", icon: mostLikedIcon },
    { id: "mostCommented", label: "Most commented", icon: mostCommentedIcon },
    { id: "oldest", label: "Oldest", icon: oldestIcon },
  ];

  const currentFilterIcon =
    filterOptions.find((o) => o.id === activeFilter)?.icon || recentIcon;

  // TOAST STATE
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // ASK QUESTION MODALS STATE
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [showDescriptionField, setShowDescriptionField] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const [questionText, setQuestionText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  // concern chips
  const concernList = [
    "Hair fall",
    "Digestion",
    "Obesity",
    "Anxiety",
    "Hypertension",
    "Allergies",
    "Anemia",
    "Sleep disorders",
    "Influenza",
    "Acne",
    "Sinusitis",
    "Infertility",
    "General",
  ];

  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [concernSearch, setConcernSearch] = useState("");

  const toggleConcern = (item) => {
    setSelectedConcerns((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const showConcernToast = () => {
    setToastMessage(
      "Your concern has been sent for review and will be added soon"
    );
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const goToUserProfile = () => {
    navigate("/user-dashboard"); // App.jsx me route add kar lena
  };

  const openAskModal = () => {
    setIsAskModalOpen(true);
    setShowDescriptionField(false);
  };

  const closeAskModal = () => {
    setIsAskModalOpen(false);
    setShowDescriptionField(false);
  };

  const openCategoryModal = () => {
    setIsCategoryModalOpen(true);
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
  };

  const handleAskSubmit = () => {
    console.log("Question:", questionText);
    console.log("Description:", descriptionText);
    closeAskModal();
    openCategoryModal();
  };

  const handleSkipCategory = () => {
    console.log("Skipped concern selection");
    closeCategoryModal();
  };

  const handleAddConcern = () => {
    console.log("Selected concerns:", selectedConcerns);
    closeCategoryModal();
    showConcernToast();
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-10">
        {/* TOAST */}
        {showToast && (
           <div className="fixed top-[220px] md:top-[130px] left-1/2 -translate-x-1/2 z-50 px-4">
            <div className="bg-[#333333] bg-opacity-90 rounded-[8px] px-4 md:px-5 py-2.5 shadow-[0_6px_16px_rgba(0,0,0,0.25)] min-w-[260px] max-w-[507px]">
              <p className="font-['Nunito'] font-medium text-[14px] md:text-[16px] leading-[20.82px] text-center text-white">
                {toastMessage}
              </p>
            </div>
          </div>
        )}

        {/* Green background strip with heading */}
        <section className="w-full h-[180px] md:h-[221px] bg-[#EEF8EE] relative flex items-center justify-center px-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="w-[260px] h-[260px] rounded-full bg-[#CFEBCF80] absolute -left-16 -top-20" />
            <div className="w-[260px] h-[260px] rounded-full bg-[#CFEBCF80] absolute left-1/4 -bottom-24" />
            <div className="w-[260px] h-[260px] rounded-full bg-[#CFEBCF80] absolute right-1/4 -top-24" />
            <div className="w-[260px] h-[260px] rounded-full bg-[#CFEBCF80] absolute -right-20 -bottom-24" />
          </div>

          <h1 className="relative font-['DM_Sans'] font-medium text-[20px] md:text-[32px] leading-[24px] md:leading-[24px] tracking-[0.005em] text-center text-[#000000] capitalize max-w-[320px] md:max-w-none">
            Find Discussions Related To Ayurveda Here
          </h1>
        </section>

        {/* Main card */}
        <section className="flex justify-center px-4">
          <div className="mt-8 md:mt-12 mb-8 md:mb-10 w-full max-w-[699px] border border-[#E0E0E0] rounded-[20px] py-6 md:py-8 px-4 sm:px-5 md:px-6 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            {/* Tabs */}
            <div className="w-full max-w-[673px] mx-auto">
              <div className="flex border-b border-[#D9D9D9]">
                <button
                  type="button"
                  onClick={() => setActiveTab("questions")}
                  className={`w-1/2 h-[48px] md:h-[60px] flex items-center justify-center border-b-[3px] md:border-b-[4px] ${
                    activeTab === "questions"
                      ? "border-[#3A643B]"
                      : "border-transparent"
                  }`}
                >
                  <span
                    className={`font-['DM_Sans'] font-semibold text-[16px] md:text-[20px] leading-[19.77px] ${
                      activeTab === "questions"
                        ? "text-[#3A643B]"
                        : "text-[#B0B0B0]"
                    }`}
                  >
                    Questions
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("thoughts")}
                  className={`w-1/2 h-[48px] md:h-[60px] flex items-center justify-center border-b-[3px] md:border-b-[4px] ${
                    activeTab === "thoughts"
                      ? "border-[#3A643B]"
                      : "border-transparent"
                  }`}
                >
                  <span
                    className={`font-['DM_Sans'] font-semibold text-[16px] md:text-[20px] leading-[19.77px] ${
                      activeTab === "thoughts"
                        ? "text-[#3A643B]"
                        : "text-[#B0B0B0]"
                    }`}
                  >
                    Thoughts
                  </span>
                </button>
              </div>
            </div>

            {/* Search + filter */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-[667px] mx-auto">
              {/* Search bar */}
              <div className="flex items-center gap-3 h-[48px] md:h-[56px] flex-1 border border-[#E0E0E0] rounded-[12px] px-3 md:px-4">
                <FiSearch className="text-[18px] text-[#555555]" />
                <input
                  type="text"
                  placeholder="Hair Fall"
                  className="flex-1 bg-transparent outline-none font-['DM_Sans'] text-[14px] md:text-[16px] text-[#222222] placeholder:text-[#9E9E9E]"
                />
              </div>

              {/* Filter button + dropdown */}
              <div className="relative self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => setIsFilterOpen((v) => !v)}
                  className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-[12px] border border-[#E0E0E0] bg-white"
                >
                  <img
                    src={currentFilterIcon}
                    alt={activeFilter}
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  />
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-[190px] bg-white rounded-[12px] border border-[#E0E0E0] shadow-[0_4px_16px_rgba(0,0,0,0.08)] z-20">
                    {filterOptions.map((option, index) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setActiveFilter(option.id);
                          setIsFilterOpen(false);
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left ${
                          index !== filterOptions.length - 1
                            ? "border-b border-[#F3F3F3]"
                            : ""
                        }`}
                      >
                        <img
                          src={option.icon}
                          alt={option.label}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="font-['DM_Sans'] text-[16px] leading-[20px] text-[#3A643B]">
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* User + Ask Question */}
            <div className="mt-6 w-full max-w-[672px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={goToUserProfile}
              >
                <div className="w-[48px] h-[48px] md:w-[52.235px] md:h-[52.235px] rounded-full overflow-hidden border border-[#DADADA] flex items-center justify-center">
                  <img
                    src={priyaImg}
                    alt="Priya Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-['DM_Sans'] font-semibold text-[15px] md:text-[16px] leading-[19.77px] text-[#3A643B]">
                  Priya Singh
                </span>
              </div>

              <button
                type="button"
                onClick={openAskModal}
                className="w-full sm:w-[244px] h-[44px] md:h-[48px] rounded-[12px] bg-[#3A643B] flex items-center justify-center px-4"
              >
                <span className="font-['DM_Sans'] font-semibold text-[15px] md:text-[16px] leading-[24px] text-white">
                  Ask Question
                </span>
              </button>
            </div>

            {/* ---- Divider line ---- */}
            <div className="mt-8 w-full max-w-[699px] mx-auto border-t-[2px] border-[#E5E5E5]" />

            {/* Question-Answer cards */}
            <QuestionAnswerCard />
            <QuestionAnswerCard />
            <QuestionAnswerCard />
          </div>
        </section>

        {/* Load More button – box ke bahar */}
        <div className="flex justify-center  px-4">
          <button type="button" className="flex items-center gap-3">
            <span className="font-['DM_Sans'] font-semibold text-[18px] md:text-[24px] leading-[30px] tracking-[-0.01em] text-[#000000]">
              Load More
            </span>
            <HiChevronDoubleDown className="text-[20px] md:text-[24px] text-[#000000]" />
          </button>
        </div>

        {/* ===================== ASK QUESTION MODAL ===================== */}
        {isAskModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-4">
            <div className="w-full max-w-[666px] max-h-[90vh] bg-white rounded-[24px] shadow-lg px-4 md:px-8 py-6 md:py-7 relative overflow-y-auto">
              {/* Close */}
              <button
                type="button"
                onClick={closeAskModal}
                className="absolute top-4 md:top-6 right-4 md:right-6 p-1 rounded-full hover:bg-[#F5F5F5]"
              >
                <FiX className="text-[20px] md:text-[22px]" />
              </button>

              {/* Title */}
              <h2 className="text-[18px] md:text-[22px] font-semibold font-['DM_Sans'] text-[#1E1E1E] mb-4 md:mb-5">
                Ask Question
              </h2>

              {/* Top user row */}
              <div className="border-t border-[#EAEAEA] pt-4 md:pt-5 mb-5 md:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-full overflow-hidden border border-[#DADADA]">
                    <img
                      src={priyaImg}
                      alt="Priya Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-['DM_Sans'] font-semibold text-[15px] md:text-[16px] text-[#3A643B]">
                      Priya Singh
                    </span>
                    <select className="h-[34px] md:h-[36px] px-3 border border-[#E0E0E0] rounded-[8px] text-[13px] md:text-[14px] font-['DM_Sans'] text-[#4F4F4F] outline-none">
                      <option>Public</option>
                      <option>Anonymous</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAskSubmit}
                  className="w-full sm:w-[120px] h-[44px] md:h-[48px] rounded-[12px] bg-[#3A643B] flex items-center justify-center"
                >
                  <span className="font-['DM_Sans'] font-semibold text-[15px] md:text-[16px] text-white">
                    Ask
                  </span>
                </button>
              </div>

              {/* Add Question field */}
              <div className="mb-4 md:mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['DM_Sans'] text-[13px] md:text-[14px] text-[#4F4F4F]">
                    Add Question <span className="text-[#EB5757]">*</span>
                  </span>
                  <span className="text-[11px] md:text-[12px] font-['DM_Sans'] text-[#B0B0B0]">
                    max 50 words
                  </span>
                </div>
                <div className="border border-[#E0E0E0] rounded-[16px] px-3 md:px-4 py-2.5 md:py-3">
                  <input
                    type="text"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="Ask your question here"
                    className="w-full bg-transparent outline-none font-['DM_Sans'] text-[14px] text-[#1E1E1E]"
                  />
                </div>
              </div>

              {/* Description – only when enabled */}
              {showDescriptionField && (
                <div className="mb-4 md:mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-['DM_Sans'] text-[13px] md:text-[14px] text-[#4F4F4F]">
                      Add Description{" "}
                      <span className="text-[#EB5757]">*</span>
                    </span>
                    <span className="text-[11px] md:text-[12px] font-['DM_Sans'] text-[#B0B0B0]">
                      max 70 words
                    </span>
                  </div>
                  <div className="border border-[#E0E0E0] rounded-[16px] px-3 md:px-4 py-2.5 md:py-3">
                    <textarea
                      value={descriptionText}
                      onChange={(e) => setDescriptionText(e.target.value)}
                      placeholder="Add your description here"
                      rows={4}
                      className="w-full bg-transparent outline-none font-['DM_Sans'] text-[14px] text-[#1E1E1E] resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Attachments field */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['DM_Sans'] text-[13px] md:text-[14px] text-[#4F4F4F]">
                    Attachments
                  </span>
                </div>
                <div className="border border-[#E0E0E0] rounded-[16px] px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between gap-3">
                  <input
                    type="text"
                    placeholder="Ask your question here"
                    className="flex-1 bg-transparent outline-none font-['DM_Sans'] text-[14px] text-[#1E1E1E]"
                  />
                  <div className="flex items-center gap-3 md:gap-4 text-[#3A643B]">
                    <FiPaperclip className="text-[18px] md:text-[20px]" />
                    <FiImage className="text-[18px] md:text-[20px]" />
                    <FiFileText className="text-[18px] md:text-[20px]" />
                  </div>
                </div>
              </div>

              {/* Add Description link */}
              {!showDescriptionField && (
                <button
                  type="button"
                  onClick={() => setShowDescriptionField(true)}
                  className="mt-2 md:mt-3 flex items-center gap-2 text-[#3A643B] font-['DM_Sans'] text-[14px]"
                >
                  <span className="text-[20px] leading-none">+</span>
                  <span>Add Description</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* ===================== CATEGORY MODAL ===================== */}
        {isCategoryModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-4">
            <div className="w-full max-w-[720px] max-h-[90vh] bg-white rounded-[24px] shadow-lg px-4 md:px-8 py-6 md:py-7 relative overflow-y-auto">
              {/* Close */}
              <button
                type="button"
                onClick={closeCategoryModal}
                className="absolute top-4 md:top-6 right-4 md:right-6 p-1 rounded-full hover:bg-[#F5F5F5]"
              >
                <FiX className="text-[20px] md:text-[22px]" />
              </button>

              {/* Heading */}
              <h2 className="text-[18px] md:text-[22px] font-semibold font-['DM_Sans'] text-center text-[#1E1E1E] mb-2">
                Select a Category for Your Question
              </h2>
              <p className="text-[13px] md:text-[14px] text-center font-['DM_Sans'] text-[#7A7A7A] mb-5 md:mb-6">
                Helps doctors respond faster and accurately
              </p>

              {/* Search concern */}
              <div className="mb-5 md:mb-6">
                <div className="flex items-center gap-3 h-[48px] md:h-[56px] border border-[#E0E0E0] rounded-[16px] px-3 md:px-4">
                  <FiSearch className="text-[18px] text-[#555555]" />
                  <input
                    type="text"
                    placeholder="Search for concern"
                    value={concernSearch}
                    onChange={(e) => setConcernSearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none font-['DM_Sans'] text-[14px] md:text-[16px] text-[#222222] placeholder:text-[#9E9E9E]"
                  />
                </div>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
                {concernList
                  .filter((c) =>
                    c.toLowerCase().includes(concernSearch.toLowerCase())
                  )
                  .map((item) => {
                    const active = selectedConcerns.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleConcern(item)}
                        className={`px-4 md:px-5 py-2 rounded-[24px] text-[13px] md:text-[14px] font-['DM_Sans'] border ${
                          active
                            ? "bg-[#E4F4E4] border-[#3A643B] text-[#3A643B]"
                            : "bg-[#F5FBF5] border-[#D0E6D0] text-[#3A643B]"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
              </div>

              {/* Bottom actions */}
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleSkipCategory}
                  className="text-[#3A643B] font-['DM_Sans'] text-[15px] md:text-[16px]"
                >
                  Skip
                </button>

                <button
                  type="button"
                  onClick={handleAddConcern}
                  className="w-full sm:min-w-[210px] h-[44px] md:h-[48px] rounded-[999px] bg-[#3A643B] flex items-center justify-center px-6"
                >
                  <span className="font-['DM_Sans'] font-semibold text-[15px] md:text-[16px] text-white">
                    Add Concern
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
