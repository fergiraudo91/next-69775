"use client";
import Button from "@/app/components/Button";
import { db } from "@/app/config/firebase";
import { useCartContext } from "@/app/context/CartContext";
import mockData from "@/data/mockData";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const { addToCart } = useCartContext();

  const getProduct = async (id) => {
    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, where("id", "==", parseInt(id)));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const product = await getProduct(id);
      setSingleProduct(product);
      setLoading(false);
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{singleProduct?.title}</div>
            <p className="text-gray-700 text-base">
              {singleProduct?.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {singleProduct?.category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {singleProduct?.price}
            </span>
            <Button
              children={"Agregar al carrito"}
              className="p-3"
              onClick={() => addToCart(singleProduct)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
