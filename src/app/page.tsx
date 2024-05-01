"use client";
import useFetchProfile from "@/functions/hooks/useFetchProfile";
import * as _ from "lodash";
import HeroSection from "@/components/Layout/HeroSection";
import Link from "next/link";

export default function Home() {
  const { profile } = useFetchProfile();
  return (
    <section>
      <HeroSection />

      <div className="flex flex-col w-full min-h-screen h-full items-center mt-24">
        <div className="text-lg">Welcome! these are my</div>
        <h1 className="w-fit font-semibold text-5xl">PROJECTS</h1>
        <div className="grid grid-cols-2 gap-x-8 mt-16">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="w-[50vh] lowercase h-[25vh] box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
            >
              Visit
            </Link>
            <div className="w-[50vh] h-[25vh] box bg-[length:50vh_25vh] bg-no-repeat bg-[url('./images/portfolio.png')] bg-white"></div>
            <h1 className="mt-2">My Portfolio</h1>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="https://leweprojects.github.io/MGHsite/#/"
              className="w-[50vh] lowercase h-[25vh] box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
            >
              Visit
            </Link>
            <div className="w-[50vh] h-[25vh] box bg-[length:50vh_25vh] bg-no-repeat bg-[url('./images/MGHsite.png')] bg-white"></div>
            <h1 className="mt-2">MGH appointment website</h1>
          </div>
        </div>
        <div className="text-lg">These are my</div>
        <h1 className="w-fit font-semibold text-5xl">TECH-STACKS</h1>
      </div>
    </section>
  );
}
