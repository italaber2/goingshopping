import { inventory } from "./data/inventory";
import DisplayProducts from "./components/DisplayProducts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Shopping Website</h1>
        <DisplayProducts products={inventory} itemsPerPage={3} />
      </header>
    </div>
  );
}

export default App;
