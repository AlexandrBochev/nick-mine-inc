import { HERO, ROUTING } from "@/constants/constants";
import Image from "next/image";
import { NickMineLogo } from "../ui/icons/IcLogo";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col justify-between text-white my-auto md:w-auto">
      <Image
        src={HERO.IMAGE}
        alt={HERO.TITLE}
        width={800}
        height={1020}
        priority
        className="w-full h-auto md:w-142 lg:w-200"
      />
      <Link
        href={ROUTING.HOME}
        className="absolute top-5 left-5 hover:scale-105 active:scale-100 transition-all duration-300"
      >
        <NickMineLogo />
      </Link>
      <h1 className="absolute left-5 bottom-5 text-base lg:text-md">{HERO.TITLE}</h1>
    </section>
  );
};

export { Hero };
