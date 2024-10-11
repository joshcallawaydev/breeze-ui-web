// components/Button.tsx
import React from "react";

const PulseButton: React.FC = () => {
  return (
    <>
      <button className="px-6 py-3 border-2 rounded-lg animate-breeze-border-fade">
        Animated Border Button
      </button>
    </>
  );
};

export default PulseButton;
