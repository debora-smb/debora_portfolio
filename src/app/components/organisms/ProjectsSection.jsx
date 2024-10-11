import TitleLoop from "../atoms/TitleLoop";
import Slider from "../molecules/Slider";

export default function ProjectsSection() {

  return (
    <div className={` bg-[#111] w-[100vw] lg:w-[90vw] flex flex-col gap-2 justify-center h-[100vh] innerContainer`} id="projects">
      <TitleLoop />
      <Slider />
    </div>
  );
}
