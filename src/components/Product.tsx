import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

interface ProductProps {
  name: string;
  price: number;
  inventory: number;
}

function Product({ name, price, inventory }: ProductProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [currentInventory, setCurrentInventory] = useState(inventory);
  const [currentBasketInventory, setCurrentBasketInventory] = useState(0);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleAddToBasket = () => {
    if (currentInventory > 0) {
      setIsAdded(true);
      setCurrentInventory(currentInventory - 1);
      setCurrentBasketInventory(currentBasketInventory + 1);
    }
  };

  const openProductDetails = () => {
    setPopoverVisible(true);
  };

  const closeProductDetails = () => {
    setPopoverVisible(false);
  };

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>€{price.toFixed(2)}</p>
      <p>Inventory: {currentInventory}</p>
      {isAdded ? (
        <button
          className="button"
          onClick={handleAddToBasket}
          disabled={currentInventory === 0}
        >
          {currentInventory === 0 ? "Out of Stock" : "Add to Basket"}
        </button>
      ) : (
        <>
          <button
            className="button"
            onClick={handleAddToBasket}
            disabled={currentInventory === 0}
          >
            {currentInventory === 0 ? "Out of Stock" : "Add to Basket"}
          </button>
        </>
      )}
      <button className="button" onClick={openProductDetails}>
        View Product Details
      </button>
      {popoverVisible && (
        <div className="overlay">
          <div className="modal">
            <ProductDetails
              product={{ name, price, inventory: currentInventory }}
              onClose={closeProductDetails}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
