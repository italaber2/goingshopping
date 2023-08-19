interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
