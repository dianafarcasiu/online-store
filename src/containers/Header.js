import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full lg:w-1/2">
      <h1 className="font-bold text-3xl mb-12  sm:text-4xl lg:leading-tight lg:text-5xl">
        Your Destination for Modern Comfort
      </h1>
      <h5 className="font-bold text-lg mb-12 sm:text-xl">
        Discover modern furniture and decor that brings comfort and style to
        your home. Shop Comfy Store for high-quality, contemporary pieces to
        elevate your living space.
      </h5>
      <NavLink to="/products">
        <button className="font-bold text-lg p-3 bg-purple-400 text-black rounded-lg hover:bg-purple-500 active:scale-95 transition-colors">
          Shop now
        </button>
      </NavLink>
    </div>
  );
}
