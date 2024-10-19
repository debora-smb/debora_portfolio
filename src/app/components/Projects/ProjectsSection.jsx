
import TitleLoop from "./TitleLoop";
import Slider from "./Slider";

export default function ProjectsSection() {

  return (
    <section className={` bg-[#111] w-[100vw] h-[70vh] lg:w-[85vw] flex items-center  py-[10vh] lg:h-[100vh]`} id="projects">
    <div className={`w-full h-full flex flex-col md:gap-28 lg:gap-8 justify-center innerContainer`} >
    <TitleLoop />
      <Slider />
    </div>
    </section>

  );
}
