import "./App.css";
import ProductList from "./components/ProductList";

const currentInventory = [
  { name: "Product 1", price: 10, inventory: 1 },
  { name: "Product 2", price: 20, inventory: 2 },
  { name: "Product 3", price: 30, inventory: 3 },
  { name: "Product 4", price: 40, inventory: 5 },
  { name: "Product 5", price: 50, inventory: 8 },
  { name: "Product 6", price: 60, inventory: 13 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Shopping Website</h1>
        <ProductList products={currentInventory} />
      </header>
    </div>
  );
}

export default App;
