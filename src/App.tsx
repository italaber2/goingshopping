import { inventory } from "./data/inventory";
import DisplayProducts from "./components/DisplayProducts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="app-title">The Totally Bug Free Online Shop</h1>
        <DisplayProducts products={inventory} itemsPerPage={3} />
      </header>
    </div>
  );
}

export default App;
