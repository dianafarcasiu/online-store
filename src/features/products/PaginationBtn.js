import { useDisplay } from "../../contexts/ProductDisplayContext";

export default function PaginationBtn({
  children,
  isPrev,
  isNext,
  handlePagination,
  isCurrent,
}) {
  const { currentPage, totalPages } = useDisplay();
  return (
    <button
      className={`py-3 px-4 text-sm md:text-base font-bold hover:bg-gray-950 disabled:bg-gray-900/50 transition-colors ${
        isPrev ? "rounded-l-lg" : ""
      }${isNext ? "rounded-r-lg" : ""} ${
        isCurrent ? "bg-gray-950" : "bg-gray-900"
      }`}
      onClick={handlePagination}
      disabled={
        (isPrev && currentPage === 1) || isNext & (currentPage === totalPages)
      }
    >
      {children}
    </button>
  );
}
