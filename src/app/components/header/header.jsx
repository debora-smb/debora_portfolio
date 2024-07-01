'use client'
import Image from 'next/image';
import styles from './header.module.css';

export default function Header({lightOn, switchLightOn}){

  return (
    <header className={` ${lightOn ? 'bg-[#fbf8dd]' : 'bg-black'} h-[100vh] w-[10vw] flex items-center justify-center fixed right-0`}>
        <nav className={`${lightOn ? 'text-black' : 'text-white'} flex items-center justify-center flex-row gap-10 ${styles.nav}`}>
            <a href="/#about-me">ABOUT ME</a>
            <a href="/#projects">PROJECTS</a>
            <a href="/#skills">SKILLS</a>
            <a href="/#contact">CONTACT</a>
            <a className='cursor-pointer' onClick={switchLightOn}>
                <Image
                    width={20}
                    height={25}
                    alt="White light bulb icon"
                    src="/img/light-icon.svg"
                    className={` ${lightOn ? 'hidden' : 'inline'}`}
                />
                <Image
                    width={20}
                    height={25}
                    alt="Black light bulb icon"
                    src="/img/light-icon-black.svg"
                    className={` ${lightOn ? 'inline' : 'hidden'}`}
                />
            </a>
        </nav>
    </header>
  );
};
