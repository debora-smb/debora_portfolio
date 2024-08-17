export default function VideoSection() {
  return (
    <>
      <video autoPlay loop muted className="h-[100vh] w-[90vw] object-cover object-center hidden lg:flex">
        <source src="/video/hero_home_video_desktop.mp4" type="video/mp4" />
      </video>
      <video autoPlay loop muted className="h-[90vh] w-[100vw] object-cover object-center  lg:hidden border-[10px] border-t-[0px] md:border-[20px] border-black " >
        <source src="/video/hero_home_video_mobile.mp4" type="video/mp4" />
      </video>
      <div className={`innerContainer flex  justify-center h-full w-[100vw] lg:w-[90vw]`}>
        <div className={`absolute top-0 left-0 h-[90vh] bg-blackOverlay border-[10px] border-t-[0px] md:border-[20px] border-black  lg:h-full w-full z-10 flex items-center p-[20px] p-[5vw]`}>
          <h1 className="text-white font-ivyPresto text-[70px] md:text-[110px] xl:text-[200px] 2xl:w-[1330px] leading-[80px] md:leading-[110px] xl:leading-[200px]">TURNING IDEAS INTO CODE</h1>
        </div>
      </div>
    </>
  );
};




