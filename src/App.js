import "./App.css";
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/store" element={<Home/>}/>
    </Routes>
      
    </>
  );
}

export default App;
