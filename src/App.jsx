import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./components/pages";
import Blog from "./components/pages/Blog";
import AboutUs from "./components/pages/About/AboutUs";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
