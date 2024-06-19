import styles from './GrainyBg.module.css';

export default function GrainyBg() {

  return (
    <div className={`${styles.background} w-full h-[100vh] border-[12px] border-[#313131]`}>
        <h2 className="font-hannaTTF text-[100px] text-purple">
            Turning ideas into code.</h2>
    </div>

  )
}
