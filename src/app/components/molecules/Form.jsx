"use client";

import DucksAnimation from "../atoms/Ducks";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Molecules.module.css";

export default function Form() {
  const refForm = useRef();
  const [messageStatus, setMessageStatus] = useState(""); 
  const [isSuccess, setIsSuccess] = useState(null);  

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_mrrxx3h";
    const templateId = "template_inbdxkc";
    const apiKey = "u3eTcSgbBKH4B5bbB";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        setMessageStatus("Message sent successfully!"); 
        setIsSuccess(true);  

        refForm.current.reset();  
      })
      .catch((error) => {
        console.error(error);
        setMessageStatus("Failed to send message. Please try again.");  
        setIsSuccess(false);  
      });
  };

  return (
    <>
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
        />
        <input
          name="email"
          required
          type="email"
          className="h-[40px] bg-transparent border-b-[1px]"
          placeholder="Email"
        />
        <textarea
          name="message"
          required
          className="h-[80px] bg-transparent border-b-[1px]"
          placeholder="Message"
        />
        <button
          type="submit"
          className={`${styles.contactButton} font-avenir border-[1px] border-white text-white text-center relative w-full md:w-48 lg:w-32 p-2 tracking-widest uppercase`}
        >
          <span>SUBMIT</span>
        </button>
      </form>
      {messageStatus && (
        <div
          className={`m-4 text-center ${isSuccess ? "text-green-500" : "text-red-500"}`}
        >
          {messageStatus}
        </div>
      )}
      <DucksAnimation />
    </>
  );
}