import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/hero";
import "./components/hero.css";
import NavBar from "./components/navbar";
import "./components/navbar.css";
import Footer from "./components/footer";
import "./components/footer.css";
import About from "./components/about";
import "./components/about.css";
import Contact from "./components/contact";
import "./components/contact.css";

function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
