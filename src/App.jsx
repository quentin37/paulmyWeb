import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Submenu from "./components/Submenu";
import Tourisme from "./pages/Tourisme";
import Mairie from "./pages/Mairie";
import Demarche from "./pages/Demarche";
import Conseil from "./pages/Conseil";
import FarOuest from "./pages/FarOuestival";
import Actu from "./pages/Actu";

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
        <Route path="/mairie" element={<Mairie />} />
        <Route path="/demarche" element={<Demarche />} />
        <Route path="/conseil" element={<Conseil />} />
        <Route path="/actualités" element={<Actu />} />
        <Route path="/far-ouestival" element={<FarOuest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
