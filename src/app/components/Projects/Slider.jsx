import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import projects from "../../json/projects.json";
import Image from "next/image";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      );
      setIsAnimating(false);
    }, 500);
  };


  const handleScroll = () => {
      const videoElement = document.getElementById('lazyVideo');
      if (videoElement) {
          const rect = videoElement.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          // Verifica si el video está dentro de la ventana visible
          if (rect.top <= windowHeight && rect.bottom >= 0) {
              setIsVisible(true);
              window.removeEventListener('scroll', handleScroll); // Desactiva el evento una vez que se carga
          }
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className={styles.slider}>
      <div className="w-full h-full">
        {projects.map((project, index) => (
          <div
            className={`flex flex-col lg:flex-row gap-4 lg:gap-20 lg:items-center ${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
            key={index}
          >
            <div className="w-full lg:w-1/2 h-fit flex justify-center">
            <video 
            id="lazyVideo" 
            autoPlay 
            loop 
            muted 
            className="object-cover w-[68%] md:w-[49dvw] lg:w-[34%] pt-[3%] lg:pt-[1%] absolute"
            style={{ display: isVisible ? 'block' : 'none' }} 
        >
            {isVisible && (
                <source src={`/video/${project.video}.mp4`} type="video/mp4" />
            )}
            Tu navegador no soporta el video.
        </video>
              

              <Image
                height={800}
                width={650}
                src="/img/laptop-frame.webp"
                className="relative z-40 top-0 w-full md:w-[80%] lg:w-full h-auto"
              />
            </div>

            <div
              className={` w-full lg:w-1/2 lg:h-full flex flex-col  items-center justify-center`}
            >
              <div className="flex flex-col gap-4 justify-start w-full">
                <h3 className="font-avenir self-center text-[#ffcd46] text-[28px] md:text-[46px] font-bold w-fit">
                  {project.name}
                </h3>

                <div className="flex justify-center space-x-2 xl:space-x-6">
                  {project.technologies.map((techIcon, techIndex) => (
                    <Image
                      key={techIndex}
                      src={`/assets/icons/icon-${techIcon}.svg`}
                      alt={`Technology icon ${techIndex}`}
                      width={40}
                      height={40}
                      className="w-[28px] md:w-10 h-auto"
                    />
                  ))}
                </div>
                <div className="flex flex-row items-center justify-between mt-8 xl:mt-14 relative">
                  <div className="flex lg:justify-center space-x-8">
                  {project.github && (
                      <a href={project.github}>
                        <Image
                          src="/assets/icons/icon-github.svg"
                          alt="Github repository"
                          width={40}
                          height={40}
                          className="w-[30px] md:w-10 h-auto"
                        />
                      </a>
                    )}
                    {project.web && (
                      <a href={project.web}>
                        <Image
                          src="/assets/icons/icon-web.svg"
                          alt="Github repository"
                          width={40}
                          height={40}
                          className="w-[30px] md:w-10 h-auto"
                        />
                      </a>
                    )}
                  </div>
                  <div className={styles.buttons_container}>
                    <button onClick={prevSlide}>
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/previous-icon.svg"
                        alt="previous"
                        className="w-[30px] md:w-10 h-auto"
                      />
                    </button>
                    <button onClick={nextSlide}>
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/previous-icon.svg"
                        alt="next"
                        className={`${styles.next} w-[30px] md:w-10 h-auto`}

                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          className={`${styles.eraser} ${isAnimating ? styles.active : ""}`}
        />
      </div>
    </div>
  );
};

export default Slider;
