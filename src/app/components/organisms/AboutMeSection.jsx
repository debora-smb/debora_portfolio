import Image from "next/image";
import styles from "./Organisms.module.css";
import InfoAboutMe from "../molecules/InfoAboutMe";
import FollowMe from "../molecules/FollowMe";

export default function AboutMeSection() {

    return (
        <div className="bg-black w-[100vw] h-[100vh]   border-[10px] border-t-[0px]  border-black  md:border-[0px] lg:pr-0 lg:w-[90vw] lg:border-t-[0px] lg:border-[20px]" id="about-me">
            <div className={`innerContainer gap-4 h-[100vh] justify-center md:gap-12 ${styles.aboutContainer}`}>
                <div className="text-white text-[26px] leading-[30px] flex flex-col gap-4 justify-center relative z-2 lg:gap-20 ">
                    <InfoAboutMe />
                    <div className="hidden lg:flex">
                        <FollowMe />
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
                <div className="flex lg:hidden">
                    <FollowMe />
                </div>
            </div>
        </div>
    );
}