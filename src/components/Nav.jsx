import React from "react";
import logo from "../images/logo.webp";

export default function nav() {
  return (
    <nav className="w-full h-20 flex flex-row justify-around items-center bg-neutral-900 ">
      <img src={logo} alt="engineering logo" className="h-16 self-center"/>
      <ul className="list-none flex flex-row">
        <li>
          <p className="text-white text-lg pr-10 font-semibold transition ease-in-out duration-300 hover:text-lime-300 cursor-pointer">About</p>
        </li>
        <li>
          <p className="text-white text-lg pr-10 font-semibold transition ease-in-out duration-300 hover:text-lime-300 cursor-pointer">Products</p>
        </li>
        <li>
          <p className="text-white text-lg pr-10 font-semibold transition ease-in-out duration-300 hover:text-lime-300 cursor-pointer">Industry</p>
        </li>
        <li>
          <p className="text-white text-lg pr-10 font-semibold transition ease-in-out duration-300 hover:text-lime-300 cursor-pointer">Contact</p>
        </li>
      </ul>
    </nav>
  );
}
