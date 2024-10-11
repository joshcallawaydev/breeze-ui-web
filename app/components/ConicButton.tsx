// components/Button.tsx
import React from "react";

const ConicButton: React.FC = () => {
  return (
    <>
      <button className="mx-auto flex w-full max-w-lg items-center justify-center">
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
          <div className="animate-breeze-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
          <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 p-2">
            <input
              type="text"
              className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent px-2 py-3 text-gray-500 placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              placeholder="subscribe to our newsletter"
            />
          </div>
        </div>
      </button>
    </>
  );
};

export default ConicButton;
