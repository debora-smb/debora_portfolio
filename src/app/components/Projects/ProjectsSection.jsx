
import TitleLoop from "./TitleLoop";
import Slider from "./Slider";

export default function ProjectsSection() {

  return (
    <section className={` bg-[#111] w-[100vw] h-[100dvh] lg:w-[85vw] flex items-center justify-center pt-[15vh] lg:py-[10vh] lg:h-[100vh]`} id="projects">
    <div className={`w-full h-full flex flex-col gap-8 md:gap-16 lg:gap-8 justify-center innerContainer`} >
    <TitleLoop />
      <Slider />
    </div>
    </section>

  );
}
