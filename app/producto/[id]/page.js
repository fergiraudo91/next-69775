import Button from "@/app/components/Button";
import { db } from "@/app/config/firebase";
import mockData from "@/data/mockData";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";

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

const ProductDetail = async ({params}) => {
  const { id } = params;

  const singleProduct = getProduct(id);

  return (
    <>
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
              className="p-3"
              onClick={() => addToCart(singleProduct)}
            >Agregar al carrito</Button>
          </div>
        </div>
    </>
  );
};

export default ProductDetail;
