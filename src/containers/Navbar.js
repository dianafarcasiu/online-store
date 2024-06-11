import Logo from "../components/Logo";
import NavPages from "./NavPages";

export default function Navbar() {
  return (
    <nav className="bg-gray-950 py-1 px-20 flex items-center justify-between sticky top-0 relative z-10">
      <Logo />
      <NavPages />
    </nav>
  );
}
