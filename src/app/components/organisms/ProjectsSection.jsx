
import TitleLoop from "../atoms/TitleLoop";
import Slider from "../molecules/Slider";

export default function ProjectsSection() {

  return (
    <section className={` bg-[#111] w-[100vw] lg:w-[85vw] flex items-center  py-[5vh] h-[100vh]`} id="projects">
    <div className={`w-full h-full flex flex-col gap-5 justify-center innerContainer`} >
    <TitleLoop />
      <Slider />
    </div>
    </section>

  );
}
