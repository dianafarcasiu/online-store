import PaginationBtn from "../components/PaginationBtn";

export default function PaginationBtns({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  function goToPrevPage() {
    setCurrentPage((currentPage) => currentPage - 1);
  }
  function goToNextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
  }
  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-24 flex justify-end">
      <div className="flex">
        <PaginationBtn
          isPrev={true}
          handlePagination={goToPrevPage}
          currentPage={currentPage}
        >
          Prev
        </PaginationBtn>

        {pageNumbers.map((pageNumber) => (
          <PaginationBtn
            handlePagination={() => goToPage(pageNumber)}
            isCurrent={currentPage === pageNumber}
            key={pageNumber}
          >
            {pageNumber}
          </PaginationBtn>
        ))}

        <PaginationBtn
          isNext={true}
          handlePagination={goToNextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        >
          Next
        </PaginationBtn>
      </div>
    </div>
  );
}
