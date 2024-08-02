import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <header
            className="bg-hero   bg-center bg-cover bg-no-repeat px-4 flex justify-between lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
           <Link href={"/"}>
               <Image
                   src="/logo.png"
                   alt="logo"
                   width={200}
                   height={96}
                   className="object-contain"
               />
           </Link>
            <h1 className="sm:text-2xl text-2xl text-white lg:max-w-lg font-bold leading-[120%]">
                Explore The <span className="red-gradient">Various Realms of </span>Anime Magic
            </h1>
            <div className=" relative">
                <Image src="/anime.png" width={100} height={100} alt="anime" className="object-contain mr-2"/>
            </div>
        </header>
    );
}

export default Hero;
