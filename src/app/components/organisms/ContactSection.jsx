"use client";
import Form from "../molecules/Form";
import styles from "./Organisms.module.css";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import Footer from "../atoms/Footer";

export default function ContactSection() {
  const [showTitle, setShowTitle] = useState(false); // Estado para controlar la visibilidad
  const titleRef = useRef(null); 

  useEffect(() => {
    // Configuración del IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el componente está completamente dentro del viewport (isIntersecting && intersectionRatio == 1)
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          setShowTitle(true); // Mostrar el título
        } else {
          setShowTitle(false); // Ocultar el título
        }
      },
      {
        threshold: 1 // El componente debe estar completamente dentro del viewport para que el threshold se cumpla
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current); // Iniciar observación del título
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current); // Detener la observación cuando el componente se desmonta
      }
    };
  }, []);

  return (
    <div className="bg-black w-[100vw] lg:w-[90vw]" id="contact">
      <div className="innerContainer bg-black pr-[5vw] flex flex-col h-[100vh] items-center justify-center gap-16 md:h-auto lg:h-[100vh] lg:gap-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20 lg:justify-between">
          <div className="text-white text-[60px] leading-[70px] md:text-[110px] md:leading-[110px] lg:w-[45%] xl:text-[180px] xl:leading-[200px] ">
            <motion.div
              initial={{ opacity: 0 }} // Estado inicial del título (invisible)
              animate={showTitle ? "animate" : "initial"} // Animación basada en la visibilidad
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } }, // Fade in cuando está visible
                exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } } // Fade out cuando no es visible
              }}
              ref={titleRef}
            >
              <h2 className={`${styles.lineUp} font-avenir`}>
                SAY <span className="font-ivyPresto">HOLA</span>
              </h2>
            </motion.div>
          </div>
          <aside className="w-full flex flex-col gap-22 justify-between h-full lg:w-[55%] lg:justify-center">
            <Form />
            <div className="flex flex-row items-center justify-between gap-10 md:justify-end">
              <Image
                height={110}
                width={80}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className={`${styles.duck} opacity-50`}
              />
              <Image
                height={110}
                width={80}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className={`${styles.duck} opacity-50`}
              />
              <Image
                height={110}
                width={80}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className={`${styles.duck} opacity-50`}
              />
            </div>
          </aside>
        </div>
        <Footer />
      </div>
    </div>
  );
}