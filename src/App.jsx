import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./components/pages/Index";
import Blogx from "./components/pages/Blog/Blogx";
import AboutUs from "./components/pages/About/AboutUs";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="blogx" element={<Blogx />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
