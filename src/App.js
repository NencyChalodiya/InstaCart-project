import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Safeway from "./pages/BrandStoreCategoryPages/Safeway";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Home />} />
        <Route path="/store/:storeId" element={<Safeway />} />
      </Routes>
    </>
  );
}

export default App;
