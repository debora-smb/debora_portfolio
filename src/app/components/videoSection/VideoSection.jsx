export default function VideoSection() {
  return (
    <>
      <video autoPlay loop muted className="h-[100vh] w-[90vw] object-cover">
        <source src="/video/hero_home_video.mp4" type="video/mp4" />
      </video>
      <h1 className="absolute z-10 top-0 text-white text-[220px] w-[1330px] pl-28 pt-12 leading-[200px]">TURNING IDEAS INTO CODE</h1>
    </>
  );
};


