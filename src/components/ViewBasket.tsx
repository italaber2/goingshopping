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
      <button
        data-testid="view-basket-button"
        className="button"
        onClick={openBasketLayer}
      >
        View Items In Basket
      </button>
      {layerVisible && (
        <div className="overlay">
          <div data-testid="view-basket-layer" className="modal">
            <h2 data-testid="basket-title">Current Order</h2>
            <div className="order-overview">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  data-testid="view-basket-item-description"
                  className="item-description"
                >
                  <div
                    data-testid="view-basket-item-name"
                    className="item-name"
                  >
                    {item}
                  </div>
                  <div className="remove-button-container">
                    <button
                      data-testid="view-basket-remove-button"
                      className="remove-button"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div
              data-testid="view-basket-order-summary"
              className="order-summary"
            >
              Total number of items: {cartItemsCount}
            </div>
            <button
              data-testid="view-basket-close-button"
              className="button"
              onClick={closeBasketLayer}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <span className="cart-icon">🛒</span>
      <span data-testid="current-cart-count" className="cart-count">
        {cartItemsCount}
      </span>
    </div>
  );
}

export default ViewBasket;
