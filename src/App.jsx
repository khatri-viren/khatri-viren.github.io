import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { SeoHead } from "./seo/SeoHead";

const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const RecentWork = lazy(() => import("./components/work/RecentWork"));
const Qualification = lazy(() => import("./components/qualification/Qualification"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Work = lazy(() => import("./components/work/Work"));
const Hobbies = lazy(() => import("./components/hobbies/Hobbies"));
const Privacy = lazy(() => import("./components/legal/Privacy"));

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

function LazySection({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
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
                  <LazySection>
                    <About />
                  </LazySection>
                  <LazySection>
                    <Skills />
                  </LazySection>
                  <LazySection>
                    <RecentWork />
                  </LazySection>
                  <LazySection>
                    <Qualification />
                  </LazySection>
                  <LazySection>
                    <Contact />
                  </LazySection>
                </>
              }
            />

            <Route
              path="/portfolio"
              element={
                <LazySection>
                  <Work />
                </LazySection>
              }
            />
            <Route
              path="/hobbies"
              element={
                <LazySection>
                  <Hobbies />
                </LazySection>
              }
            />
            <Route
              path="/privacy"
              element={
                <LazySection>
                  <Privacy />
                </LazySection>
              }
            />
          </Routes>
        </main>
        <Footer />
        <ScrollUp />
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
