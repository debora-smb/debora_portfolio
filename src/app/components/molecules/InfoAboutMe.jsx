import { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function InfoAboutMe(){
    const [showTypewriter, setShowTypewriter] = useState(false);
    const [showTitle, setShowTitle] = useState(false); 
    const typewriterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShowTypewriter(true);
                        observer.disconnect(); 
                    }
                });
            },
            {
                threshold: 0.5, 
            }
        );

        if (typewriterRef.current) {
            observer.observe(typewriterRef.current);
        }

        return () => {
            if (typewriterRef.current) {
                observer.unobserve(typewriterRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className=" w-[265px] text-[18px] h-14  mt-20  md:h-[60px] md:w-full md:mt-32  md:text-[24px] lg:mt-0 lg:w-[370px] xl:h-fit xl:w-full " ref={typewriterRef}>
                {showTypewriter && (
                    <Typewriter
                        options={{
                            loop: false,
                            delay: 75,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello, I am Débora Menezes, a Barcelona-based')
                                .callFunction(() => {
                                    setShowTitle(true); 
                                })
                                .start();
                        }}
                    />
                )}
            </div>

            <div className="h-[120px] md:h-[200px] md:flex md:flex-col justify-center items-center w-full gap-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={showTitle ? "animate" : "initial"} 
                    variants={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } }
                    }}
                >
                    {showTitle && (
                        <span
                            className={`text-[50px] leading-[50px] ml-6 relative z-20 md:-mt-34 md:ml-24 font-avenir md:text-[90px] md:leading-[100px] lg:text-[100px] text-grey`}
                        >
                            FRONTEND{" "}
                            <span className="md:text-[110px] md:ml-36 text-[50px] leading-[50px] font-ivyPresto ml-16">
                                DEVELOPER
                            </span>
                        </span>
                    )}
                </motion.div>
            </div>
        </>
    );
};