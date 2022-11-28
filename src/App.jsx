import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Submenu from "./components/Submenu";
import Tourisme from "./pages/Tourisme";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Submenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tourisme" element={<Tourisme />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
