"use client"
import Header from "./components/atoms/Header";
import VideoSection from "./components/organisms/VideoSection";
import ContactSection from "./components/organisms/ContactSection";


export default function SinglePageApp() {

  return (
    <>
      <Header />
      <main>
        <div className="videoSection">
          <VideoSection />
        </div>
        <div className="contactSection">
          <div className="overflow-hidden h-[40vh]">
            <div className="w-[200vw] h-[120vh] rounded-t-[70%] ml-[-60vw] flex justify-center pt-[20vh] bg-[#111]">
            </div>
          </div>
          <ContactSection />
        </div>
      </main >
    </>

  );
}