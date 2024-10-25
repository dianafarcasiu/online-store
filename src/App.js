import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DisplayProvider } from "./contexts/ProductDisplayContext";

import Home from "./ui/Home";
import About from "./ui/About";
import Products from "./features/products/Products";
import ProductDetails from "./features/products/ProductDetails";
import Cart from "./features/cart/Cart";
import CartSyncToLocalStorage from "./features/cart/CartSyncToLocalStorage";
import Navbar from "./ui/Navbar";
import Order from "./features/order/Order";
import OrderCompleted from "./features/order/OrderCompleted";

function App() {
  return (
    <BrowserRouter basename="/online-store">
      <CartSyncToLocalStorage />
      <Navbar />
      <DisplayProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/completed" element={<OrderCompleted />} />
        </Routes>
      </DisplayProvider>
    </BrowserRouter>
  );
}

export default App;
