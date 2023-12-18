import "./App.css";
import Experience from "./components/Experience";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMePage from "./components/AboutMePage";
import ContactPage from "./components/ContactPage";
import Blog from "./components/Blog";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
