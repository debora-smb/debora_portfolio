import styles from './HeaderDesktop.module.css';

export default function HeaderDesktop() {

  return (
    <header className={`hidden lg:flex bg-black h-[100vh] w-[15vw] items-center justify-center fixed right-0`}>
      <nav className={`text-white font-avenir w-full h-full flex flex-row justify-center items-center ${styles.nav}`}>
        <a href="/#about-me">AB<span className={styles.letter}></span>UT ME</a>
        <a href="/#projects">PR<span className={styles.letter}></span>JECTS</a>
        <a href="/#tools">T<span className={styles.letter}></span><span className={styles.letterFixed}></span>LS</a>
        <a href="/#contact">C<span className={styles.letter}></span>NTACT</a>
      </nav>
    </header>
  );
};
