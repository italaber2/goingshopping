interface ProductDetailsProps {
  product: { name: string; price: number; inventory: number };
  onClose: () => void;
}

function ProductDetailsLayer({ product, onClose }: ProductDetailsProps) {
  return (
    <div className="layer">
      <div className="layer-content">
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

export default ProductDetailsLayer;
