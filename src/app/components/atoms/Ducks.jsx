import Image from "next/image";

export default function DucksAnimation() {

    return (
        <div className="hidden flex-row items-center  gap-10 justify-end md:flex">
            <Image
                height={100}
                width={65}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut1  w-[70px] xl:w-fit"
            />
            <Image
                height={110}
                width={65}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut2 w-[70px] xl:w-fit"
            />
            <Image
                height={110}
                width={65}
                src="/img/rubber-duck.webp"
                alt="3d Rubber duck"
                className="duck opacity-50 animate-fadeInOut3  w-[70px] xl:w-fit"
            />
        </div>
    )
};