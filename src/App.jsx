import { Route, Routes } from "react-router";

import Navbar from "./components/NavBar/NavBar";
import HomePage from "./pages/ProductDetails/HomePage";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
