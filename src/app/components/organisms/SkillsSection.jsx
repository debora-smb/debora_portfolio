import { useEffect, useRef, useState } from "react";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
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
          setScrollPosition2(Math.max(scrollFraction * 70, 1));
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
    <div ref={skillsRef} id="skills" className={`${styles.barscontainer} bg-[#111] px-[5vw] flex flex-row justify-center pb-[20vh]`}>
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-avenir text-white text-[120px] leading-[200px] w-10 flex">SKILLS.</h2>
        <div className={`${styles.barwrapper1}  h-[40px] mt-14`}>
          <div className={styles.bar}>
            <div
              className={styles.barfill}
              style={{ width: `${scrollPosition1}%` }}
            ></div>
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-8">
        <div className="flex font-ivyPresto gap-12 items-center text-white justify-between">
          <span>JAVASCRIPT</span>
          <div className={styles.barwrapper}>
            <div className={styles.bar}>
              <div
                className={styles.barfill}
                style={{ width: `${scrollPosition2}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex font-ivyPresto gap-12 items-center text-white justify-between">
          <span>HTML5</span>
          <div className={styles.barwrapper}>
            <div className={styles.bar}>
              <div
                className={styles.barfill}
                style={{ width: `${scrollPosition3}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex font-ivyPresto gap-12 items-center text-white justify-between">
          <span>CSS3</span>
          <div className={styles.barwrapper}>
            <div className={styles.bar}>
              <div
                className={styles.barfill}
                style={{ width: `${scrollPosition3}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex font-ivyPresto gap-12 items-center text-white justify-between">
          <span>REACT</span>
          <div className={styles.barwrapper}>
            <div className={styles.bar}>
              <div
                className={styles.barfill}
                style={{ width: `${scrollPosition3}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex font-ivyPresto gap-12 items-center text-white justify-between">
          <span>PHP</span>
          <div className={styles.barwrapper}>
            <div className={styles.bar}>
              <div
                className={styles.barfill}
                style={{ width: `${scrollPosition3}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}