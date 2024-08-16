"use client";
import Form from "../molecules/Form";
import styles from "./ContactSection.module.css";
import Image from "next/image";


export default function ContactSection() {
  return (

    <div
      className="h-[100vh] w-[100vw] lg:w-[90vw] pl-[5vw] flex items-center justify-between bg-black"
      id="contact"
    >
      <div className="text-white text-[180px] leading-[200px] w-[45%]">
        <h2 className="font-avenir">SAY <span className="font-ivyPresto">HOLA</span></h2>
      </div>
      <aside className="w-[50%] flex flex-col">
        <Form />
        <div className="flex flex-row items-center justify-end gap-10">
          <Image
            height={150}
            width={120}
            src="/img/rubber-duck.webp"
            alt="3d Rubber duck"
            className={`${styles.duck} opacity-50`}
          />
          <Image
            height={150}
            width={120}
            src="/img/rubber-duck.webp"
            alt="3d Rubber duck"
            className={`${styles.duck} opacity-50`}
          />
          <Image
            height={150}
            width={120}
            src="/img/rubber-duck.webp"
            alt="3d Rubber duck"
            className={`${styles.duck} opacity-50`}
          />
        </div>
      </aside>
    </div>
  );
}
