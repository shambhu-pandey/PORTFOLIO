import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      </div>
      <Toaster />
      </>
  );
}
export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import CategoryProjects from "./components/ProjectLinks";  // This is the category-specific projects page
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Home />
//                 <About />
//                 <Portfolio />
//                 <Contact />
//                 <Footer />
//               </div>
//             }
//           />
//           <Route path="/category/:name" element={<CategoryProjects />} />
//         </Routes>
//         <Toaster />
//       </>
//     </Router>
//   );
// }

// export default App;





