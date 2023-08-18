import React, { useState } from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";

interface ProductListProps {
  products: { name: string; price: number; inventory: number }[];
  itemsPerPage: number;
}

function ProductList({ products, itemsPerPage }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      {filteredProducts.length === 0 ? (
        <p>No results found :(</p>
      ) : (
        <>
          <div className="product-list">
            {currentItems.map((product, index) => (
              <div key={product.name}>
                <Product
                  name={product.name}
                  price={product.price}
                  inventory={product.inventory}
                />
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({
              length: Math.ceil(filteredProducts.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className={`page-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;
