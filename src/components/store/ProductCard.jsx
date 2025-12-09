import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E4E4E4] overflow-hidden flex flex-col">
      <Link to={`/product/${product.slug}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
          <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-xs">
            ♡
          </button>
        </div>
      </Link>

      <div className="flex-1 flex flex-col px-4 pt-4 pb-3">
        <Link to={`/product/${product.slug}`}>
          <p className="text-[11px] text-[#555] leading-4 mb-2 line-clamp-3">
            {product.name}
          </p>
        </Link>

        <div className="flex items-baseline gap-2 text-[11px] mb-2">
          <span className="font-semibold text-[#3E4F36]">
            ₹ {product.price.toFixed(2)}
          </span>
          <span className="line-through text-[#A6A6A6]">
            ₹ {product.mrp.toFixed(2)}
          </span>
          <span className="text-[#4F4F4F]">• {product.size}</span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#777] mb-3">
          <div className="flex items-center gap-1">
            <span className="text-[11px]">⭐</span>
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-[#A6A6A6]">({product.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 rounded-full border border-[#C4C4C4] flex items-center justify-center">
              -
            </button>
            <span>1</span>
            <button className="w-6 h-6 rounded-full bg-[#3E6B3B] text-white flex items-center justify-center">
              +
            </button>
          </div>
        </div>

        <button className="mt-auto w-full rounded-full bg-[#3E6B3B] text-white text-[11px] py-2 font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
