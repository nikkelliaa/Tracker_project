import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Contcacts from "./pages/contacts/Contcacts";
import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import Instruction from "./pages/instruction/Instruction";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route
      element={<Home />}
      path="/"
    />
     <Route
      element={<Contcacts />}
      path="/contacts"
    />
     <Route
      element={<Instruction />}
      path="/instruction"
    />
     <Route
      element={<AboutUs />}
      path="/about-us"
    />
      </Routes>
    </div>
  );
}

export default App;
