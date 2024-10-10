"use client"
import VideoSection from "./components/organisms/VideoSection";
import ContactSection from "./components/organisms/ContactSection";
import { useEffect, useState } from "react";
import Loader from "./components/atoms/Loader";
import HeaderDesktop from "./components/atoms/HeaderDesktop";
import HeaderMobile from "./components/molecules/HeaderMobile";
import ProjectsSection from "./components/organisms/ProjectsSection";
import AboutMeSection from "./components/organisms/AboutMeSection";
import Footer from "./components/atoms/Footer";
import ToolsSection from "./components/organisms/ToolsSection";


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
        <div className="relative top-[90vh] h-[100vh] w-[100vw] z-10 lg:top-[100vh] lg:w-[90vw]">
          <div className="overflow-hidden h-[10vh] lg:h-[40vh]">
            <div className="w-[200vw] h-[40vh] lg:h-[120vh] rounded-t-[70%] ml-[-60vw] flex justify-center pt-[20vh] bg-black">
            </div>
          </div>
          <div className="w-full lg:w-[90vw] bg-black flex flex-col gap-[5vh] lg:gap-[30vh]">
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