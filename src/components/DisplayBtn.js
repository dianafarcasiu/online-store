export default function DisplayBtn({ icon, handleDisplay, active }) {
  return (
    <button
      className={`text-2xl py-1 px-[10px] rounded-full hover:bg-gray-700  ${
        active
          ? "bg-purple-400 text-black hover:bg-purple-400 hover:text-black"
          : ""
      }`}
      onClick={handleDisplay}
    >
      <i className={icon}></i>
    </button>
  );
}
