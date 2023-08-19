interface ProductDetailsProps {
  product: { name: string; picture: string; description: string };
  onClose: () => void;
}

function ProductDetailsLayer({ product, onClose }: ProductDetailsProps) {
  return (
    <div className="layer">
      <div className="layer-content">
        <h2>{product.name}</h2>
        <img src={product.picture} alt={product.name} />
        <p>{product.description}</p>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsLayer;
