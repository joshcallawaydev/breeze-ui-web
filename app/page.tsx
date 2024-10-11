// import PulseButton from "./components/PulseButton";
// import ConicButton from "./components/ConicButton";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 m-auto bg-[#3F4250]">
      <Navbar />
      <div className="h-auto flex flex-col gap-5 w-3/5 mx-auto mt-48 text-[#fff]">
        <h3 className="text-[6rem] font-black leading-none tracking-wider">Unleash <span className="text-transparent bg-clip-text bg-gradient-text bg-[length:200%_200%] animate-gradient-move">Creativity.</span></h3>
        <h5 className="text-[1.19rem] font-black leading-none tracking-widest">Seamless Animations. Modern Web Experiences.</h5>
      </div>
      {/* <div className="flex items-center h-20 w-60 bg-gradient-to-r from-[#45565E] via-[#5E747F] to-[#728B97] animate-breeze-ocean p-6 rounded-lg">Background colour chnage</div> */}
      {/* <PulseButton />
      <ConicButton /> */}
    </div>
  );
}
