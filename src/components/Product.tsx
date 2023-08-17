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
  const [popoverVisible, setPopoverVisible] = useState(false); // New state for popover visibility

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
      <h3>{name}</h3>
      <p>Inventory: {currentInventory}</p>
      <p>${price.toFixed(2)}</p>
      {isAdded ? (
        <button
          className="add-to-basket-button"
          onClick={handleAddToBasket}
          disabled={currentInventory === 0}
        >
          {currentInventory === 0 ? "Out of Stock" : "Add to Basket"}
        </button>
      ) : (
        <>
          <button
            className="add-to-basket-button"
            onClick={handleAddToBasket}
            disabled={currentInventory === 0}
          >
            {currentInventory === 0 ? "Out of Stock" : "Add to Basket"}
          </button>
          <button
            className="view-product-details-button"
            onClick={openProductDetails}
          >
            View Product Details
          </button>
          {popoverVisible && (
            <div className="popover-overlay">
              <ProductDetails
                product={{ name, price, inventory: currentInventory }}
                onClose={closeProductDetails}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Product;
