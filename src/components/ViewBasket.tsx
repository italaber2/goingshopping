import React, { useState } from "react";
// import ViewBasketLayer from "./ViewBasketLayer";

interface BasketProps {
  cartItemsCount: number;
}

function ViewBasket({ cartItemsCount }: BasketProps) {
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
            <h2 className="layer-headline">Current Order</h2>
            <div className="order-overview">
              <div className="item-description">Taco</div>
              <div className="price-and-quantity">Fish</div>
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
