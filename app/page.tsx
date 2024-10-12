// import PulseButton from "./components/PulseButton";
// import ConicButton from "./components/ConicButton";
import Navbar from "./components/Navbar";
import HeroTextOne from "./components/HeroTextOne";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 m-auto bg-[#222327]">
      <Navbar />
      <HeroTextOne />
      {/* <div className="flex items-center h-20 w-60 bg-gradient-to-r from-[#45565E] via-[#5E747F] to-[#728B97] animate-breeze-ocean p-6 rounded-lg">Background colour chnage</div> */}
      {/* <PulseButton />
      <ConicButton /> */}
    </div>
  );
}
