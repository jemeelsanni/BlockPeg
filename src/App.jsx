import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Index from "./components/pages/Index";
import Blogx from "./components/pages/Blog/Blogx";
import Homepage from "./components/blockpeg capital/pages/Home/Homepage";
import StrategicInsight from "./components/blockpeg capital/pages/Strategic Insight/StrategicInsight";
import FinancialAdviser from "./components/blockpeg capital/pages/Financial Adviser/FinancialAdviser";
import BuildingBlocks from "./components/blockpeg capital/pages/Building Blocks/BuildingBlocks";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/blockpeg capital/pages/About Us/AboutUs";
import { ToastContainer } from "react-toastify";
import FirstBlog from "./components/pages/Blog/BlogPages/FirstBlog";
import SecondBlog from "./components/pages/Blog/BlogPages/SecondBlog";
import ThirdBlog from "./components/pages/Blog/BlogPages/ThirdBlog";

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
          <Route path="home" element={<Homepage />} />
          <Route path="blogx" element={<Blogx />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="strategicinsight" element={<StrategicInsight/>}/>
          <Route path="financialadviser" element={<FinancialAdviser/>}/>
          <Route path="buildingblocks" element={<BuildingBlocks/>}/>
          <Route path="cryptocurrency" element={<FirstBlog />} />
          <Route path="cryptocurrency+trading" element={<SecondBlog />} />
          <Route path="webgtr" element={<ThirdBlog />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
