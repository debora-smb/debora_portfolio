import Image from "next/image";
import styles from "./Organisms.module.css";
import InfoAboutMe from "../components/InfoAboutMe";
import FollowMe from "../components/FollowMe";

export default function AboutMeSection() {

    return (
        <div className="bg-black w-[100vw] h-[100vh] lg:pr-0 lg:w-[85vw]" id="about-me">
            <div className={`innerContainer w-full gap-4 h-[100vh] flex flex-col justify-center items-center md:gap-12 lg:flex-row`}>
                <div className="text-white text-[26px] w-full lg:w-[54%] leading-[30px] flex flex-col gap-4 lg:gap-20 ">
                    <InfoAboutMe />
                    <div className="hidden lg:flex">
                        <FollowMe />
                    </div>
                </div>
                <aside className="bg-[#9ca6af] h-fit w-full lg:w-[45%]">
                    <Image
                        height={500}
                        width={750}
                        src="/img/DSC_05601.webp"
                        alt="Débora Menezes"
                        className="h-[300px] w-full object-cover md:h-[500px] lg:h-[40vh] xl:h-[80vh]"
                    />
                </aside>
                <div className="flex w-full lg:hidden">
                    <FollowMe />
                </div>
            </div>
        </div>
    );
}