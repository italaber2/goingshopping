import React, { useState } from "react";

interface BasketProps {
  cartItemsCount: number;
  cartItems: string[];
}

function ViewBasket({ cartItems, cartItemsCount }: BasketProps) {
  const [layerVisible, setLayerVisible] = useState(false);

  const openBasketLayer = () => {
    setLayerVisible(true);
  };

  const closeBasketLayer = () => {
    setLayerVisible(false);
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
                  {item}
                </div>
              ))}
            </div>
            <div className="order-summary">Taco Fish Summary</div>
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
