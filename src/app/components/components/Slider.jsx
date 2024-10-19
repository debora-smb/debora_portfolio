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

      <div className="w-full h-full">
        {projects.map((project, index) => (
          <div
            className={`flex flex-col gap-4 ${style.slide} ${index === currentIndex ? style.active : ''}`}
            key={index}

          >
            <div className=' bg-cover h-full gap-4 bg-x-center bg-y-top flex flex-col justify-end ' style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className={`${style.info} flex flex-row items-center justify-center`}>

                <div className='flex gap-20 justify-start px-4 w-full items-center'>
                  <h3 className='font-avenir text-white text-[20px] xl:text-[30px] font-bold w-fit'>{project.name}</h3>
                  <div className="flex justify-center space-x-4">
                  {project.github && (
                    <a href={project.github}>
                      <Image
                        src="/img/icon-github.svg"
                        alt="Github repository"
                        width={30}
                        height={30}
                      />
                    </a>
                    )}
                    {project.web && (
                    <a href={project.web}>
                      <Image
                        src="/img/icon-web.svg"
                        alt="Github repository"
                        width={30}
                        height={30}
                      />
                    </a>
)}
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    {project.technologies.map((techIcon, techIndex) => (
                      <Image
                        key={techIndex}
                        src={techIcon}
                        alt={`Technology icon ${techIndex}`}
                        width={30}
                        height={30}
                        
                      />
                    ))}
                  </div>
 
                </div>
              </div>
            </div>

          </div>
        ))}
        <div className={`${style.eraser} ${isAnimating ? style.active : ''}`} />
        <div className={style.buttons_container}>



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