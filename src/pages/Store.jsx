import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiChevronRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

import { AiFillStar } from "react-icons/ai";

import Layout from "../components/layout/Layout.jsx";
import StoreHero from "../components/layout/StoreHero.jsx";
import AppDownloadSection from "../components/layout/AppDownloadSection.jsx";

import hairSpaImg from "../assets/images/product-hair-spa.png";
import shampooImg from "../assets/images/product-shampoo.png";
import maltImg from "../assets/images/product-malt.png";
import StoreCategories from "../components/layout/StoreCategories.jsx";
const products = [
  {
    id: 1,
    slug: "amrutam-kuntal-care-hair-spa",
    name: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
    price: "₹ 649.00",
    size: "200 ml",
    rating: "5.0",
    reviews: "52",
    image: hairSpaImg,
  },
  {
    id: 2,
    slug: "amrutam-kuntal-care-herbal-shampoo",
    name: "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹ 649.00",
    size: "200 ml",
    rating: "5.0",
    reviews: "52",
    image: shampooImg,
  },
  {
    id: 3,
    slug: "amrutam-nari-sondarya-malt",
    name: "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: "₹ 649.00",
    size: "200 ml",
    rating: "5.0",
    reviews: "52",
    image: maltImg,
  },
];

export default function Store() {
  return (
    <Layout>
      <StoreHero />
      <StoreCategories />

      {/* Summer Collection 1 */}
      <section className="w-full bg-[#FFF7E2]
 font-dm">
        <div className="max-w-6xl mx-auto px-6 pt-4 pb-4 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-pop text-xl font-semibold text-[#202020]">
              Summer Collection
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Right side arrow */}
          <button
            className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[#e0d3c1] bg-white
  absolute right-[-60px] top-1/2 -translate-y-1/2 shadow-md"
          >
            <FaArrowRightLong size={25} className="text-[#b5b5b5]" />
          </button>
        </div>
      </section>

      {/* Summer Collection 2 */}
      <section className="w-full bg-[#FFF7E2]
 pb-16 font-dm">
        <div className="max-w-6xl mx-auto px-6 pt-6 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-pop text-xl font-semibold text-[#202020]">
              Summer Collection
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={`row2-${product.id}`} product={product} />
            ))}
          </div>
          <button
            className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[#e0d3c1] bg-white
  absolute right-[-60px] top-1/2 -translate-y-1/2 shadow-md"
          >
            <FaArrowRightLong size={25} className="text-[#b5b5b5]"
/>
          </button>
        </div>
      </section>

      <AppDownloadSection />
    </Layout>
  );
}















function ProductCard({ product }) {
  return (
    <div className="overflow-hidden flex flex-col font-dm">
      <Link to={`/product/${product.slug}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[320px] object-cover rounded-2xl"
          />
        </div>
      </Link>

      <div className="px-5 pt-4 pb-5 flex flex-col gap-2">
        <Link to={`/product/${product.slug}`}>
          <p className="text-sm text-[#2b2b2b] leading-5">{product.name}</p>
        </Link>

        <div className="text-sm text-[#343434]">
          <span className="font-semibold">{product.price}</span>
          <span className="text-[#777]"> · {product.size}</span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1 text-xs text-[#ff8b38]">
            <AiFillStar size={14} />
            <span className="text-[#555]">({product.reviews})</span>
          </div>
          <button className="w-8 h-8 rounded-md bg-[#2d5b34] flex items-center justify-center text-white">
            <FiPlus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
