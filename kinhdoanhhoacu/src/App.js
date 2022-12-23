import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
