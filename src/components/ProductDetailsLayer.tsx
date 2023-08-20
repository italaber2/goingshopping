interface ProductDetailsProps {
  product: { name: string; picture: string; description: string };
  onClose: () => void;
}

function ProductDetailsLayer({ product, onClose }: ProductDetailsProps) {
  return (
    <div data-testid="product-details-layer" className="layer">
      <div className="layer-content">
        <h2 data-testid="product-details-layer-title">{product.name}</h2>
        <img
          data-testid="product-details-layer-image"
          src={product.picture}
          alt={product.name}
        />
        <p
          data-testid="product-details-layer-description"
          className="product-description"
        >
          {product.description}
        </p>
        <button
          data-testid="product-details-layer-close-button"
          className="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsLayer;
