import React, { useState } from "react";

interface ProductProps {
  name: string;
  price: number;
  inventory: number;
}

function Product({ name, price, inventory }: ProductProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [currentInventory, setCurrentInventory] = useState(inventory);
  const [currentBasketInventory, setCurrentBasketInventory] = useState(0);

  const handleAddToBasket = () => {
    if (currentInventory > 0) {
      setIsAdded(true);
      setCurrentInventory(currentInventory - 1);
      setCurrentBasketInventory(currentBasketInventory + 1);
    }
  };

  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Inventory: {currentInventory}</p>
      <p>${price.toFixed(2)}</p>
      {isAdded ? (
        <button onClick={handleAddToBasket} disabled={currentInventory === 0}>
          {currentInventory === 0 ? "Out of Stock" : "Add to Basket"}
        </button>
      ) : (
        <>
          <button onClick={handleAddToBasket} disabled={currentInventory === 0}>
            {currentInventory === 0 ? "Out of Stock" : "Add to Basket"}
          </button>
        </>
      )}
    </div>
  );
}

export default Product;
