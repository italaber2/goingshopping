import "./style/App.css";
import { currentInventory } from "./data/currentInventory";
import DisplayProducts from "./components/homepage/DisplayProducts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Shopping Website</h1>
        <DisplayProducts products={currentInventory} itemsPerPage={3} />
      </header>
    </div>
  );
}

export default App;
