import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiChevronRight, FiPlus } from "react-icons/fi";
import Layout from "../components/layout/Layout";
import { getProductBySlug, products } from "../data/products";
import StoreHero from "../components/layout/StoreHero";
import AppDownloadSection from "../components/layout/AppDownloadSection";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlGraduation } from "react-icons/sl";
import { BiCapsule } from "react-icons/bi";

// images
import doctorImg from "../assets/images/doctor.png";
import mixingGif from "../../src/assets/images/icon/mixing.gif";
import shatavriImg from "../assets/images/shatavri.png";
import video from "../assets/images/video.png";

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedQtyIndex, setSelectedQtyIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <p>Product not found.</p>
        </div>
      </Layout>
    );
  }

  const quantityOptions = ["200 ml", "100 ml", "Pack of 3"];

  const longDescription =
    product.description ||
    "Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.\nThese Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!\nThis spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!\nIt's time to bring spa home and unwind.";

  const productHighlights = [...(product.productHighlights || [])];
  while (productHighlights.length < 4) {
    productHighlights.push("Reduces hairfall, repairs damaged hair");
  }

  const keyIngredients = [...(product.keyIngredients || [])];
  while (keyIngredients.length < 4) {
    keyIngredients.push({ name: "Shatavari" });
  }

  const faqs =
    product.faqs && product.faqs.length
      ? product.faqs
      : [
          {
            question:
              "Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care",
            answer:
              "This product is ideal for growing babies and kids to nurture their health in a holistic manner",
          },
          {
            question:
              "Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care",
            answer: `Amrutam's Child Care Malt helps improve immunity and is useful in enhancing vitality and vigor in children.
This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.
Giving your little one Amrutam's Child Care Malt daily will help them Improve their appetite and digestion.
It is useful in treating anemia, general debility and maintaining a healthy weight.
100% Natural and Ayurvedic
PETA certified cruelty-free
Hand-picked and ethically sourced ingredients
AYUSH certified and US FDA approved`,
          },
        ];

  const reviews = [
    {
      initials: "SJ",
      name: "Sabrinath J",
      date: "20 January 2023",
      rating: 5,
      text: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall.. will write again after using it for longer periods",
    },
    {
      initials: "SJ",
      name: "Sabrinath J",
      date: "20 January 2023",
      rating: 5,
      text: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall.. will write again after using it for longer periods",
    },
  ];

  // 👉 yahan se "also bought" bhi products.js se
  const alsoBought = products.filter((p) => p.id !== product.id).slice(0, 3);

  // 👇 ye wapas daal
  const experts = [
    {
      name: "Dr. Vaishali Sharma",
      title: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      tag: "Skin Specialist",
      rating: 4.5,
    },
    {
      name: "Dr. Vaishali Sharma",
      title: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      tag: "Skin Specialist",
      rating: 4.5,
    },
    {
      name: "Dr. Vaishali Sharma",
      title: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      tag: "Skin Specialist",
      rating: 4.5,
    },
  ];

  const mainImage = product.image;

  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  const handleIngredientClick = (ing) => {
    const ingSlug = ing.slug || ing.name?.toLowerCase().replace(/\s+/g, "-");
    navigate(`/ingredient/${ingSlug}`);
  };

  const trustTitle = "Trust the voice";
  const trustVideoUrl = product.trustVideoUrl || "#";

  return (
    <Layout>
      {/* Yahan se upar tak background #FFF7E2 */}
      <div className="w-full bg-[#FFF7E2]">
        <StoreHero />

        {/* MAIN CONTENT CONTAINER */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-12">
          {/* TOP: IMAGE + MAIN INFO */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* LEFT: MAIN IMAGE + THUMBNAILS */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-full max-w-[636px] aspect-square lg:w-[636px] lg:h-[636px] rounded-[16px] overflow-hidden bg-[#F6EFE5]">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-[636px]">
                {Array.from({ length: 3 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveThumb(i)}
                    className={`h-[100px] sm:h-[150px] md:h-[191px] rounded-[16px] overflow-hidden bg-[#F6EFE5] focus:outline-none transition-opacity transition-transform cursor-pointer hover:scale-[1.01] ${
                      activeThumb === i
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={mainImage}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: DETAILS */}
            <div className="w-full lg:max-w-[606px]">
              <h1 className="font-['Poppins'] font-medium text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] tracking-[-0.01em] text-[#0C0C0C]">
                {product.name}
              </h1>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-[#F5A623] text-[18px] sm:text-[20px] leading-none">
                  ★★★★★
                </span>
                <span className="font-['Poppins'] text-[14px] sm:text-[15px] font-medium text-[#0C0C0C]">
                  ({product.reviewsCount} reviews)
                </span>
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-['Poppins'] text-[18px] font-medium text-[#0C0C0C]">
                  ₹{" "}
                  {product.price?.toFixed
                    ? product.price.toFixed(0)
                    : product.price}
                </span>
              </div>

              {/* quantity size tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {quantityOptions.map((label, index) => {
                  const isActive = selectedQtyIndex === index;
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setSelectedQtyIndex(index)}
                      className={`font-['Poppins'] h-9 px-4 rounded-full text-sm transition-all cursor-pointer border ${
                        isActive
                          ? "bg-[#9db29d] border-[#174d17] text-[#000000] shadow-sm hover:shadow-md"
                          : "bg-[#F0F0F0] border-transparent text-[#000000] hover:bg-[#e4e4e4]"
                      } active:scale-[0.97]`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* quantity selector + add to cart */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:flex-1 h-[52px] sm:h-[58px] rounded-[12px] border border-[#E2E2E2] flex items-center justify-between px-4 sm:px-5">
                  <button
                    type="button"
                    onClick={handleDecrease}
                    className="text-[24px] leading-none text-[#0C0C0C] cursor-pointer transition-transform hover:text-[#3A643B] active:scale-90"
                  >
                    -
                  </button>
                  <span className="font-['Poppins'] font-medium text-[18px] text-[#0C0C0C]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={handleIncrease}
                    className="text-[24px] leading-none text-[#0C0C0C] cursor-pointer transition-transform hover:text-[#3A643B] active:scale-90"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="w-full sm:flex-1 h-[52px] sm:h-[58px] rounded-[12px] bg-[#3A643B] text-white text-[16px] font-semibold flex items-center justify-center font-['Poppins'] cursor-pointer transition hover:bg-[#325634] active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  Add to cart
                </button>
              </div>

              {/* long description */}
              <p className="mt-7 font-['Poppins'] font-extralight text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] tracking-[-0.01em] text-[#0C0C0C] whitespace-pre-line">
                {longDescription}
              </p>

              {/* PRODUCT HIGHLIGHTS */}
              <section className="mt-10 max-w-[638px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={mixingGif}
                      alt="mixing icon"
                      className="w-[32px] h-[24px] sm:w-[42px] sm:h-[32px] object-contain -ml-2"
                    />
                    <span className="font-['Poppins'] font-bold text-[18px] sm:text-[20px] leading-6 tracking-[-0.01em] text-[#0C0C0C]">
                      Product Highlights
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {productHighlights.slice(0, 4).map((h, i) => (
                    <div
                      key={i}
                      className="min-h-[140px] sm:min-h-[180px] md:min-h-[204px] rounded-[12px] bg-[#FDEAD2] px-3 sm:px-4 py-3 flex flex-col justify-end text-sm text-[#3F3F3F]"
                    >
                      <p className="font-['nunito'] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] font-bold">
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* KEY INGREDIENTS */}
              <section className="mt-10 max-w-[638px]">
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={mixingGif}
                      alt="mixing icon"
                      className="w-[32px] h-[24px] sm:w-[42px] sm:h-[32px] object-contain -ml-2"
                    />
                    <span className="font-['Poppins'] font-bold text-[18px] sm:text-[20px] leading-6 tracking-[-0.01em] text-[#0C0C0C]">
                      Key Ingredients
                    </span>
                  </div>

                  <button
                    type="button"
                    className="font-['Poppins'] text-[14px] sm:text-[16px] font-medium text-[#3A643B] whitespace-nowrap cursor-pointer flex items-center gap-1 hover:underline"
                  >
                    View All Ingredients
                    <FiChevronRight className="text-[16px]" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {keyIngredients.slice(0, 4).map((ing, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleIngredientClick(ing)}
                      className="h-[94px] w-full rounded-[12px] bg-[#FDEAD2] px-4 py-3 flex items-center justify-between gap-4 group cursor-pointer transition hover:-translate-y-[2px] hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={shatavriImg}
                          alt={ing.name}
                          className="w-[56px] h-[56px] rounded-full object-cover"
                        />
                        <div>
                          <p className="font-['Poppins'] text-[16px] font-semibold text-[#0C0C0C]">
                            {ing.name}
                          </p>
                          <p className="font-['Poppins'] text-[13px] text-[#5A5A5A] mt-1 leading-[18px]">
                            Naturally enhances brain and relieves pain
                          </p>
                        </div>
                      </div>

                      <FiChevronRight className="text-[20px] text-[#28643B] transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </section>

              {/* HOW TO USE */}
              {product.howToUse && (
                <section className="mt-10 max-w-[638px]">
                  <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#0C0C0C] mb-3">
                    How to use
                  </h3>
                  <div className="rounded-[12px] bg-[#FDEAD2] px-4 py-4">
                    <p className="font-['Poppins'] text-[14px] leading-[22px] text-[#3F3F3F]">
                      {product.howToUse}
                    </p>
                  </div>
                </section>
              )}

              {/* GENERAL INSTRUCTIONS */}
              {product.generalInstructions && (
                <section className="mt-8 max-w-[638px]">
                  <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#0C0C0C] mb-2">
                    General Instructions
                  </h3>
                  <div className="rounded-[12px] bg-[#FDEAD2] px-4 py-4">
                    <p className="font-['Poppins'] text-[14px] leading-[22px] text-[#3F3F3F]">
                      {product.generalInstructions}
                    </p>
                  </div>
                </section>
              )}

              {/* COMMONLY ASKED QUESTIONS */}
              <section className="mt-10 max-w-[638px]">
                <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#0C0C0C] mb-4">
                  Commonly Asked Questions
                </h3>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-[12px] bg-[#FDEAD2] px-4 sm:px-5 py-4"
                    >
                      <p className="font-['Poppins'] font-bold text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-[-0.01em] text-[#0C0C0C]">
                        {faq.question}
                      </p>
                      <p className="font-['Poppins'] font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#3F3F3F] whitespace-pre-line mt-2">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* TRUST THE VOICE */}
              <section className="mt-10 max-w-[638px] mb-8">
                <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#0C0C0C] mb-4">
                  {trustTitle}
                </h3>

                <a
                  href={trustVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[16px] overflow-hidden bg-[#000000] relative aspect-video cursor-pointer group"
                >
                  <img
                    src={video}
                    alt="Customer talking about the product"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full bg-white/80 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <div className="ml-1 w-0 h-0 border-t-[10px] sm:border-t-[12px] border-b-[10px] sm:border-b-[12px] border-l-[16px] sm:border-l-[18px] border-t-transparent border-b-transparent border-l-[#3A643B]" />
                    </div>
                  </div>
                </a>
              </section>
            </div>
          </div>

          {/* REVIEWS & RATINGS */}
          <section className="mt-16">
            <h2 className="font-['Poppins'] text-[18px] sm:text-[20px] font-semibold text-center text-[#0C0C0C] mb-6">
              Reviews and Ratings
            </h2>

            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">
              <div className="w-full sm:w-[328px] h-[110px] sm:h-[124px] rounded-[12px] bg-[#FDEAD2] px-6 sm:px-8 flex items-center mx-auto lg:mx-0">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <p className="font-['Poppins'] text-[28px] sm:text-[32px] font-semibold leading-[34px] sm:leading-[38px] text-[#000000]">
                      5.0
                    </p>
                    <p className="text-[18px] sm:text-[20px] leading-[22px] sm:leading-[24px] text-[#F5A623]">
                      ★★★★★
                    </p>
                  </div>
                  <p className="font-['Nunito'] font-normal text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-[-0.01em] text-[#000000]">
                    Based on 20 reviews
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 ml-auto">
                <button
                  type="button"
                  className="w-full sm:w-[181px] h-[50px] sm:h-[58px] rounded-[12px] bg-[#FFF7E2] border border-[#E3E3E3] shadow-[0_4px_12px_rgba(0,0,0,0.06)] font-['DM Sans'] text-[15px] sm:text-[16px] leading-[50px] sm:leading-[58px] tracking-[-0.01em] text-[#28643B] text-center cursor-pointer transition hover:bg-[#ffe9c0] active:scale-[0.98]"
                >
                  See More Reviews
                </button>
                <button
                  type="button"
                  className="w-full sm:w-[181px] h-[50px] sm:h-[58px] rounded-[12px] bg-[#FFF7E2] border border-[#E3E3E3] shadow-[0_4px_12px_rgba(0,0,0,0.06)] font-['DM Sans'] text-[15px] sm:text-[16px] leading-[50px] sm:leading-[58px] tracking-[-0.01em] text-[#28643B] text-center cursor-pointer transition hover:bg-[#ffe9c0] active:scale-[0.98]"
                >
                  Write a review
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((rev, i) => (
                <div
                  key={i}
                  className="w-full rounded-[999px] bg-[#FDEAD2] px-4 sm:px-6 py-3 sm:py-4 flex flex-col md:flex-row items-start md:items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-full bg-[#F0E0C2] flex items-center justify-center text-[13px] font-semibold text-[#3A643B]">
                    {rev.initials}
                  </div>

                  <div className="flex-1">
                    <p className="font-['Poppins'] text-[14px] text-[#0C0C0C]">
                      {rev.text}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] text-[#777777] font-['Poppins']">
                      <span>{rev.name}</span>
                      <span>•</span>
                      <span>{rev.date}</span>
                      <span>•</span>
                      <span className="text-[#F5A623]">
                        {"★".repeat(rev.rating)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PEOPLE ALSO BOUGHT */}
          <section className="mt-16">
            <h2 className="font-['Poppins'] text-[18px] sm:text-[20px] font-semibold text-center text-[#0C0C0C] mb-8">
              People has also bought
            </h2>

            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-6 items-center md:items-stretch">
              {alsoBought.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-full md:w-[400px]"
                >
                  <div className="w-full max-w-[397px] aspect-[397/460] rounded-[16px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-4 w-full max-w-[400px] min-h-[90px] sm:h-[110px] flex flex-col items-center gap-2">
                    <p className="font-['Poppins'] font-medium text-[16px] sm:text-[18px] leading-[24px] sm:leading-[29px] tracking-[-0.01em] text-center text-[#0C0C0C]">
                      {item.name}
                    </p>

                    <div className="flex items-center justify-center gap-1 text-[#0C0C0C] font-['Poppins'] text-[14px] leading-[18px]">
                      <span>
                        ₹{" "}
                        {item.price?.toFixed
                          ? item.price.toFixed(0)
                          : item.price}
                      </span>
                      <span>·</span>
                      <span>{item.size}</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 font-['Poppins'] text-[14px] leading-[18px]">
                      <span className="text-[#F5A623]">★★★★★</span>
                      <span className="text-[#555555]">
                        ({item.reviewsCount})
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-end w-full max-w-[400px]">
                    <button className="w-9 h-9 rounded-full bg-[#3A643B] flex items-center justify-center cursor-pointer transition hover:bg-[#325634] active:scale-95 shadow-sm hover:shadow-md">
                      <FiPlus className="text-white text-[20px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* FULL-WIDTH MEET OUR EXPERTS – ye white hi rahega */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="font-['Poppins'] text-[18px] sm:text-[20px] font-semibold text-center text-[#0C0C0C] mb-8">
            Meet our Experts
          </h2>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* LEFT ARROW */}
            <button
              type="button"
              className="hidden md:flex w-[56px] h-[54px] lg:w-[72px] lg:h-[69px] rounded-full border border-[#E0E0E0] bg-white hover:bg-[#F3F3F3] transition items-center justify-center cursor-pointer hover:shadow-md active:scale-95"
            >
              <FaArrowRightLong className="text-[#b5b5b5] text-[20px] lg:text-[23px] rotate-180" />
            </button>

            {/* CARDS */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {experts.map((exp, idx) => (
                <div
                  key={idx}
                  className="w-[260px] sm:w-[280px] lg:w-[295px] rounded-[32px] bg-[#FFF4D9] flex flex-col items-stretch overflow-hidden"
                >
                  <div className="pt-8 px-6 pb-4 flex flex-col items-center">
                    <div className="relative mb-8">
                      <div className="w-[100px] h-[100px] sm:w-[116px] sm:h-[116px] rounded-full overflow-hidden mx-auto">
                        <img
                          src={doctorImg}
                          alt={exp.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 px-4 py-[4px] rounded-full bg-[#000] text-white text-[13px] font-['Poppins'] flex items-center gap-1">
                        <span>{exp.rating}</span>
                        <span>★</span>
                      </div>
                    </div>

                    <p className="font-['Poppins'] text-[16px] sm:text-[18px] font-semibold text-[#000] leading-[20px] sm:leading-[22px] text-center">
                      {exp.name}
                    </p>
                    <p className="font-['Poppins'] text-[12px] sm:text-[13px] text-[#7B7B7B] mt-1 text-center leading-[16px] sm:leading-[18px]">
                      {exp.title}
                    </p>

                    {/* EXPERIENCE BLOCK */}
                    <div className="mt-4 w-full flex justify-center">
                      <div className="w-full max-w-[240px] h-[24px] flex items-center gap-[10px] whitespace-nowrap justify-center">
                        <div className="w-[24px] h-[24px] flex items-center justify-center -mt-[4px]">
                          <SlGraduation className="text-[#3A643B] text-[20px] sm:text-[22px]" />
                        </div>

                        <p className="font-['Nunito'] font-normal text-[14px] sm:text-[16px] leading-[16px] sm:leading-[18px] tracking-[-0.01em] text-[#000000]">
                          {exp.experience}
                        </p>
                      </div>
                    </div>

                    {/* SKIN SPECIALIST TAG */}
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-[#E3F1E5] text-[12px] sm:text-[13px] font-['Poppins'] text-[#3A643B] leading-[16px] sm:leading-[18px]">
                        <BiCapsule className="text-[16px] sm:text-[18px]" />
                        {exp.tag}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full h-[56px] sm:h-[65px] bg-[#4D7A4E] text-white font-['Poppins'] text-[15px] sm:text-[16px] leading-[20px] sm:leading-[22px] rounded-b-[32px] hover:opacity-90 transition cursor-pointer active:scale-[0.98]"
                  >
                    Book a session
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              type="button"
              className="hidden md:flex w-[56px] h-[54px] lg:w-[72px] lg:h-[69px] rounded-full border border-[#E0E0E0] bg-white hover:bg-[#F3F3F3] transition items-center justify-center cursor-pointer hover:shadow-md active:scale-95"
            >
              <FaArrowRightLong className="text-[#b5b5b5] text-[20px] lg:text-[23px]" />
            </button>
          </div>

          {/* DOTS + CTA */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3A643B]" />
              <span className="w-2 h-2 rounded-full bg-[#D3D3D3]" />
              <span className="w-2 h-2 rounded-full bg-[#D3D3D3]" />
            </div>

            <button
              type="button"
              className="h-[48px] sm:h-[52px] px-6 sm:px-8 rounded-[8px] border border-[#3A643B] bg-[#3a643b14] text-[#3A643B] font-['Poppins'] text-[14px] sm:text-[15px] flex items-center gap-2 cursor-pointer transition hover:bg-[#e4f1e5] active:scale-[0.98]"
            >
              Find more experts
              <FiChevronRight className="text-[16px] sm:text-[18px]" />
            </button>
          </div>
        </div>
      </section>

      <AppDownloadSection />
    </Layout>
  );
}
