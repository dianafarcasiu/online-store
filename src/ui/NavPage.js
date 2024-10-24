export default function NavPage({ children }) {
  return (
    <li className="relative cursor-pointer hover:text-purple-400 hover:bg-gray-800 rounded-xl py-3 px-4">
      {children}
    </li>
  );
}
