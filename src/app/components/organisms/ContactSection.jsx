"use client";
import Form from "../molecules/Form";
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from "react";

export default function ContactSection() {
  const [showTitle, setShowTitle] = useState(false); 
  const titleRef = useRef(null); 

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          setShowTitle(true); 
        } else {
          setShowTitle(false); 
        }
      },
      {
        threshold: 1 
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current); 
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current); 
      }
    };
  }, []);

  return (
    <div className="bg-black w-[100vw] lg:w-[85vw]" id="contact">
      <div className="innerContainer bg-black pr-[5vw] flex flex-col min-h-[85vh] items-center justify-center gap-16 md:h-auto lg:h-[85vh] lg:gap-20">
        <div className="flex flex-col items-center gap-16 w-full lg:flex-row lg:gap-20 lg:justify-between">
          <div className="text-white text-[60px] leading-[70px] md:text-[110px] md:leading-[110px] lg:w-[45%] xl:text-[180px] xl:leading-[200px] ">
            <motion.div
              initial={{ opacity: 0 }} 
              animate={showTitle ? "animate" : "initial"} 
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } }, 
                exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } } 
              }}
              ref={titleRef}
            >
              <h2 className={`font-avenir`}>
                SAY <span className="font-ivyPresto">HOLA</span>
              </h2>
            </motion.div>
          </div>
          <aside className="w-full flex flex-col gap-22 justify-between h-full lg:w-[55%] lg:justify-center">
            <Form />
          </aside>
        </div>
      </div>
    </div>
  );
}