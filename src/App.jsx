import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import RecentWork from "./components/work/RecentWork";
import Hobbies from "./components/hobbies/Hobbies";
import Qualification from "./components/qualification/Qualification";
import Privacy from "./components/legal/Privacy";
import { SeoHead } from "./seo/SeoHead";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const target = location.hash ? document.querySelector(location.hash) : null;

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, location.pathname]);

  return null;
}

function ThemeMetaColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) return;

    themeColorMeta.setAttribute("content", resolvedTheme === "dark" ? "#111111" : "#f7f7f5");
  }, [resolvedTheme]);

  return null;
}

function App() {
  return (
    <TooltipProvider delayDuration={300}>
      <BrowserRouter>
        <SeoHead />
        <ThemeMetaColor />
        <ScrollToHash />
        <Header />
        <main className="relative overflow-x-clip">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Skills />
                  <RecentWork />
                  <Qualification />
                  <Contact />
                </>
              }
            />

            <Route path="/portfolio" element={<Work />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <ScrollUp />
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
