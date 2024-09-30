import Image from "next/image";

export default function DucksAnimation() {

    return (
        <div className="flex flex-row items-center justify-between gap-10 md:justify-end">
            <Image
                height={100}
                width={65}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut1  w-[50px] md:w-fit"
            />
            <Image
                height={110}
                width={65}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut2 w-[50px] md:w-fit"
            />
            <Image
                height={110}
                width={65}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut3  w-[50px] md:w-fit"
            />
        </div>
    )
};