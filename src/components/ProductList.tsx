import Product from "./Product";

interface ProductListProps {
  products: { name: string; price: number; inventory: number }[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          inventory={product.inventory}
        />
      ))}
    </div>
  );
}

export default ProductList;
