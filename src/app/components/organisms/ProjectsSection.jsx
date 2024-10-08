import { useEffect, useRef } from "react";
import styles from "./Organisms.module.css"
import Image from "next/image";
import TitleLoop from "../atoms/TitleLoop";

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
    <div className={` bg-[#111] w-[90vw] relative`} id="projects">
      <div className={`h-[500vh] sticky top-0`} ref={parentRef}>
        <div className={`sticky top-0`}>
          <div className={`flex flex-col gap-2 justify-center h-[100vh] innerContainer`}>
            <TitleLoop />
            <div className={`sticky max-h-[80vh] overflow-hidden flex items-center`} ref={stickyRef}>
              <div className="flex gap-[200px] items-center">
                <div className={`${styles.dim} bg-white`}>
                  <div>
                    <video autoPlay loop muted className="h-[55vh]">
                      <source src="/video/toquen_el_dom.mp4" type="video/mp4" />
                    </video>
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
    </div>

  );
}
