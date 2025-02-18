import cartIcon from '../media/icons/cart.svg';

export default function CartIcon() {
  return (
    <div className="relative">
      <img src={cartIcon} alt="Cart" className="w-10 h-10" />
      <span className="absolute top-0 right-0 bg-blue-1 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        1
      </span>
    </div>
  );
}
