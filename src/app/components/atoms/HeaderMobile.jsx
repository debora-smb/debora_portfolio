import styles from './Atoms.module.css';

export default function HeaderMobile(){

  return (
    <header className={`lg:hidden bg-black h-[10vh] w-[100vw] flex items-center justify-center fixed z-[444]`}>
        <nav className={`text-white flex items-center font-avenir justify-center flex-row gap-10 ${styles.nav}`}>
            <a href="/#about-me">ABOUT ME</a>
        </nav>
    </header>
  );
};
