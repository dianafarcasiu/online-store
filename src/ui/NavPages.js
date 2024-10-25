import { useState } from "react";
import NavPage from "./NavPage";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

export default function NavPages() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const totalCartAmount = useSelector(getTotalCartQuantity);

  function toggleMenu() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  return (
    <>
      <div className="p-2 cursor-pointer sm:hidden" onClick={toggleMenu}>
        <div className="w-8 h-1 mb-1 rounded-full bg-zinc-200"></div>
        <div className="w-8 h-1 mb-1 rounded-full bg-zinc-200"></div>
        <div className="w-8 h-1 mb-1 rounded-full bg-zinc-200"></div>
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
          {cart.length > 0 && (
            <div className="absolute z-10 flex items-center justify-center w-5 h-5 p-1 text-xs font-bold bg-purple-500 rounded-full right-6 top-3">
              {totalCartAmount}
            </div>
          )}
          <NavPage>Cart</NavPage>
        </NavLink>
      </ul>
    </>
  );
}
