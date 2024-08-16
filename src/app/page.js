"use client"
import Header from "./components/atoms/Header";
import VideoSection from "./components/organisms/VideoSection";
import ContactSection from "./components/organisms/ContactSection";
import { useEffect, useState } from "react";
import Loader from "./components/atoms/Loader";


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
      <Header />
      <main>
        <div className="videoSection">
          <VideoSection />
        </div>
        <div className="contactSection">
          <div className="overflow-hidden h-[40vh]">
            <div className="w-[200vw] h-[120vh] rounded-t-[70%] ml-[-60vw] flex justify-center pt-[20vh] bg-black">
            </div>
          </div>
          <ContactSection />
        </div>
      </main >
    </>

  );
}