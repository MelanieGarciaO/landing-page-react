import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Menu />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}