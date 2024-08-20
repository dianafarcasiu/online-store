import PaginationBtn from "../components/PaginationBtn";
import { useDisplay } from "../contexts/ProductDisplayContext";

export default function PaginationBtns() {
  const { currentPage, pageNumbers, dispatch } = useDisplay();

  return (
    <div className="mt-24 flex justify-end">
      <div className="flex">
        <PaginationBtn
          isPrev={true}
          handlePagination={() =>
            dispatch({ type: "setPage", payload: currentPage - 1 })
          }
        >
          Prev
        </PaginationBtn>

        {pageNumbers.map((pageNumber) => (
          <PaginationBtn
            handlePagination={() =>
              dispatch({ type: "setPage", payload: pageNumber })
            }
            isCurrent={currentPage === pageNumber}
            key={pageNumber}
          >
            {pageNumber}
          </PaginationBtn>
        ))}

        <PaginationBtn
          isNext={true}
          handlePagination={() =>
            dispatch({ type: "setPage", payload: currentPage + 1 })
          }
        >
          Next
        </PaginationBtn>
      </div>
    </div>
  );
}
