import Image from "next/image";

export default function FollowMe() {

    return (
        <div
                className={`font-avenir text-[17px] leading-[19px] mt-0  text-white flex flex-row items-center justify-start gap-8  md:gap-16 h-12 md:text-[24px] lg:text-[28px]  lg:leading-[50px] lg:mt-0`}
            >
        
            <div
                className={` flex flex-row items-center gap-4 h-12 lg:mt-0 `}
            >
                follow me
                <a
                    href="https://github.com/debora-smb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        width={25}
                        height={25}
                        src="/img/icon-github.svg"
                        alt="GitHub"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/debora-smenezes"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        width={25}
                        height={25}
                        src="/img/icon-linkedin.svg"
                        alt="LinkedIn"
                    />
                </a>
            </div>
            <a
                    href="/assets/Débora_Menezes_CV_EN_Fullstack.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    download="Debora_Menezes_CV.pdf"
                    className="inline-flex gap-2 md:gap-4 items-center"
                >curriculum vitae
                    <Image
                        width={22}
                        height={22}
                        src="/img/icon-curriculum_1.svg"
                        alt="Curriculum"
                    />
                </a>
      
        </div>

    );
}