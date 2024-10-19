
<<<<<<<< HEAD:src/app/components/organisms/ProjectsSection.jsx
import TitleLoop from "../atoms/TitleLoop";
import Slider from "../molecules/Slider";
========
import TitleLoop from "./TitleLoop";
import Slider from "./Slider";
>>>>>>>> a94fd5e (refactor: :building_construction: organize files by component names folder's):src/app/components/Projects/ProjectsSection.jsx

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
