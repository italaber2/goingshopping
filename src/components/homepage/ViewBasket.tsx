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
        View Basket
      </button>
      {layerVisible && (
        <div className="overlay">
          <div className="modal"></div>
        </div>
      )}
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartItemsCount}</span>
    </div>
  );
}

export default ViewBasket;
