import { useState } from 'react';
import style from "./Molecules.module.css"; 
import projects from "../../json/projects.json"
import Image from 'next/image';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setIsAnimating(false);
    }, 500); 
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className={style.slider}>
      <div className="w-full">
        {projects.map((project, index) => (
          <div
            className={`${style.slide}  ${index === currentIndex ? style.active : ''}`}
            key={index}
            style={{ backgroundImage: `url('/img/fitment.png')` }}
          >
            <div className={style.info}>
              <h3>{project.name}</h3>
            </div>
          </div>
        ))}
        <div className={`${style.eraser} ${isAnimating ? style.active : ''}`} />
        <div className={style.buttons_container}>
          <button onClick={prevSlide}>
          <Image
                        width={30}
                        height={30}
                        src="/img/previous-icon.svg"
                        alt="previous"
                    />
          </button>
          <button onClick={nextSlide}>         
            <Image
                        width={30}
                        height={30}
                        src="/img/previous-icon.svg"
                        alt="next"
                    /></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;