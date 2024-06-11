export default function FormBtn({ children, color, hoverColor, handleAction }) {
  return (
    <button
      className={`${color} w-full sm:flex-grow  p-1 rounded-md hover:${hoverColor} transition-colors hover:shadow-md hover:shadow-black/20 active:scale-95`}
      onClick={handleAction}
    >
      {children}
    </button>
  );
}
