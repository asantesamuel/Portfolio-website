// import "./App.css";
// import Experience from "./component/Experience";
// import Home from "./component/Home";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import AboutMePage from "./component/AboutMePage";
// import ContactPage from "./component/ContactPage";
// import Blog from "./component/Blog";
// // import Footer from "./components/Footer";

// function App() {
//   //no error detected
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-me" element={<AboutMePage />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/contact-me" element={<ContactPage />} />
//         <Route path="/blog" element={<Blog />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { RouterProvider } from "react-router-dom";

// project import
import router from "routes";
import ThemeCustomization from "themes";

import ScrollTop from "components/ScrollTop";

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
