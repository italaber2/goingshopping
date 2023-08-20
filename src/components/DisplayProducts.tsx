import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import ViewBasket from "./ViewBasket";
import Pagination from "./Pagination";

interface DisplayProductsProps {
  products: { name: string; inventory: number }[];
  itemsPerPage: number;
}

function DisplayProducts({ products, itemsPerPage }: DisplayProductsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<string[]>([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
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
      <ViewBasket
        cartItems={cartItems}
        cartItemsCount={cartItems.length}
        setCartItems={setCartItems} // Pass the setCartItems function
      />
      {filteredProducts.length === 0 ? (
        <p data-testid="no-result-text">
          What you're looking for probably exists but isn't available here.
        </p>
      ) : (
        <>
          <div data-testid="product-list-display" className="product-list">
            {currentItems.map((product, index) => (
              <div key={product.name}>
                <ProductCard
                  name={product.name}
                  inventory={product.inventory}
                  onAddToCart={() => handleAddToCart(product.name)}
                />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default DisplayProducts;
