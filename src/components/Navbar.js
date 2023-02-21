import React from 'react'
import Logo from "../images/Logo.png";

// Navbar component
export const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between bg-white shadow-lg navbar navbar-expan-lg navbar-light ">
      {/* logo */}
      <div className=" flex items-center sm:py-3 px-2 ">
        <a href="/">
          <img
            src={Logo} //logo
            alt="Logo"
            className="pl-6 object-cover h-7 lg:h-8 cursor-pointer "
          />
        </a>
      </div>
    </nav>
  )
}
