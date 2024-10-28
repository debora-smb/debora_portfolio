import styles from "./VideoSection.module.css";
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import ScrollMouse from "./Scroll";

export default function VideoSection() {
  const [showTitle, setShowTitle] = useState(true); 
  const titleRef = useRef(null);
  const desktopVideoSrc = "/video/hero_home_video_desktop.mp4";
  const mobileVideoSrc = "/video/hero_home_video_mobile.mp4";

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

  useEffect(() => {
    // Crear los elementos de precarga
    const desktopLink = document.createElement('link');
    desktopLink.rel = 'preload';
    desktopLink.as = 'video';
    desktopLink.href = desktopVideoSrc;
    document.head.appendChild(desktopLink);

    const mobileLink = document.createElement('link');
    mobileLink.rel = 'preload';
    mobileLink.as = 'video';
    mobileLink.href = mobileVideoSrc;
    document.head.appendChild(mobileLink);

    // Limpiar los links al desmontar el componente
    return () => {
      if (desktopLink.parentNode) {
        document.head.removeChild(desktopLink);
      }
      if (mobileLink.parentNode) {
        document.head.removeChild(mobileLink);
      }
    };
  }, [desktopVideoSrc, mobileVideoSrc]);


  return (
    <>
      <video autoPlay loop muted className="h-[100vh] w-[85vw] object-cover object-center hidden lg:flex">
        <source src={desktopVideoSrc} type="video/mp4" />
      </video>
      <video autoPlay loop muted className="h-[90dvh] w-[100vw] object-cover object-center dark:border-black border-black border-[20px] border-t-[0px] md:border-[20px] md:border-t-[0px] lg:hidden lg:border-[20px] lg:border-r-0" >
        <source src={mobileVideoSrc} type="video/mp4" />
      </video>
      <div className={`innerContainer flex  justify-center h-full w-[100vw] lg:w-[85vw]`}>
        <div className={`absolute top-0 left-0 h-[90dvh] bg-blackOverlay border-[20px] border-t-[0px] dark:border-black border-black  w-full z-10 flex items-center p-[5vw] md:border-[20px] md:border-t-[0px] lg:border-[20px] lg:border-r-0 lg:h-full`}>
          
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
            <h1 className={` ${styles.videoSectionTitle} text-white  font-ivyPresto text-[70px] leading-[80px] md:text-[120px] md:leading-[120px] xl:text-[180px] xl:leading-[200px] 2xl:text-[180px] 2xl:w-[1000px]`}>
              TURNING IDEAS INTO CODE
            </h1>
          </motion.div>
        </div>
      </div>
      <ScrollMouse />
    </>
  );
}



