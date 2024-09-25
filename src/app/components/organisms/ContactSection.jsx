"use client";
import Form from "../molecules/Form";
import styles from "./Organisms.module.css";
import Image from "next/image";


export default function ContactSection() {
  return (

    <div
      className="bg-black w-[100vw] lg:w-[90vw]"
      id="contact"
    >
      <div
        className="innerContainer pr-[5vw] flex flex-col lg:flex-row h-[90vh] md:h-auto lg:h-[100vh]  items-center gap-16 lg:gap-20 lg:justify-between "
      >
        <div className="text-white text-[60px] md:text-[110px] xl:text-[180px] leading-[70px] md:leading-[110px] xl:leading-[200px] lg:w-[45%]">
          <h2 className={`font-avenir`} >SAY <span className="font-ivyPresto">HOLA</span></h2>
        </div>
        <aside className=" w-full lg:w-[55%] flex flex-col  gap-22 lg:justify-center  justify-between h-full">
          <Form />
          <div className="flex flex-row items-center justify-between md:justify-end gap-10 ">
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
    </div>
  );
}
