// src/components/Cart.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from '../Components/Store';
import { removeItem,clearCart } from '../Components/CartSlice';

const Cart: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border-b py-2 flex justify-between items-center">
              <div>
                <p className="font-bold">{item.name}</p>
                <p>{item.quantity} x {item.price}</p>
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button onClick={handleClearCart} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
