import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecentWork from "./components/work/RecentWork";
import Hobbies from "./components/hobbies/Hobbies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <RecentWork />
                <Contact />
              </>
            }
          />

          <Route path="/portfolio" element={<Work />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </main>
      <Footer />
      <ScrollUp />
    </BrowserRouter>
  );
}

export default App;
