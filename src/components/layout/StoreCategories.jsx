// src/components/store/StoreCategories.jsx
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

// Icons
import allIcon from "../../assets/images/icon/all.png";
import hairIcon from "../../assets/images/icon/hair.png";
import faceIcon from "../../assets/images/icon/face.png";
import digestionIcon from "../../assets/images/icon/digestion.png";
import bonesIcon from "../../assets/images/icon/bones.png";
import immunityIcon from "../../assets/images/icon/immunity.png";

const categories = [
  { label: "All" },
  { label: "Hair" },
  { label: "Skin" },
  { label: "Digestion" },
  { label: "Bones" },
  { label: "Immunity" },
  { label: "More" },
];

export default function StoreCategories({
  activeCat: controlledActiveCat,
  onChange,
}) {
  // fallback internal state (agar parent se props na aaye)
  const [internalActiveCat, setInternalActiveCat] = useState("All");

  const isControlled =
    controlledActiveCat !== undefined && typeof onChange === "function";
  const activeCat = isControlled ? controlledActiveCat : internalActiveCat;

  const handleChange = (label) => {
    if (isControlled) {
      onChange(label);
    } else {
      setInternalActiveCat(label);
    }
  };

  return (
    <div className="w-full bg-[#FFF7E2] border-t border-[#f1e3bf]">
      {/* px-30 hata ke responsive padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div
          className="
            flex items-stretch sm:items-center
            justify-start sm:justify-between
            gap-3 sm:gap-4 lg:gap-6
            overflow-x-auto sm:overflow-visible
            no-scrollbar
            py-3 sm:py-4
          "
        >
          {categories.map((cat) => {
            const isActive = activeCat === cat.label;

            return (
              <button
                key={cat.label}
                onClick={() => handleChange(cat.label)}
                className="
                  flex flex-col items-center
                  gap-2 sm:gap-3
                  min-w-[84px] sm:min-w-[96px] lg:min-w-[110px]
                  flex-shrink-0
                  focus:outline-none
                "
              >
                {/* OUTER CIRCLE */}
                <div
                  className={`flex items-center justify-center rounded-full transition-all ${
                    isActive
                      ? "w-[60px] h-[60px] sm:w-[72px] sm:h-[72px]"
                      : "w-[80px] h-[80px] sm:w-[92px] sm:h-[92px] bg-white"
                  }`}
                >
                  {/* INNER CIRCLE */}
                  <div
                    className={`rounded-full flex items-center justify-center border-2
                      ${
                        isActive
                          ? "border-[#e3f0e4] bg-[#e3f0e4]"
                          : "border-[#d2e1d4] bg-[#eef5f0]"
                      }
                      w-[60px] h-[60px] sm:w-[72px] sm:h-[72px]
                    `}
                  >
                    {cat.label === "All" ? (
                      <img
                        src={allIcon}
                        alt="All"
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                      />
                    ) : cat.label === "Hair" ? (
                      <img
                        src={hairIcon}
                        alt="Hair"
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                      />
                    ) : cat.label === "Skin" ? (
                      <img
                        src={faceIcon}
                        alt="Skin"
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                      />
                    ) : cat.label === "Digestion" ? (
                      <img
                        src={digestionIcon}
                        alt="Digestion"
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                      />
                    ) : cat.label === "Bones" ? (
                      <img
                        src={bonesIcon}
                        alt="Bones"
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                      />
                    ) : cat.label === "Immunity" ? (
                      <img
                        src={immunityIcon}
                        alt="Immunity"
                        className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                      />
                    ) : cat.label === "More" ? (
                      <FiChevronRight
                        size={26}
                        className="sm:w-8 sm:h-8 text-[#587f55]"
                      />
                    ) : null}
                  </div>
                </div>

                {/* LABEL */}
                <span
                  className={`
                    leading-none
                    text-xs sm:text-sm lg:text-[20px]
                    ${isActive ? "text-[#27344b]" : "text-[#3c3c3c]"}
                  `}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
