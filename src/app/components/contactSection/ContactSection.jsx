"use client";
import { useRef } from "react";
import styles from "./mainContact.module.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function ContactSection() {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_mrrxx3h";
    const templateId = "template_inbdxkc";
    const apiKey = "u3eTcSgbBKH4B5bbB";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="h-[100vh] w-[90vw] flex items-center justify-between p-10"
      id="contact"
    >
      <div className="text-white text-[180px] leading-[200px] pl-[72px] w-10">
        <h2>SAY HOLA</h2>
      </div>
      <aside className="w-[50%] flex flex-col">
        <form
          onSubmit={handleSubmit}
          ref={refForm}
          className="flex flex-col gap-4 w-[100%]"
        >
          <input
            name="name"
            required
            type="text"
            className="h-[40px]"
            placeholder="Name"
          ></input>
          <input
            name="email"
            required
            type="email"
            className="h-[40px]"
            placeholder="Email"
          ></input>
          <textarea
            name="message"
            required
            type="text"
            className="h-[80px]"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="text-white text-lg uppercase p-2 border w-40 hover:bg-white hover:text-black"
          ></input>
        </form>
        <div className="flex flex-row items-center justify-end gap-10">
          <Image
            height={150}
            width={120}
            src="/img/rubber-duck"
            alt="3d Rubber duck"
            className={`${styles.duck} opacity-50`}
          />
          <Image
            height={150}
            width={120}
            src="/img/rubber-duck"
            alt="3d Rubber duck"
            className={`${styles.duck} opacity-50`}
          />
          <Image
            height={150}
            width={120}
            src="/img/rubber-duck"
            alt="3d Rubber duck"
            className={`${styles.duck} opacity-50`}
          />
        </div>
      </aside>
    </div>
  );
}
