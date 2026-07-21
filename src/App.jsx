import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTopButton from "./components/BackToTopButton";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ScrollProgress />
      <div className="app-shell position-relative overflow-hidden">
        <Navbar />
        <main>
          <Home />
          <About />
          <Portfolio />
          <Skills />
          <Certificates />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;

