import styles from './Atoms.module.css';

export default function Burger({ open, setOpen }){
  return (
    <button
      className={`${styles.styledBurger}`} 
      onClick={() => setOpen(!open)}
      style={{
        '--burger-transform-first-child': open ? 'rotate(45deg)' : 'rotate(0)',
        '--burger-opacity-second-child': open ? '0' : '1',
        '--burger-transform-second-child': open ? 'translateX(20px)' : 'translateX(0)',
        '--burger-transform-third-child': open ? 'rotate(-45deg)' : 'rotate(0)',
      }}
    >
      <div />
      <div />
      <div />
    </button>
  );
};
