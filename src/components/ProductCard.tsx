import React, { useState } from "react";
import ProductDetailsLayer from "./ProductDetailsLayer";
import { inventoryProductDetails } from "../data/inventory";

interface ProductCardProps {
  name: string;
  inventory: number;
  onAddToCart: (productName: string) => void;
}

function ProductCard({ name, inventory, onAddToCart }: ProductCardProps) {
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

  const matchingProduct = inventoryProductDetails.find(
    (product) => product.name === name
  );

  return (
    <div data-testid="product-card" className="product">
      <h2>{name}</h2>
      <p>Inventory: {currentInventory}</p>
      <button
        data-testid="add-to-basket-button"
        className="button"
        onClick={handleAddToBasket}
        disabled={currentInventory === 0}
      >
        {currentInventory === 0 ? "Out of Stock" : "Add to Basket"}
      </button>
      <button
        data-testid="view-product-details-button"
        className="button"
        onClick={openProductDetails}
      >
        View Product Details
      </button>
      {layerVisible && matchingProduct !== undefined && (
        <div className="overlay">
          <div className="modal">
            <ProductDetailsLayer
              product={{
                name,
                picture: matchingProduct.picture,
                description: matchingProduct.description,
              }}
              onClose={closeProductDetails}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
