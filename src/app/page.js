"use client"
import { useState } from "react";
import Header from "./components/header/header";
import VideoSection from "./components/videoSection/VideoSection";
import ContactSection from "./components/contactSection/ContactSection";


export default function SinglePageApp() {

  const [lightOn, setLightOn] = useState(false);

  const switchLightOn = () => {
      setLightOn(!lightOn);
  };
  return (
    <>
      <Header lightOn={lightOn} switchLightOn={switchLightOn}/>
      <main>
        <VideoSection />
        <ContactSection />
      </main>
    </>

  );
}
