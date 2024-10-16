import { useState } from 'react';
import style from "./Molecules.module.css";
import projects from "../../json/projects.json"
import Image from 'next/image';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showInfo, setShowInfo] = useState(false); // State for showing info

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowInfo(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowInfo(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 500);
  };



  const toggleInfo = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  return (
    <div className={style.slider}>
      <div className="w-full">
        {projects.map((project, index) => (
          <div
            className={`${style.slide} ${index === currentIndex ? style.active : ''}`}
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className={`${style.info} ${showInfo ? style.visible : ''} flex flex-col items-center justify-center`}>
             <div>
              <h3 className='font-avenir text-white text-[40px] font-bold leading-[80px] w-fit'>{project.name}</h3>
              <div className="flex justify-center space-x-4 mt-4"> {/* Flex container for icons */}
                {project.technologies.map((techIcon, techIndex) => (
                  <Image
                    key={techIndex} // Use techIndex as key since they are likely unique
                    src={techIcon}
                    alt={`Technology icon ${techIndex}`} // Alt text for accessibility
                    width={40} // Set width for icons
                    height={40} // Set height for icons
                  />
                ))}
              </div>
              </div>
            </div>
          </div>
        ))}
        <div className={`${style.eraser} ${isAnimating ? style.active : ''}`} />
        <div className={style.buttons_container}>
          <button className='mr-12' onClick={toggleInfo}>
            <Image
              width={40}
              height={40}
              src={showInfo ? "/img/close-icon.svg" : "/img/info-icon.svg"}
              alt={showInfo ? "Close" : "Project information"}
              className={showInfo ? undefined : style.infobutton}
            />

          </button>
          <button onClick={prevSlide}>
            <Image
              width={40}
              height={40}
              src="/img/previous-icon.svg"
              alt="previous"
            />
          </button>
          <button onClick={nextSlide}>
            <Image
              width={40}
              height={40}
              src="/img/previous-icon.svg"
              alt="next"
              className={style.next}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;