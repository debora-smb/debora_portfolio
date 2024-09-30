"use client"
import VideoSection from "./components/organisms/VideoSection";
import ContactSection from "./components/organisms/ContactSection";
import { useEffect, useState } from "react";
import Loader from "./components/atoms/Loader";
import HeaderDesktop from "./components/atoms/HeaderDesktop";
import HeaderMobile from "./components/molecules/HeaderMobile";
import ScrollCircle from "./components/atoms/Scroll";
import ProjectsSection from "./components/organisms/ProjectsSection";
import SkillsSection from "./components/organisms/ToolsSection";
import AboutMeSection from "./components/organisms/AboutMeSection";
import Footer from "./components/atoms/Footer";


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
          <div className="w-full lg:w-[90vw] bg-black flex flex-col gap-[30vh] lg:gap-[30vh]">
            <AboutMeSection />
            <ProjectsSection />
            <SkillsSection />
            <div>
              <ContactSection />
              <Footer />
            </div>
          </div>
        </div>
      </main >
    </>

  );
}