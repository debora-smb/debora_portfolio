import Image from "next/image";
import styles from "./Molecules.module.css";


export default function Menu({ open, setOpen }) {
    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <nav className={`${styles.styledMenu} font-avenir`} style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}>
            <a href="/#about-me" onClick={handleLinkClick}>ABOUT ME</a>
            <a href="/#projects" onClick={handleLinkClick}>PROJECTS</a>
            <a href="/#tools" onClick={handleLinkClick}>TOOLS</a>
            <a href="/#contact" onClick={handleLinkClick}>CONTACT</a>
            <div className={` mt-14 font-avenir text-2xl md:text-[28px] text-white flex flex-row items-center justify-center gap-8 h-12`}>
                follow me
                <a href="https://github.com/debora-smb" target="_blank" rel="noopener noreferrer">
                    <Image
                        width={25}
                        height={25}
                        src='/img/icon-github.svg'
                        alt="GitHub"
                    />
                </a>
                <a href="https://www.linkedin.com/in/debora-smenezes" target="_blank" rel="noopener noreferrer">
                    <Image
                        width={25}
                        height={25}
                        src='/img/icon-linkedin.svg'
                        alt="LinkedIn"
                    />
                </a>
            </div>
        </nav>
    );
};