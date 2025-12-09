// src/pages/IngredientDetails.jsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import StoreHero from "../components/layout/StoreHero";
import { getIngredientBySlug } from "../data/ingredients";
import { getProductsByIds } from "../data/products";

import { GoChevronLeft } from "react-icons/go";
import { PiSpiralFill } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";

import hairSpaImg from "../assets/images/product-hair-spa.png";

import rasaIcon from "../assets/images/icon/rasa.png";
import veeryaIcon from "../assets/images/icon/veerya.png";
import gunaIcon from "../assets/images/icon/guna.png";
import vipakaIcon from "../assets/images/icon/vipaka.png";

import formulationIcon1 from "../assets/images/icon/haritaki.png";
import formulationIcon2 from "../assets/images/icon/vati.png";
import formulationIcon3 from "../assets/images/icon/kalyanagulam.png";

import therapeuticIcon1 from "../assets/images/icon/agnimandya.png";
import therapeuticIcon2 from "../assets/images/icon/grahnirog.png";
import therapeuticIcon3 from "../assets/images/icon/arsha.png";
import therapeuticIcon4 from "../assets/images/icon/udarashula.png";
import therapeuticIcon5 from "../assets/images/icon/gudasotha.png";

import rootIcon from "../assets/images/icon/root.png";
import rootBarkIcon from "../assets/images/icon/rootbark.png";
import leavesIcon from "../assets/images/icon/leaves.png";

import { IoLocationSharp, IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function IngredientDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const ingredient = getIngredientBySlug(slug);

  if (!ingredient) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-xs text-[#3E4F36] flex items-center gap-1"
          >
            ← Back
          </button>
          <p>Ingredient not found.</p>
        </div>
      </Layout>
    );
  }

  const defaultFormulations = [
    "Chitrak Haritaki",
    "Chitrakadi Vati",
    "Kalyanagulam",
    "Chitrakadi Churna",
  ];

  const formulationIcons = [
    formulationIcon1,
    formulationIcon2,
    formulationIcon3,
    formulationIcon1,
  ];

  const formulations =
    ingredient.importantFormulations && ingredient.importantFormulations.length
      ? [...ingredient.importantFormulations, ...defaultFormulations].slice(0, 4)
      : defaultFormulations;

  const relatedProducts = getProductsByIds(ingredient.relatedProductIds || []);

  return (
    <Layout>
      <StoreHero />

      {/* MAIN CONTENT – image 1 ke hisaab se, location tak */}
      <div className="relative z-[1] bg-transparent">
        <div className="max-w-6xl mx-auto px-4 pt-3 pb-24 md:pb-10">
          {/* back button */}
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-[#3E4F36] border border-[#3E4F36] rounded-[10px] px-6 py-3 bg-transparent flex items-center gap-2 w-fit mb-10 md:ml-[-20px]"
          >
            <GoChevronLeft className="text-lg" />
            Back
          </button>

          {/* HERO + CONTENT GRID */}
          <div className="grid gap-8 mb-10 mt-6 lg:grid-cols-[503px_minmax(0,1fr)] lg:items-start">
            {/* LEFT – mobile normal, desktop sticky */}
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <div className="w-full max-w-[503px] mx-auto rounded-[24px] bg-[#FFE9CB] flex items-center justify-center aspect-[4/3] lg:h-[503px]">
                <div className="w-[92%] h-[80%] flex items-center justify-center">
                  <img
                    src={ingredient.heroImage}
                    alt={ingredient.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT – all text blocks */}
            <div className="w-full max-w-[713px] flex flex-col gap-14 mt-4 lg:mt-3">
              {/* TITLE + INTRO */}
              <div className="w-full flex flex-col gap-[25px]">
                <h1
                  className="
                    font-nunito font-bold
                    text-[24px] leading-[150%] tracking-[-0.01em] text-[#000000]
                    md:text-[32px]
                    lg:text-[40px]
                  "
                >
                  {ingredient.fullTitle ||
                    "Chitrak - Plumbago zeylancia  (Sanskrit - चित्रक)"}
                </h1>

                <p
                  className="
                    font-nunito font-normal
                    text-[16px] leading-[146%] tracking-[-0.01em] text-[#555]
                    md:text-[18px]
                    lg:text-[24px]
                  "
                >
                  {ingredient.longIntro ||
                    "Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body. It is great for boosting metabolism, enhancing skin health, and easing joint pain."}
                </p>
              </div>

              {/* WHY SECTION */}
              <section className="w-full flex flex-col gap-4">
                <h2 className="font-nunito text-[20px] md:text-[22px] font-semibold text-[#161616]">
                  Why {ingredient.name.split("-")[0].trim()} ?
                </h2>

                <div className="w-full flex flex-col gap-4">
                  <ul className="space-y-4 font-nunito text-[16px] md:text-[18px] leading-[140%] tracking-[0em] text-[#444]">
                    {(ingredient.whyPoints && ingredient.whyPoints.length > 0
                      ? ingredient.whyPoints
                      : [
                          "Chitrak is valued because it helps lower blood sugar, boosts digestion, and reduces anxiety.",
                          "It also protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.",
                          "It is most used in Ayurvedic medicines for indigestion.",
                        ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3A643C66] flex items-center justify-center mt-1">
                          <GiCheckMark className="text-[#3A643B] text-[18px]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* PRAKRITI IMPACT */}
              <section className="w-full flex flex-col gap-5">
                <h2 className="font-nunito text-[22px] font-semibold text-[#161616]">
                  Prakriti Impact
                </h2>

                <div className="w-full flex justify-between gap-4 overflow-x-auto pb-2">
                  <DoshaCircle
                    label="Vata"
                    status={ingredient.tridoshaImpact.vata}
                    ringColor="#3A76D1"
                    icon="vata"
                  />
                  <DoshaCircle
                    label="Kapha"
                    status={ingredient.tridoshaImpact.kapha}
                    ringColor="#3E4F36"
                    icon="kapha"
                  />
                  <DoshaCircle
                    label="Pitta"
                    status={ingredient.tridoshaImpact.pitta}
                    ringColor="#E4873C"
                    icon="pitta"
                  />
                </div>
              </section>

              {/* BENEFITS */}
              <section className="w-full flex flex-col gap-3">
                <h2 className="font-nunito font-bold text-[22px] md:text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616]">
                  Benefits
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "💆",
                      text: "Calms the nervous system and reduces anxiety.",
                    },
                    {
                      icon: "⚖️",
                      text: "Reduces cholesterol and supports weight loss.",
                    },
                    {
                      icon: "🩸",
                      text: "Manages diabetes by lowering blood sugar levels.",
                    },
                    {
                      icon: "💊",
                      text: "Beneficial in Hemorrhoids of Vata origin.",
                    },
                    {
                      icon: "🍽️",
                      text: "Improves digestion and boosts metabolism.",
                    },
                    {
                      icon: "❤️",
                      text: "Prevents deposits in arteries, supporting heart health.",
                    },
                    {
                      icon: "🌿",
                      text: "Treats skin conditions like acne and dermatitis.",
                    },
                    {
                      icon: "🍽️",
                      text: "Speeds up wound healing and promotes new skin growth.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="w-full h-[160px] rounded-[8px] bg-[#FFE9CB] pt-5 pb-5 px-4 flex flex-col gap-3"
                    >
                      <div className="w-[50px] h-[50px] rounded-[12px] bg-[#FFD8A2] flex items-center justify-center">
                        <span className="font-nunito font-medium text-[24px] leading-[146%] tracking-[-0.01em]">
                          {item.icon}
                        </span>
                      </div>

                      <p className="font-nunito font-semibold text-[18px] md:text-[20px] leading-[120%] tracking-[0em] text-[#161616]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* AYURVEDIC PROPERTIES */}
              <section className="w-full flex flex-col gap-6">
                <h2 className="font-nunito font-bold text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616]">
                  Ayurvedic Properties
                </h2>

                <div className="flex flex-wrap md:flex-nowrap justify-between gap-y-10">
                  {(ingredient.ayurvedicPropsDetailed || [
                    {
                      icon: rasaIcon,
                      label: "Rasa",
                      title: "Katu (Pungent)",
                      desc: "Stimulates salivation and digestion",
                    },
                    {
                      icon: veeryaIcon,
                      label: "Veerya",
                      title: "Ushna (Hot)",
                      desc: "Increases heat and energy in the body",
                    },
                    {
                      icon: gunaIcon,
                      label: "Guna",
                      title:
                        "Laghu (Light), Ruksha (Dry), Tikshna (Sharp)",
                      desc: "Easy to digest, reduces heaviness",
                    },
                    {
                      icon: vipakaIcon,
                      label: "Vipaka",
                      title: "Katu (Pungent)",
                      desc: "Drying and stimulating even after digestion",
                    },
                  ]).map((item, i) => (
                    <div
                      key={i}
                      className="w-1/2 md:w-[160px] flex flex-col items-center text-center gap-2"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-1">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-[64px] h-[64px] object-contain scale-[1.5]"
                        />
                      </div>

                      <p className="font-nunito font-bold text-[20px] leading-[153%] tracking-[-0.01em] text-[#161616]">
                        {item.label}
                      </p>

                      <p className="font-nunito font-normal text-[20px] leading-[153%] tracking-[-0.01em] text-[#161616]">
                        {item.title}
                      </p>

                      <p className="font-nunito font-normal text-[16px] leading-[153%] tracking-[-0.01em] text-[#161616]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* IMPORTANT FORMULATIONS */}
              <section className="w-full flex flex-col gap-4">
                <h2 className="font-nunito font-bold text-[22px] md:text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616]">
                  Important formulations
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {formulations.map((name, i) => (
                    <div
                      key={i}
                      className="w-[169.25px] h-[90px] flex flex-col items-center gap-1"
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <img
                          src={formulationIcons[i % formulationIcons.length]}
                          alt={name}
                          className="w-[28px] h-[28px] object-contain scale-[2.2]"
                        />
                      </div>
                      <p className="font-nunito text-[14px] font-semibold text-[#161616] text-center">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* THERAPEUTIC USES */}
              <section className="w-full flex flex-col gap-4">
                <h2 className="font-nunito font-bold text-[22px] md:text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616]">
                  Therapeutic uses
                </h2>

                {(() => {
                  const uses =
                    ingredient.therapeuticUses &&
                    ingredient.therapeuticUses.length
                      ? ingredient.therapeuticUses
                      : [
                          "Agnimandya ",
                          "Grahani Rog",
                          "Arsha",
                          "Udara Shula",
                          "Gudasothas",
                        ];

                  const therapeuticIcons = [
                    therapeuticIcon1,
                    therapeuticIcon2,
                    therapeuticIcon3,
                    therapeuticIcon4,
                    therapeuticIcon5,
                  ];

                  return (
                    <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4">
                      {uses.map((name, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-3"
                        >
                          <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center">
                            <div className="w-[56px] h-[56px] rounded-full bg-[#E0E8E2] flex items-center justify-center p-2">
                              <img
                                src={therapeuticIcons[i] || therapeuticIcons[0]}
                                alt={name}
                                className="w-[28px] h-[28px] object-contain scale-[1.2]"
                              />
                            </div>
                          </div>

                          <p className="font-nunito text-[16px] md:text-[18px] font-extralight text-[#161616] text-center whitespace-nowrap">
                            {name}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </section>

              {/* PLANT PARTS AND PURPOSE */}
              <section className="w-full flex flex-col gap-4">
                <h2 className="font-nunito font-bold text-[22px] md:text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616]">
                  Plant parts and its purpose
                </h2>

                <div className="w-full grid sm:grid-cols-3 gap-10 md:gap-16">
                  {(ingredient.plantPartsDetailed || [
                    {
                      icon: rootIcon,
                      title: "Root",
                      desc: "Digestion, skin conditions, manage blood sugar level.",
                    },
                    {
                      icon: rootBarkIcon,
                      title: "Root bark",
                      desc: "Manage obesity, metabolism and assist in weight loss.",
                    },
                    {
                      icon: leavesIcon,
                      title: "Leaves",
                      desc: "Used externally for skin conditions and wounds.",
                    },
                  ]).map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 w-full"
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-[26px] h-[26px] object-contain scale-[2.3]"
                        />
                      </div>

                      <p className="font-nunito text-[18px] md:text-[20px] font-semibold text-[#161616] text-center">
                        {item.title}
                      </p>

                      <p className="font-nunito text-[14px] md:text-[15px] font-extralight text-[#555] leading-[160%] text-center">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* BEST COMBINED WITH */}
              <section className="w-full flex flex-col gap-2">
                <h2 className="font-nunito font-bold text-[22px] md:text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616]">
                  Best combined with
                </h2>
                <p className="font-nunito text-[18px] md:text-[20px] font-light text-[#161616] leading-[150%]">
                  {ingredient.combinedWith && ingredient.combinedWith.length
                    ? ingredient.combinedWith.join(", ")
                    : "Pipplai, Haritakai, Guggulu, Punarnava, Amla, Giloy"}
                </p>
              </section>

              {/* GEOGRAPHICAL LOCATIONS */}
              <section className="w-full flex flex-col gap-2 font-nunito">
                <h2 className="font-bold text-[22px] md:text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616]">
                  Geographical locations
                </h2>

                <div className="flex items-start gap-2 w-full">
                  <IoLocationSharp
                    size={24}
                    className="text-[#38653D] mt-[8px] md:mt-[12px]"
                  />

                  <p
                    className="
                      text-[16px] md:text-[20px]
                      font-normal
                      leading-[146%]
                      tracking-[-0.01em]
                      text-black
                      w-full
                    "
                  >
                    {ingredient.geoLocations ||
                      "It is native to tropical and subtropical regions worldwide, including India and Srilanka."}
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* PRODUCTS – DESKTOP/TABLET normal section (unchanged) */}
          <section className="mt-12 mb-14 hidden md:block">
            <div className="w-full max-w-[1242px] rounded-[16px] px-0 md:px-6 py-6">
              <h2 className="font-nunito font-bold text-[22px] md:text-[24px] leading-[146%] tracking-[-0.01em] text-[#161616] mb-4">
                Products with "{ingredient?.name?.split(" - ")[0] || "Ingredient"}
                " as primary ingredient
              </h2>

              {relatedProducts.length === 0 ? (
                <p className="font-nunito text-[14px] text-[#777]">
                  No products linked to this ingredient yet.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {Array.from(
                    { length: 3 },
                    (_, i) => relatedProducts[i % relatedProducts.length]
                  ).map((p, idx) => {
                    const fullName = p.name || "";
                    const marker = "Do-It-Yourself";
                    let firstLine = fullName;
                    let secondLine = "";

                    const markerIndex = fullName.indexOf(marker);
                    if (markerIndex !== -1) {
                      firstLine = fullName
                        .slice(0, markerIndex + marker.length)
                        .trim();
                      secondLine = fullName
                        .slice(markerIndex + marker.length)
                        .trim();
                    }

                    return (
                      <Link key={idx} to={`/product/${p.slug}`}>
                        <div className="rounded-[16px] overflow-hidden flex flex-col hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-shadow">
                          <div className="w-full aspect-[4/3]">
                            <img
                              src={hairSpaImg}
                              alt={p.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="px-4 pt-3 pb-4 flex items-end justify-between gap-3">
                            <div>
                              <p className="font-nunito text-[15px] font-extralight text-[#161616] leading-[150%] tracking-[0.01em] break-words max-w-[260px]">
                                <span>{firstLine}</span>
                                {secondLine && (
                                  <>
                                    <br />
                                    <span>{secondLine}</span>
                                  </>
                                )}
                              </p>

                              <p className="font-nunito text-[14px] text-[#161616] mt-2">
                                ₹ {p.price.toFixed(2)}
                              </p>
                            </div>

                            <button
                              type="button"
                              className="w-9 h-9 rounded-[10px] bg-[#3A643B] flex items-center justify-center text-white text-[30px] leading-none"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE bottom sheet for products – image 2 / 3 */}
      {relatedProducts.length > 0 && (
        <MobileProductsSheet ingredient={ingredient} products={relatedProducts} />
      )}
    </Layout>
  );
}

/* ----------------- helper components ----------------- */

function DoshaCircle({ label, status, ringColor, icon }) {
  const renderIcon = () => {
    if (icon === "vata")
      return <PiSpiralFill className="text-3xl text-[#3A76D1]" />;
    if (icon === "kapha")
      return <FaLeaf className="text-3xl text-[#3E4F36]" />;
    if (icon === "pitta")
      return <IoMdFlame className="text-3xl text-[#E4873C]" />;
    return null;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `14px solid ${ringColor}`,
            borderColor: `${ringColor} ${ringColor} ${ringColor} #EAE5D8`,
          }}
        />
        <div className="w-[70px] h-[70px] md:w-[82px] md:h-[82px] rounded-full bg-[#F7F1E3] flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>
      <p className="mt-4 text-[14px] md:text-[16px] font-medium text-center">
        <span className="text-[#767676]">{label} </span>
        <span className="text-[#404040] font-semibold">{status}</span>
      </p>
    </div>
  );
}

/* MOBILE: bottom sheet style related products */
function MobileProductsSheet({ ingredient, products }) {
  const [open, setOpen] = React.useState(false);

  if (!products || products.length === 0) return null;

  const title = `Products with "${
    ingredient?.name?.split(" - ")[0] || "Ingredient"
  }" as primary ingredient`;

  const displayProducts = Array.from(
    { length: 3 },
    (_, i) => products[i % products.length]
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-1">
        <div
          className={`
            bg-white rounded-t-[24px]
            shadow-[0_-8px_24px_rgba(0,0,0,0.25)]
            overflow-hidden
            transition-all duration-300
            ${open ? "max-h-[60vh]" : "max-h-[72px]"}
          `}
        >
          {/* header row – click to toggle */}
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className="w-full flex items-center justify-between px-4 py-3"
          >
            <p className="font-nunito font-semibold text-[14px] leading-[140%] text-[#161616] text-left">
              {title}
            </p>
            {open ? (
              <IoChevronUp className="text-xl text-[#161616]" />
            ) : (
              <IoChevronDown className="text-xl text-[#161616]" />
            )}
          </button>

          {/* list – visible only when open */}
          {open && (
            <div className="px-4 pb-4 overflow-y-auto max-h-[70vh]">
              <div className="grid grid-cols-2 gap-4">
                {displayProducts.map((p, idx) => {
                  const fullName = p.name || "";
                  const marker = "Do-It-Yourself";
                  let firstLine = fullName;
                  let secondLine = "";

                  const markerIndex = fullName.indexOf(marker);
                  if (markerIndex !== -1) {
                    firstLine = fullName
                      .slice(0, markerIndex + marker.length)
                      .trim();
                    secondLine = fullName
                      .slice(markerIndex + marker.length)
                      .trim();
                  }

                  return (
                    <Link key={idx} to={`/product/${p.slug}`}>
                      <div className="rounded-[16px] overflow-hidden flex flex-col bg-white shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
                        <div className="w-full aspect-[4/5]">
                          <img
                            src={hairSpaImg}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="px-3 pt-2 pb-3 flex items-end justify-between gap-2">
                          <div>
                            <p className="font-nunito text-[12px] font-extralight text-[#161616] leading-[150%] tracking-[0.01em] break-words">
                              <span>{firstLine}</span>
                              {secondLine && (
                                <>
                                  <br />
                                  <span>{secondLine}</span>
                                </>
                              )}
                            </p>

                            <p className="font-nunito text-[12px] text-[#161616] mt-1.5">
                              ₹ {p.price.toFixed(2)}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="w-7 h-7 rounded-[8px] bg-[#3A643B] flex items-center justify-center text-white text-[22px] leading-none"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
