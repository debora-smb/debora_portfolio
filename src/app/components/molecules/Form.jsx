"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import styles from "./Molecules.module.css"

export default function Form() {
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
    <form
      onSubmit={handleSubmit}
      ref={refForm}
      className={`${styles.formulario} flex flex-col gap-8 w-[100%] font-avenir text-white`}
    >
      <input
        name="name"
        required
        type="text"
        className="h-[40px] bg-transparent border-b-[1px]"
        placeholder="Name"
      ></input>
      <input
        name="email"
        required
        type="email"
        className="h-[40px] bg-transparent border-b-[1px]"
        placeholder="Email"
      ></input>
      <textarea
        name="message"
        required
        type="text"
        className="h-[80px] bg-transparent border-b-[1px]"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        className={`${styles.contactButton} font-avenir border-[1px] border-white text-white text-center relative w-full md:w-32 p-2 tracking-widest uppercase`}
      >
        <span>SUBMIT</span>
      </button>
    </form>
  );
}
