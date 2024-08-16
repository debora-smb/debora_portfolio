import { useEffect, useRef, useState } from "react";
import styles from "./Atoms.module.css";

export default function ScrollCircle() {
  const textRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      const chars = text.innerText.split("");
      text.innerHTML = chars
        .map((char, i) => `<span style="--i: ${i}">${char}</span>`)
        .join("");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const alturaTotal = document.documentElement.scrollHeight;
      const alturaVentana = window.innerHeight;
      const alturaScroll = window.scrollY;

      const umbral = alturaTotal - (90 * alturaVentana) / 100;

      if (alturaScroll + alturaVentana >= umbral) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.circle}
      style={{ visibility: isHidden ? 'hidden' : 'visible' }}
    >
      <div className={styles.text} ref={textRef}>
        <p>SCROLL -</p>
        <p>SCROLL -</p>
      </div>
    </div>
  );
}