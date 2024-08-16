"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser"

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
  );
}
