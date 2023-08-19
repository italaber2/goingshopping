import React, { useState } from "react";
import ProductDetailsLayer from "./ProductDetailsLayer";

interface ProductCardProps {
  name: string;
  price: number;
  inventory: number;
  onAddToCart: (productName: string) => void;
}

function ProductCard({
  name,
  price,
  inventory,
  onAddToCart,
}: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [currentInventory, setCurrentInventory] = useState(inventory);
  const [currentBasketInventory, setCurrentBasketInventory] = useState(0);
  const [layerVisible, setLayerVisible] = useState(false);

  const handleAddToBasket = () => {
    if (currentInventory > 0) {
      setIsAdded(true);
      setCurrentInventory(currentInventory - 1);
      setCurrentBasketInventory(currentBasketInventory + 1);
      onAddToCart(name);
    }
  };

  const openProductDetails = () => {
    setLayerVisible(true);
  };

  const closeProductDetails = () => {
    setLayerVisible(false);
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
      {layerVisible && (
        <div className="overlay">
          <div className="modal">
            <ProductDetailsLayer
              product={{ name, price, inventory: currentInventory }}
              onClose={closeProductDetails}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;