import Image from "next/image";

export default function FollowMe() {

    return (
        <div
                className={`font-avenir text-[17px] leading-[19px] mt-0  text-white flex flex-row items-center justify-start gap-8  md:gap-16  lg:gap-8 xl:gap-16 h-12 md:text-[24px] lg:text-[24px]  lg:leading-[50px] xl:text-[28px]  xl:leading-[50px] lg:mt-0`}
            >
        
            <div
                className={` flex flex-row items-center gap-4  h-12 lg:mt-0 `}
            >
                follow me
                <a
                    href="https://github.com/debora-smb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        width={30}
                        height={30}
                        src="/assets/icons/icon-github.svg"
                        alt="GitHub"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/debora-smenezes"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        width={30}
                        height={30}
                        src="/assets/icons/icon-linkedin.svg"
                        alt="LinkedIn"
                    />
                </a>
            </div>
            <a
                    href="/pdf/Débora_Menezes_CV_EN_Fullstack.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    download="Debora_Menezes_CV.pdf"
                    className="inline-flex gap-2 md:gap-4 items-center"
                >curriculum vitae
                    <Image
                        width={28}
                        height={28}
                        src="/assets/icons/icon-curriculum_1.svg"
                        alt="Curriculum"
                    />
                </a>
      
        </div>

    );
}