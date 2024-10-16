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
            style={{ width: "auto", height: "auto" }}
          />
          is a dynamic library of animations built with Tailwind CSS. Create
          beautiful, fluid, and interactive web experiences with ease. Available
          via NPM or direct copy. Add stunning animations to your Components,
          Backgrounds and Text.
        </p>
        <div className="w-full md:w-1/3">
          {/* <PulseButton title="Browse" /> */}
          {/* <button className="relative px-6 py-3 bg-[#222327] text-[#fff] border-2 border-[#222327] rounded-lg overflow-hidden hover:bg-gradient-to-r hover:from-[#FFA500] hover:to-[#FF4500] transition-colors duration-500 ease-out">
            Browse
          </button>
          <button className="relative px-6 py-3 text-[#fff] border-2 border-[#222327] rounded-lg bg-[#222327] overflow-hidden hover:bg-right hover:text-[#fff] transition-all duration-500 ease-out bg-gradient-to-r from-[#FFA500] to-[#222327] bg-[length:200%_100%]">
            Browse
          </button> */}
          <button className="relative px-6 py-3 uppercase text-white border-2 border-[#222327] rounded-lg bg-[#222327] overflow-hidden hover:text-[#222327] transition-all duration-500 ease-out group">
            <span className="relative z-10">browse</span>
            <span className="absolute inset-0 bg-[#ff914d] transition-transform transform translate-x-[-100%] group-hover:translate-x-0 duration-500 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
