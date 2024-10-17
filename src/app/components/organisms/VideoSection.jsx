import styles from "./Organisms.module.css";
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import ScrollMouse from "../atoms/Scroll";

export default function VideoSection() {
  const [showTitle, setShowTitle] = useState(true); 
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { 
        setShowTitle(false); 
      } else {
        setShowTitle(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <video autoPlay loop muted className="h-[100vh] w-[85vw] object-cover object-center hidden lg:flex">
        <source src="/video/hero_home_video_desktop.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop muted className="h-[80vh] w-[100vw] object-cover object-center  border-black border-[20px] border-t-[0px] md:border-[20px] md:border-t-[0px] lg:hidden lg:border-[20px] lg:border-r-0" >
        <source src="/video/hero_home_video_mobile.mp4" type="video/mp4" />
      </video>
      <div className={`innerContainer flex  justify-center h-full w-[100vw] lg:w-[85vw]`}>
        <div className={`absolute top-0 left-0 h-[80vh] bg-blackOverlay border-[20px] border-t-[0px] border-black  w-full z-10 flex items-center p-[5vw] md:border-[20px] md:border-t-[0px] lg:border-[20px] lg:border-r-0 lg:h-full`}>
          
        <motion.div
            initial={{ opacity: 0 }}
            animate={showTitle ? "animate" : "initial"}
            variants={{
              initial: { opacity: 0 },
              animate: { 
                opacity: 1, 
                transition: { duration: 0.8, ease: "easeInOut" } 
              },
              exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            ref={titleRef} 
          >
            <h1 className={` ${styles.videoSectionTitle} text-white  font-ivyPresto text-[70px] leading-[80px] md:text-[110px] md:leading-[110px] xl:text-[180px] xl:leading-[200px] 2xl:text-[180px] 2xl:w-[1000px]`}>
              TURNING IDEAS INTO CODE
            </h1>
          </motion.div>
        </div>
      </div>
      <ScrollMouse />
    </>
  );
}



