import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Index from "./components/pages/Index";
import Blogx from "./components/pages/Blog/Blogx";
import AboutUs from "./components/pages/About/AboutUs";
import Contact from "./components/pages/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
