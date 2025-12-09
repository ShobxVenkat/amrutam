import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";



// src/components/layout/Layout.jsx
export default function Layout({ children }) {
  return (
   <div className="w-full min-h-screen bg-[#FFF7E2] overflow-visible">

      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

