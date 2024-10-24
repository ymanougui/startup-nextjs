"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Get the best deals on products from China",
  "20 Years of Product Sourcing Experience in China",
  "Your One Stop Solution for Product Sourcing and Manufacturing Consulting from China",
  "Get the best prices on products from China",
];

const Preheader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);

    if (isFirstLoad) {
      setIsFirstLoad(false);
    }

    return () => clearInterval(interval);
  }, [isFirstLoad]);

  const AnimatedText = ({ text, isFirst }) => {
    const words = text.split(" ");
    return (
      <span>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: isFirst ? 1 : 0, y: isFirst ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: isFirst ? 0 : i / 15,
              ease: "easeOut"
            }}
            className="inline-block mx-0.5"  // Changed from mx-1 to mx-0.5 for smaller spacing
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <header
      className="bg-black text-white dark:bg-white dark:text-black hidden lg:block z-[10000]"
      style={{ height: "50px" }}
    >
      <div className="flex h-full items-center justify-center overflow-hidden">
        <motion.h2 className="text-center uppercase whitespace-nowrap">
          <span className="mr-2">We China Sourcing - </span>
          <motion.span
            key={currentTextIndex}
            initial={{ opacity: isFirstLoad ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedText 
              text={texts[currentTextIndex]} 
              isFirst={isFirstLoad} 
            />
          </motion.span>
        </motion.h2>
      </div>
    </header>
  );
};

export default Preheader;