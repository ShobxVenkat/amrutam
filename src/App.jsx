import { BrowserRouter, Routes, Route } from "react-router-dom";

import Store from "./pages/Store.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import IngredientDetails from "./pages/IngredientDetails.jsx";
import Forum from "./pages/Forum.jsx";

import UserDashboard from "./pages/UserDashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/ingredient/:slug" element={<IngredientDetails />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
