import React from "react";

interface ProductDetailsProps {
  product: { name: string; price: number; inventory: number };
  onClose: () => void;
}

function ProductDetails({ product, onClose }: ProductDetailsProps) {
  return (
    <div className="product-details-popover">
      <div className="popover-content">
        <h2>{product.name}</h2>
        <p>€{product.price.toFixed(2)}</p>
        <p>Inventory: {product.inventory}</p>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
