import { useParams } from "react-router";
import { mockProducts } from "../Services/Mockdata";

import React from 'react'

export const ProductDetails:React.FC = () => {
    const { id } = useParams<{ id?: string }>(); // id is optional
  const productId = id ? parseInt(id) : undefined; // Convert to number if id is defined
  const product = productId !== undefined ? mockProducts.find((p) => p.id === productId) : undefined;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover mb-4" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 text-xl mb-4">{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}
export default ProductDetails