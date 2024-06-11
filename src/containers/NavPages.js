import { useState } from "react";
import NavPage from "../components/NavPage";
import { NavLink } from "react-router-dom";

export default function NavPages() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  return (
    <>
      <div className="cursor-pointer sm:hidden p-2" onClick={toggleMenu}>
        <div className="h-1 w-8 bg-zinc-200 rounded-full mb-1"></div>
        <div className="h-1 w-8 bg-zinc-200 rounded-full mb-1"></div>
        <div className="h-1 w-8 bg-zinc-200 rounded-full mb-1"></div>
      </div>

      <ul
        className={` ${
          menuOpen ? "block" : "hidden"
        } sm:flex items-center content-center sm:relative sm:w-auto sm:top-0 absolute top-20 right-2 rounded-3xl px-6 py-3 w-44 text-right bg-gray-950`}
      >
        <NavLink to="/">
          <NavPage>Home</NavPage>
        </NavLink>

        <NavLink to="/about">
          <NavPage>About</NavPage>
        </NavLink>
        <NavLink to="/products">
          <NavPage>Products</NavPage>
        </NavLink>
        <NavLink to="/cart">
          <NavPage>Cart</NavPage>
        </NavLink>
      </ul>
    </>
  );
}
