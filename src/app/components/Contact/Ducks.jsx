import Image from "next/image";

export default function DucksAnimation() {

    return (
        <div className="hidden flex-row items-center  gap-10 justify-end md:flex">
            <Image
                height={100}
                width={80}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut1 lg:w-[70px] 2xl:w-fit"
            />
            <Image
                height={110}
                width={80}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut2 lg:w-[70px] 2xl:w-fit"
            />
            <Image
                height={110}
                width={80}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut3 lg:w-[70px] 2xl:w-fit"
            />
        </div>
    )
};