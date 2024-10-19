"use client"
import VideoSection from "./components/sections/VideoSection";
import ContactSection from "./components/sections/ContactSection";
import { useEffect, useState } from "react";
import Loader from "./components/components/Loader";
import HeaderDesktop from "./components/components/HeaderDesktop";
import HeaderMobile from "./components/components/HeaderMobile";
import ProjectsSection from "./components/sections/ProjectsSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import Footer from "./components/components/Footer";
import ToolsSection from "./components/sections/ToolsSection";


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
      <HeaderDesktop />
      <HeaderMobile />
      <main>
        <div className="fixed top-[10vh] left-0 h-[100vh] bg-black lg:top-0">
          <VideoSection />
        </div>
        <div className="relative top-[90vh] h-[100vh] w-[100vw] z-10 lg:top-[100vh] lg:w-[85vw]">
          <div className="overflow-hidden h-[10vh] lg:h-[40vh]">
            <div className="w-[200vw] h-[40vh] lg:h-[120vh] rounded-t-[70%] ml-[-60vw] flex justify-center pt-[20vh] bg-black">
            </div>
          </div>
          <div className="w-full lg:w-[85vw] bg-black flex flex-col gap-[20vh] lg:gap-[30vh]">
            <AboutMeSection />
            <ProjectsSection />
            <ToolsSection />
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