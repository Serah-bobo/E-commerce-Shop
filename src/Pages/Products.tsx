// src/pages/Products.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../Components/CartSlice';
import { mockProducts } from '../Services/Mockdata';
import { Product } from '../Components/Types';

const Products: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents event from bubbling up to the Link component
    dispatch(addItem(product));
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {mockProducts.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} className="w-full h-70 object-cover" />
          </Link>
          <div className="p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="mt-2 text-gray-700">{product.description}</p>
            <button
              onClick={(e) => handleAddToCart(product, e)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
