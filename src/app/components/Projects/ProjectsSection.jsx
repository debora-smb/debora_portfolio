
<<<<<<< HEAD
<<<<<<<< HEAD:src/app/components/organisms/ProjectsSection.jsx
import TitleLoop from "../atoms/TitleLoop";
import Slider from "../molecules/Slider";
========
import TitleLoop from "./TitleLoop";
import Slider from "./Slider";
>>>>>>>> a94fd5e (refactor: :building_construction: organize files by component names folder's):src/app/components/Projects/ProjectsSection.jsx
=======
import TitleLoop from "./TitleLoop";
import Slider from "./Slider";
>>>>>>> 771fb8b6f2d617d91b6578e647550328f1e020fd

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
