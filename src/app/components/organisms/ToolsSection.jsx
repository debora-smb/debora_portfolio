import { useEffect, useRef, useState } from "react";
import technologies from "../../json/technologies.json"
<<<<<<<< HEAD:src/app/components/organisms/ToolsSection.jsx
import SkillsBar from "../atoms/SkillsBar";
========
import SkillsBar from "./SkillsBar";
>>>>>>>> a94fd5e (refactor: :building_construction: organize files by component names folder's):src/app/components/Tools/ToolsSection.jsx


export default function ToolsSection() {
  const skillsRef = useRef(null);
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [scrollPosition3, setScrollPosition3] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollFraction = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

          setScrollPosition1(Math.max(scrollFraction * 110, 1));
          setScrollPosition2(Math.max(scrollFraction * 90, 1));
          setScrollPosition3(Math.max(scrollFraction * 60, 1));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={skillsRef} id="tools" className={`innerContainer bg-[#111] px-[5vw] flex flex-col h-[100vh] justify-center gap-4 lg:w-[85vw]`}>
      <div className="flex flex-row gap-8 items-center mb-2 lg:justify-between">
        <h2 className="font-avenir text-white text-[50px] leading-[50px] flex md:text-[120px] md:leading-[120px]">TOOLS.</h2>
        <SkillsBar scrollPosition={scrollPosition1} />
      </div>
      <section className="flex flex-col gap-8 w-full">
        <SkillsBar scrollPosition={scrollPosition2} />
        <SkillsBar scrollPosition={scrollPosition3} />
      </section>
      <section className={`flex font-avener text-[20px] leading-[20px] mt-8 gap-y-4 gap-x-6 items-center text-white justify-between flex-wrap md:mt-32 md:text-[30px] md:leading-[34px] md:gap-y-8 md:gap-x-12 lg:mt-8 lg:text-[24px] lg:leading-[28px] lg:gap-4  xl:gap-x-2 xl:mt-12 xl:gap-8 xl:text-[30px] xl:leading-[34px] 2xl:gap-8`}>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="hover:text-[#ffcd46]"
          >
            {tech}
          </span>
        ))}
      </section>
    </div>
  );
}