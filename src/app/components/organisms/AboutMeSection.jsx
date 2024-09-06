import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./AboutMeSection.module.css";
import Typewriter from 'typewriter-effect';
import MyComponent from "../molecules/InfoAboutMe";

export default function AboutMeSection() {
    const controls = useAnimation();
    const [typewriterVisible, setTypewriterVisible] = useState(false);
    const [hasAppeared, setHasAppeared] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
    threshold: window.innerWidth < 768 ? 0.2 : 0.8,
    });

    useEffect(() => {
        if (inView && !hasAppeared) {
            controls.start({ opacity: 1, transition: { duration: 2, ease: "easeInOut" } });
            setTypewriterVisible(true);
            setHasAppeared(true);
        }
    }, [inView, controls, hasAppeared]);

    return (
        <div className="bg-black w-[100vw] h-[100vh] pr-[5vw] lg:pr-0 lg:w-[90vw] border-[10px] border-t-[0px] md:border-[0px] lg:border-t-[0px] lg:border-[20px] border-black " id="about-me">
            <div className={`innerContainerNoPadding gap-4 md:gap-12 h-[100vh] ${style.aboutContainer}`}>
                <div className="text-white text-[26px] leading-[30px] flex flex-col gap-4 lg:gap-20 justify-center relative z-2">
                    <MyComponent />
                    <div
                        className={`font-ivyPresto text-[30px] mt-14 lg:mt-0 leading-[50px] text-white flex-row items-center gap-8 h-12 hidden lg:flex`}
                    >
                        follow me
                        <a
                            href="https://github.com/debora-smb"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={25}
                                height={25}
                                src="/img/icon-github.svg"
                                alt="GitHub"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/debora-smenezes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                width={25}
                                height={25}
                                src="/img/icon-linkedin.svg"
                                alt="LinkedIn"
                            />
                        </a>
                    </div>
                </div>
                <aside className="bg-yellow h-fit">
                    <Image
                        height={500}
                        width={750}
                        src="/img/DSC_05601.webp"
                        alt="Débora Menezes"
                        className="h-[300px] md:h-[500px] lg:h-[90vh] w-full object-cover"
                    />
                </aside>
                <div
                    className={`font-ivyPresto text-[14px] md:text-[24px] leading-[12px] text-white flex lg:hidden flex-row items-center gap-8`}
                >
                    follow me
                    <a
                        href="https://github.com/debora-smb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            width={25}
                            height={25}
                            src="/img/icon-github.svg"
                            alt="GitHub"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/debora-smenezes"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            width={25}
                            height={25}
                            src="/img/icon-linkedin.svg"
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}