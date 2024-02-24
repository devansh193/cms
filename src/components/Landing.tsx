"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Medal } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "because 10x",
  },
  {
    text: "ain't",
  },
  {
    text: "enough!",
  },
];

const Landing = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <div className="py-40 mx-auto text-center flex flex-col items-center max-w-3xl m-15">
        <div className="mb-4 text-sm md:text-md font-sans font-semibold flex items-center border shadow-md py-2.5 px-4 md:px-5 bg-blue-50 text-blue-700 rounded-full uppercase">
          <Medal className="h-5 w-5 mr-2" />
          #1 learning platform
        </div>
        <h1 className="text-blue-600 font-bold text-6xl tracking-tight sm:text-6xl">
          100x Devs
        </h1>
        <TypewriterEffectSmooth words={words} className="py-1 " />
        <p className="mt-6 text-gray-500 max-w-prose font-semibold text-mutates-foreground text-2xl">
          A Beginner-Friendly Platform for Mastering Programming Skills and
          Unleashing Your Inner Developer Genius! Start Learning Today and
          Transform into a Tech Pro Tomorrow!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            className="mt-6 rounded-full hover:shadow-sm"
            size={"lg"}
            asChild
          >
            <Link href="/courses">
              <p className="text-white">Explore courses</p>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
