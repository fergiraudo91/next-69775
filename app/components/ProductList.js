import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, category }) => {
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }
  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductList;
