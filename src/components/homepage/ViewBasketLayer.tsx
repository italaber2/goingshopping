interface ViewBasketProps {
  cartItems: string[];
  onClose: () => void;
}

function ViewBasketLayer({ cartItems, onClose }: ViewBasketProps) {
  return (
    <div className="layer">
      <div className="layer-content">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ViewBasketLayer;
