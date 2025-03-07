import { useState } from 'react';
import { Link } from 'react-router-dom';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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
      {/* Mobile dropdoen menu */}
      <div className="z-50">
        <div
          className={`fixed left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ top: '5rem' }}
        >
          <div className="w-full h-full flex flex-col items-center space-y-4 py-4">
            <ul className=" flex flex-col items-center space-y-4 py-4 text-lg font-medium text-blue-1">
              <Link to="/" className="hover:text-blue-800">
                Profile
              </Link>
              <Link to="/" className="hover:text-blue-800">
                About us
              </Link>
              <Link to="/contact" className="hover:text-blue-800">
                Contact page
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export function DesktopMenu() {
  return (
    <ul className=" space-x-4 justify-center items-center">
      <Link to="/" className="hover:text-blue-800">
        Profile
      </Link>
      <Link to="/" className="hover:text-blue-800">
        About us
      </Link>
      <Link to="/contact" className="hover:text-blue-800 transition-colors">
        Contact page
      </Link>
    </ul>
  );
}
