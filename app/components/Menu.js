"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div onClick={handleOpen}>
        <Image
          src={"/burguer-menu.png"}
          alt="menu-logo"
          height={40}
          width={40}
        />
        <MenuList setOpen={setOpen} open={open} />
      </div>
    </>
  );
};

export default Menu;
