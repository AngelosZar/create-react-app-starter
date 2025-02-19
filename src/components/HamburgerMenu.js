import { use, useState } from 'react';
import { Link } from 'react-router-dom';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div className="lg:hidden">
    <div className="">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-12 h-12 space-y-1.5"
      >
        <span
          className={`block w-6 h-0.5 bg-blue-2 transition-transform duration-300 ease-in-out 
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-blue-2 transition-transform duration-300 ease-in-out 
            ${isOpen ? 'opacity-0 translate-y-2' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-blue-2 transition-transform duration-300 ease-in-out 
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        ></span>
      </button>
    </div>
    // <ul className=" space-x-4 justify-center items-center">
    //   <Link to="/product/1" className="hover:text-blue-800">
    //     Individual product page
    //   </Link>
    //   <Link to="/checkout-success" className="hover:text-blue-800">
    //     Checkout success page
    //   </Link>
    //   <Link to="/contact" className="hover:text-blue-800 transition-colors">
    //     Contact page
    //   </Link>
    // </ul>
  );
}

export function DesktopMenu() {
  return (
    <ul className=" space-x-4 justify-center items-center">
      <Link to="/product/1" className="hover:text-blue-800">
        Individual product page
      </Link>
      <Link to="/checkout-success" className="hover:text-blue-800">
        Checkout success page
      </Link>
      <Link to="/contact" className="hover:text-blue-800 transition-colors">
        Contact page
      </Link>
    </ul>
  );
}
