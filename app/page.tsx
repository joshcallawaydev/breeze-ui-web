import PulseButton from "./components/PulseButton";
// import ConicButton from "./components/ConicButton";
import Navbar from "./components/Navbar";
import HeroTextOne from "./components/HeroTextOne";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-full m-auto bg-[#0B0909]">
      <Navbar />
      <HeroTextOne />
      <div className="relative bg-[#FFF2EB] px-12 md:px-24 lg:px-44 pt-32 pb-12 mt-36 clip-path-custom flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-36">
        <p className="text-lg w-full md:w-2/3">
          <Image
            src="/breeze_ui_black-min.png"
            alt="BreezeUI Logo"
            width={90}
            height={50}
            className="inline-block mr-2"
          />
          is a dynamic library of animations built with Tailwind CSS. Create
          beautiful, fluid, and interactive web experiences with ease. Available
          via NPM or direct copy. Add stunning animations to your Components,
          Backgrounds and Text.
        </p>
        <div className="w-full md:w-1/3">
          <PulseButton title="Browse" />
        </div>
      </div>
    </div>
  );
}
