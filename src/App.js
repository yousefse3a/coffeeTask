import CoffeeImg from "./components/CoffeeImg/CoffeeImg";
import Joinus from "./components/Joinus/Joinus";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <CoffeeImg/>
      <Products/>
      <Joinus/>
    </div>
  );
}

export default App;
