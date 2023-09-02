import React from "react";
import "./App.css";
import Hero from "./components/hero";
import "./components/hero.css";
import NavBar from "./components/navbar";
import "./components/navbar.css";
import Footer from "./components/footer";
import "./components/footer.css";

function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <Hero />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
