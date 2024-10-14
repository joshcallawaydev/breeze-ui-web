import React from "react";

interface PulseButtonProps {
  title: string;
}

// 0B0909

const PulseButton: React.FC<PulseButtonProps> = ({ title }) => {
  return (
    <>
      <button className="px-6 py-3 border-4 rounded-lg border-[#ff914d] bg-[#ff914d] hover:animate-breeze-border-fade text-[#fff] font-bold uppercase">
        {title}
      </button>
    </>
  );
};

export default PulseButton;
