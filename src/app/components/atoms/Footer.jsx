import { useState } from 'react';
import style from "./Atoms.module.css";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  const handleBackToTop = () => {
    setIsVisible(false); 

    setTimeout(() => {
      window.scrollTo(0, 0); 
      setIsVisible(true); 
    }, 300); 
  };

  return (
      <footer
        className={` ${style.footer} text-white text-center font-avenir text-lg lg:ml-[5vw] p-4 w-full cursor-pointer`}
        onClick={handleBackToTop} 
      >
        BACK TO TOP
      </footer>
  );
}