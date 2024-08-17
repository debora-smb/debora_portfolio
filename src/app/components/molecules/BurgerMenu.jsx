import Image from "next/image";
import styles from "./Molecules.module.css";

export default function Menu({ open }) {
    return (
        <nav className={`${styles.styledMenu} font-avenir`} style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}>
            <a href="/#about-me">ABOUT ME</a>
            <a href="/#projects">PROJECTS</a>
            <a href="/#skills">SKILLS</a>
            <a href="/#contact">CONTACT</a>
            <div className={` mt-14 font-ivyPresto text-white flex flex-row items-center justify-center gap-8 h-12`}>
                follow me
                <a href="#">
                    <Image
                    width={25}
                    height={25}
                    src='/img/icon-github.svg'
                    />
                </a>
                <a href="#">
                    <Image
                    width={25}
                    height={25}
                    src='/img/icon-linkedin.svg'
                    />
                </a>
            </div>
        </nav>
    );
};