import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Links from "./pages/Links";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
  
    <Routes>
      {/* Routes go here */}
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    </>
  );
}

export default App;
