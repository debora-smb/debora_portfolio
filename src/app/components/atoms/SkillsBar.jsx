import styles from './Atoms.module.css';

export default function SkillsBar({ scrollPosition }) {
  return (
    <div className="w-full">
      <div className="w-full bg-[#5c636e]">
        <div className="h-[40px] w-full bg-[#445f8b] overflow-hidden">
          <div
            className={`${styles.barfill} h-full w-0 bg-[#ffc115]`}
            style={{ width: `${scrollPosition}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};