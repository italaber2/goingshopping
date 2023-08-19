import React, { useState } from "react";

interface BasketProps {
  cartItemsCount: number;
  cartItems: string[];
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
}

function ViewBasket({ cartItems, cartItemsCount, setCartItems }: BasketProps) {
  const [layerVisible, setLayerVisible] = useState(false);

  const openBasketLayer = () => {
    setLayerVisible(true);
  };

  const closeBasketLayer = () => {
    setLayerVisible(false);
  };

  const handleRemoveFromCart = (itemName: string) => {
    const itemIndex = cartItems.indexOf(itemName);
    if (itemIndex !== -1) {
      const newCartItems = cartItems.slice(); // Create a copy of cartItems array
      newCartItems.splice(itemIndex, 1); // Remove the item at the specified index
      setCartItems(newCartItems);
    }
  };

  return (
    <div className="shopping-cart">
      <button className="button" onClick={openBasketLayer}>
        View Items In Basket
      </button>
      {layerVisible && (
        <div className="overlay">
          <div className="modal">
            <h2>Current Order</h2>
            <div className="order-overview">
              {cartItems.map((item, index) => (
                <div key={index} className="item-description">
                  <div className="item-name">{item}</div>
                  <div className="remove-button-container">
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-summary">
              Total number of items: {cartItemsCount}
            </div>
            <button className="button" onClick={closeBasketLayer}>
              Close
            </button>
          </div>
        </div>
      )}
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartItemsCount}</span>
    </div>
  );
}

export default ViewBasket;
