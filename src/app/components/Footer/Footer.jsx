import { useState } from 'react';
import styles from "./Footer.module.css";

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
        className={` ${styles.footer} text-white text-center font-avenir text-lg  p-8 w-full cursor-pointer lg:ml-[5vw]`}
        onClick={handleBackToTop} 
      >
        BACK TO TOP
      </footer>
  );
}