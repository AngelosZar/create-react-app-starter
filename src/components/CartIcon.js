import cartIcon from '../media/icons/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function CartIcon() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="relative">
      <img src={cartIcon} alt="Cart" className="w-10 h-10" />
      <span className="absolute top-0 right-0 bg-blue-1 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        {cartItems}
      </span>
    </div>
  );
}
