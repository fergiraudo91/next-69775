import CreateForm from "@/app/components/admin/CreateForm";
import EditForm from "@/app/components/admin/EditForm";
import { db } from "@/app/config/firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { ref } from "firebase/storage";
import React from "react";


const getDocumentById = async (id) => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs[0].data();
  };

const CreateProductPage = async ({ params }) => {
  const { id } = params;

  const product = await getDocumentById(id);  

  return (
    <div>
      <EditForm loadedValues={product} />
    </div>
  );
};

export default CreateProductPage;
