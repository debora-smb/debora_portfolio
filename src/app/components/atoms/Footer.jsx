import { useState } from 'react';

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
        className="text-white text-center font-avenir text-lg ml-[5vw] w-full cursor-pointer"
        onClick={handleBackToTop} 
      >
        BACK TO TOP
      </footer>
  );
}