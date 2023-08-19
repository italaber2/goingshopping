import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import ViewBasket from "./ViewBasket";
import Pagination from "./Pagination";

interface ProductListProps {
  products: { name: string; price: number; inventory: number }[];
  itemsPerPage: number;
}

function ProductList({ products, itemsPerPage }: ProductListProps) {
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
      <ViewBasket cartItems={cartItems} cartItemsCount={cartItems.length} />
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

export default ProductList;
