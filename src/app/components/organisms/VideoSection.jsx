import style from "./Organisms.module.css"

export default function VideoSection() {
  return (
    <>
      <video autoPlay loop muted className="h-[100vh] w-[90vw] object-cover object-center hidden lg:flex">
        <source src="/video/hero_home_video_desktop.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop muted className="h-[90vh] w-[100vw] object-cover object-center  border-black border-[10px] border-t-[0px] md:border-[20px] md:border-t-[0px] lg:hidden lg:border-[20px]" >
        <source src="/video/hero_home_video_mobile.mp4" type="video/mp4" />
      </video>
      <div className={`innerContainer flex  justify-center h-full w-[100vw] lg:w-[90vw]`}>
        <div className={`absolute top-0 left-0 h-[90vh] bg-blackOverlay border-[10px] border-t-[0px] border-black  w-full z-10 flex items-center p-[5vw] md:border-[20px] md:border-t-[0px] lg:border-[20px] lg:h-full`}>
          <h1 className={` ${style.videoSectionTitle} text-white font-ivyPresto text-[70px] leading-[80px] md:text-[110px] md:leading-[110px] xl:text-[200px] xl:leading-[200px] 2xl:w-[1330px]`}>TURNING IDEAS INTO CODE</h1>
        </div>
      </div>
    </>
  );
};




