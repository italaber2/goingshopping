import React from "react";

interface ShoppingCartProps {
  cartItemsCount: number;
}

function ShoppingCart({ cartItemsCount }: ShoppingCartProps) {
  return (
    <div className="shopping-cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartItemsCount}</span>
    </div>
  );
}

export default ShoppingCart;
