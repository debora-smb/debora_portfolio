import { useEffect, useState } from 'react';
import styles from './Atoms.module.css';

export default function Loader() {
    const [percentage, setPercentage] = useState(0);


    useEffect(() => {
        let currentPercentage = 0;
        const interval = setInterval(() => {
            currentPercentage += 1;
            setPercentage(currentPercentage);
            if (currentPercentage === 100) {
                clearInterval(interval);
            }
        }, 8);

        return () => clearInterval(interval);
    }, []);

    return (

        <div className='flex flex-col justify-center items-center h-[100vh] bg-black text-white'>
            <div className={`z-2 h-full flex items-center absolute text-[30px] font-bold top-0 font-ivyPresto`}>
                <h1 className={`${styles.portfolioName} tracking-wide`}>Débora Menezes 
                    <span className="font-avenir tracking-normal"> Portfolio</span>
                </h1>
            </div>
            <div className="text-greyText text-9xl">{percentage}%</div>
        </div>

    );
};
