import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="text-xl font-bold">
      <a href="/">
        <Image
          src="/breeze_ui-min.png"
          width={120}
          height={70}
          style={{width: "auto", height: "auto"}}
          alt="Picture of the breeze ui logo"
        />
      </a>
    </div>
  );
};

export default Logo;
