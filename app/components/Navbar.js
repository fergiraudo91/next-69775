import Image from "next/image";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-600">
      <div className="container m-auto py-4 flex justify-between items-center">
        <Image src={'/logo.png'} alt="coderhouse logo" width={200} height={50} />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
