import { useEffect, useRef } from "react";
import styles from "./projectsSection.module.css"
import Image from "next/image";

export default function ProjectsSection() {

  const stickyRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const stickyParent = parentRef.current;

    const handleScroll = () => {
      if (sticky && stickyParent) {
        const scrollWidth = sticky.scrollWidth;
        const verticalScrollHeight =
          stickyParent.offsetHeight - sticky.offsetHeight;

        const scrolled = -stickyParent.getBoundingClientRect().top;

        if (scrolled >= 0 && scrolled <= verticalScrollHeight) {
          const scrollLeft = (scrollWidth / verticalScrollHeight) * scrolled;
          sticky.scrollLeft = scrollLeft;
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` bg-[#111] w-[90vw] pl-[5vw] relative`} id="projects">
       <div className={`${styles.stickyParent} h-[500vh] sticky top-0 flex flex-col gap-16`} ref={parentRef}>
        <div  className={`sticky top-0 flex pt-[5vh] flex-col gap-16`}>
      
        <div className={`${styles.carouselInner} font-ivyPresto text-white text-[30px]`}>
          <div className={styles.list}>
            <div className={styles.item}>
              <h2 className="font-avenir text-[80px]">PROJECTS</h2>
              <span>-</span>
              <h2 className="font-ivyPresto text-[60px]">PROJECTS</h2>
              <span>-</span>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <h2 className="font-avenir text-[80px]">PROJECTS</h2>
              <span>-</span>
              <h2 className="font-ivyPresto text-[60px]">PROJECTS</h2>
              <span>-</span>
            </div>
          </div>
        </div>

       
        <div className={`${styles.sticky}`} ref={stickyRef}>
          <div className={styles.horizontal}>
            <div className={styles.dim}>
              <div>
              <Image
              width={700} 
              height={410}
              alt="Laptop frame"
              src="/img/desktop_frame.webp"
              className={`relative z-2 `} />
              
               <aside>
                <h3 className="text-white">Pagina web</h3>
                <div>
                  
                </div>

              </aside>
              </div>
              
            </div>
            <div className={styles.dim}>
            <Image
              width={700} 
              height={410}
              alt="Laptop frame"
              src="/img/desktop_frame.webp" />
            </div>
            <div className={styles.dim}>
            <Image
              width={700} 
              height={410}
              alt="Laptop frame"
              src="/img/desktop_frame.webp" />
            </div>
            <div className={styles.dim}>
            <Image
              width={700} 
              height={410}
              alt="Laptop frame"
              src="/img/desktop_frame.webp" />
            </div>
            <div className={styles.dim}>
            <Image
              width={700} 
              height={410}
              alt="Laptop frame"
              src="/img/desktop_frame.webp" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

  );
}
