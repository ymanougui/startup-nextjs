"use client";

import React from "react";

const Preheader = () => {
  return (
    <header
      className="bg-black text-white dark:bg-white dark:text-black hidden lg:block z-[10000]" 
      style={{ height: "50px" }} 
    >
      <div className="flex h-full items-center justify-center">
        <h2 className="text-center uppercase"> {/* Added uppercase class */}
          We China Sourcing - Get the best deals on products from China
        </h2>
      </div>
    </header>
  );
};

export default Preheader;
