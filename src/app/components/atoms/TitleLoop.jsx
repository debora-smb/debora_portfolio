import styles from "./TitleLoop.module.css";

export default function TitleLoop() {

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <div className={styles.itemtitle}>
        <span className={` ${styles.itemtxt} font-avenir`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
          <span className={` ${styles.itemtxt} font-ivyPresto`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
          <span className={` ${styles.itemtxt} font-avenir`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
          <span className={` ${styles.itemtxt} font-ivyPresto`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.itemtitle}>
          <span className={` ${styles.itemtxt} font-avenir`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
          <span className={` ${styles.itemtxt} font-ivyPresto`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
          <span className={` ${styles.itemtxt} font-avenir`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
          <span className={` ${styles.itemtxt} font-ivyPresto`}>PROYECTS</span>
          <span className={styles.itemspace}>-</span>
        </div>
      </div>
    </section>
  )
};