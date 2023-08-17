import "./style/App.css";
import { currentInventory } from "./data/currentInventory";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Shopping Website</h1>
        <ProductList products={currentInventory} itemsPerPage={3} />
      </header>
    </div>
  );
}

export default App;
