export default function VideoSection() {
  return (
    <>
      <video autoPlay loop muted className="h-[100vh] w-[90vw] object-cover ">
        <source src="/video/hero_home_video.mp4" type="video/mp4" />
      </video>
      <div className={`innerContainer flex  justify-center h-full`}>
      <div className={`absolute top-0 h-full  z-10 flex items-center`}>
        <h1 className="text-white font-ivyPresto text-[200px] w-[1330px] leading-[200px]">TURNING IDEAS INTO CODE</h1>
      </div>
      </div>
    </>
  );
};




