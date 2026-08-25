import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, change) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + change } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/products" element={<ProductList onAdd={addToCart} />} />
          <Route path="/products/:category" element={<ProductList onAdd={addToCart} />} />
        </Routes>

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQty={updateQty}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;