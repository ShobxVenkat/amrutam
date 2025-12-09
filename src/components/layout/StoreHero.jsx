import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import heroBg from "../../assets/images/hero-leaf-bg.png";
import StoreCategories from "./StoreCategories";

export default function StoreHero() {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <section className="w-full font-dm">
      <div
        className="w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* OUTER CONTAINER */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-auto py-6 sm:py-8 md:py-0 md:h-[202px]">
          {/* TITLE */}
          <h1 className="font-pop text-[24px] sm:text-[28px] md:text-[36px] leading-[110%] md:leading-[100%] font-semibold text-[#27344b] text-center mb-4 sm:mb-5 md:mb-6">
            Store
          </h1>

          {/* SEARCH + BAG ROW */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-5">
            {/* SEARCH BAR */}
            <div className="w-full sm:flex-1 sm:max-w-[480px] md:max-w-[539px] h-11 sm:h-12 flex items-center bg-white rounded-[10px] sm:rounded-[12px] border border-[#c7cbc6] px-3 sm:px-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2">
                <FiSearch className="text-[#000000]" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for Kuntal Care"
                className="flex-1 font-nunito text-[14px] md:text-[16px] leading-[20px] tracking-[-0.01em] font-normal text-[#000000] outline-none placeholder:text-[#000000]"
              />
            </div>

            {/* SHOPPING BAG ICON */}
            <button className="flex items-center justify-center w-11 h-11 sm:w-[50px] sm:h-12 rounded-[7px] border border-[#c7cbc6] bg-white self-center sm:self-auto">
              <FiShoppingBag className="text-[#000000]" size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Component – baad me yahan use kar lena */}
      {/* <StoreCategories activeCat={activeCat} setActiveCat={setActiveCat} /> */}
    </section>
  );
}
