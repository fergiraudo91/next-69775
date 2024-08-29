import ProductList from '@/app/components/ProductList';
import React from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/app/config/firebase';

export const generateStaticsParams = () => {
  return [
    {category: 'gaming'},
    {category: 'electronics'}
  ]
}


const getProducts = async (category) => {
    try {
      const productRef = collection(db, "products");
      let q;
      if(category === 'all'){
        q = query(productRef);
      }
      else{
        q = query(productRef, where('category', '==', category));
      }
      const querySnapshots = await getDocs(q);
      const docs = querySnapshots.docs.map(doc => doc.data());
      return docs;
    } catch (error) {
      
    }
}

const Products = async ({params}) => {
    const { category } = params;
    const products = await getProducts(category);
  return (
    <>
        <h1>Esta página es por el tipo: {category}</h1>
        <ProductList category={category} products={products} />
    </>
  )
}

export default Products