import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { DisplayProvider } from "./contexts/ProductDisplayContext";

function App() {
  return (
    <BrowserRouter basename="/online-store">
      <Navbar />
      <DisplayProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </DisplayProvider>
    </BrowserRouter>
  );
}

export default App;
