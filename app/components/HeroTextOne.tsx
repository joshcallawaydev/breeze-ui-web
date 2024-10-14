import React from "react";

const HeroTextOne: React.FC = () => {
  return (
    <div className="h-5/6 flex flex-col gap-5 w-4/5 sm:w-4/5 md:w-4/5 mx-auto mt-16 sm:mt-36 md:mt-48 text-[#fff] text-center">
      <h3 className="text-[3.1rem] sm:text-[5.8rem] md:text-[6.5rem] lg:text-[9rem] font-black leading-none tracking-wider">
        Unleash{" "}
        <span className="text-transparent bg-clip-text bg-gradient-text bg-[length:200%_200%] animate-gradient-move">
          Creativity.
        </span>
      </h3>
      <h5 className="text-[1rem] sm:text-[1.13rem] md:text-[1.35rem] lg:text-[1.81rem] font-black leading-normal tracking-widest">
        Seamless animations, modern web experiences.
      </h5>
    </div>
  );
};

export default HeroTextOne;