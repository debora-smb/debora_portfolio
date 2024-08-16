import styles from './Atoms.module.css';

export default function Header(){

  return (
    <header className={` bg-black h-[100vh] w-[10vw] flex items-center justify-center fixed right-0`}>
        <nav className={`text-white flex items-center font-avenir  justify-center flex-row gap-10 ${styles.nav}`}>
            <a href="/#about-me">ABOUT ME</a>
            <a href="/#projects">PROJECTS</a>
            <a href="/#skills">SKILLS</a>
            <a href="/#contact">CONTACT</a>
        </nav>
    </header>
  );
};
