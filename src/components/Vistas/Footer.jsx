import {React} from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/smarty-home.png";
import './footer.css';
function Footer() {

    //{/*TODO JS */}

   return (
<div>
<footer className="text-blue-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-blue-800">
    <img className="hidden lg:block h-8 w-auto" src={logo} alt="Smarty logo" />
    </Link>
    <p className=" sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-200 sm:py-2 sm:mt-0 mt-4">© 2023 Smarty
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link className="text-blue-700">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </Link>

      <Link className="ml-3 text-blue-700">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
      </span>
  </div>
</footer>
</div>
)
};

export default Footer;