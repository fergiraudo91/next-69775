'use client';
import React from "react";
import { useCartContext } from "../context/CartContext";

const Carrito = () => {
  const { cart } = useCartContext();
  return (
    <>
      <h1>Carrito</h1>
      {cart.map((item) => (
        <h2>
          {item.title} - ${item.price}
        </h2>
      ))}
    </>
  );
};

export default Carrito;
