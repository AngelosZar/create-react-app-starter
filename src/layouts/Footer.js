import { Link } from 'react-router-dom';
//
import RainyDaysLogo from '../media/logos/RainyDays_Logo.png';
import paypalColorIcon from '../media/Payment/paypal-color-icon1.png';
import visaIcon from '../media/Payment/visa-icon1.png';
import masterCardIcon from '../media/Payment/master-card-icon1.png';
import applePayIcon from '../media/Payment/apple-pay-icon1.png';
import vippsIcon from '../media/Payment/Vipps-Logo1.png';
//
import facebookIcon from '../media/Social-media/facebook.png';
import pinterestIcon from '../media/Social-media/pinterest.png';
import instagramLogo from '../media/Social-media/instagram.png';

export default function Footer() {
  return (
    <footer className=" bg-gray-100 flex flex-col w-full max-w-1440px mx-auto px-4">
      <div className="flex items-center justify-between px-4">
        <div>
          <span>
            <Link to="/" className="hover:text-blue-800 transition-colors">
              <img src={RainyDaysLogo} alt="Logo" className="w-28 h-22 py-2" />
            </Link>
          </span>
          <ul className="flex space-x-4 justify-center items-center">
            <li>&copy; 2025 ALL RIGHTS RESERVED</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
          <div className="flex space-x-4 justify-start items-center">
            <img
              src={paypalColorIcon}
              alt="Paypal Logo"
              className="w-22 h-auto py-2"
            />
            <img src={visaIcon} alt="Visa Logo" className="w-22 h-auto py-2" />

            <img
              src={applePayIcon}
              alt="Visa Logo"
              className="w-22 h-auto py-2"
            />
            <img
              src={masterCardIcon}
              alt="Visa Logo"
              className="w-22 h-auto py-2"
            />
            <img
              src={vippsIcon}
              alt="Vipps Logo"
              className="w-22 h-auto py-2"
            />
          </div>
        </div>
        {/* right part of footer */}
        <div className="flex space-x-4 justify-between items-center">
          <ul>
            <li>Services</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Warranty</li>
          </ul>

          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Reach us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <h6>Follow us on</h6>
        <h6>Social Media</h6>
        <div>
          <ul className="flex space-x-4 justify-start items-center">
            <li>
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook Logo"
                  className="w-12 h-12"
                />
              </a>
            </li>
            <li>
              <a
                href="https://pinterest.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={pinterestIcon}
                  alt="Pinterest Logo"
                  className="w-12 h-12"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={instagramLogo}
                  alt="Instagram Logo"
                  className="w-12 h-12"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
