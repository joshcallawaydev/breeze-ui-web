import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="text-xl font-bold">
      <a href="/">
        <Image
          src="/breeze_ui-min.png"
          width={160}
          height={100}
          alt="Picture of the author"
        />
      </a>
    </div>
  );
};

export default Logo;
