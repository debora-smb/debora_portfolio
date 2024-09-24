import Image from "next/image";
import styles from "./Organisms.module.css";
import InfoAboutMe from "../molecules/InfoAboutMe";

export default function AboutMeSection() {

    return (
        <div className="bg-black w-[100vw] h-[100vh] pr-[5vw]  border-[10px] border-t-[0px]  border-black  md:border-[0px] lg:pr-0 lg:w-[90vw] lg:border-t-[0px] lg:border-[20px]" id="about-me">
            <div className={`innerContainerNoPadding gap-4 h-[100vh] justify-center md:gap-12 ${styles.aboutContainer}`}>
                <div className="text-white text-[26px] leading-[30px] flex flex-col gap-4 justify-center relative z-2 lg:gap-20 ">
                    <InfoAboutMe />
                    <div
                        className={`font-ivyPresto text-[30px] mt-14 leading-[50px] text-white flex-row items-center gap-8 h-12 hidden lg:mt-0 lg:flex`}
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
                        className="h-[300px] w-full object-cover md:h-[500px] lg:h-[90vh]"
                    />
                </aside>
                <div
                    className={`font-ivyPresto text-[14px]  leading-[12px] text-white flex flex-row items-center gap-8 md:text-[24px] lg:hidden`}
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