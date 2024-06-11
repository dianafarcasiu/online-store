import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/">
      <div className="logo inline-block text-3xl p-2 text-black bg-zinc-200 rounded-xl hover:bg-purple-400 active:scale-95 transition-colors cursor-pointer">
        Comfy
      </div>
    </NavLink>
  );
}
