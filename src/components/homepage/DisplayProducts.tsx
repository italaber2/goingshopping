import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ViewBasket";

interface ProductListProps {
  products: { name: string; price: number; inventory: number }[];
  itemsPerPage: number;
}

function DisplayProducts({ products, itemsPerPage }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<string[]>([]);

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

  const handleAddToCart = (productName: string) => {
    setCartItems((prevCartItems) => [...prevCartItems, productName]);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ShoppingCart cartItemsCount={cartItems.length} />
      {filteredProducts.length === 0 ? (
        <p>No results found :(</p>
      ) : (
        <>
          <div className="product-list">
            {currentItems.map((product, index) => (
              <div key={product.name}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  inventory={product.inventory}
                  onAddToCart={() => handleAddToCart(product.name)}
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

export default DisplayProducts;
