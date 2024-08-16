"use client"
import VideoSection from "./components/organisms/VideoSection";
import ContactSection from "./components/organisms/ContactSection";
import { useEffect, useState } from "react";
import Loader from "./components/atoms/Loader";
import HeaderDesktop from "./components/atoms/HeaderDesktop";
import HeaderMobile from "./components/atoms/HeaderMobile";
import ScrollCircle from "./components/atoms/Scroll";
import ProjectsSection from "./components/organisms/ProjectsSection";


export default function SinglePageApp() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <ScrollCircle />
      <HeaderDesktop />
      <HeaderMobile />
      <main>
        <div className={`videoSection bg-black`}>
          <VideoSection />
        </div>
        <div className="roundTopSection">
          <div className="overflow-hidden h-[10vh] lg:h-[40vh]">
            <div className="w-[200vw] h-[40vh] lg:h-[120vh] rounded-t-[70%] ml-[-60vw] flex justify-center pt-[20vh] bg-black">
            </div>
          </div>
          <ProjectsSection />
          <ContactSection />
        </div>
      </main >
    </>

  );
}