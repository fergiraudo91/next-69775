import Link from "next/link";
import React from "react";

const MenuList = ({ open, setOpen }) => {
  console.log({ open, setOpen });
  return (
    <div
      className={`${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all fixed inset-0 bg-black/50 flex justify-end`}
    >
      <aside
        className={`${
          !open ? "translate-x-48" : ""
        } transition-all w-48 bg-gray-500`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="text-white text-right p-4 cursor-pointer"
        >
          X
        </div>
        <nav className="flex mt-4 flex-col gap-3 px-3">
          <Link
            href="/nosotros"
            className="text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Nosotros
          </Link>
          <Link
            href="/tienda"
            className="text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Tienda
          </Link>
          <Link
            href="/productos/all"
            className="text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Productos
          </Link>
          <Link
            href="/carrito"
            className="text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Carrito
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;
