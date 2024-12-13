import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experiments from "./components/Experiments";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Header />
        <Projects />
        <Experiments />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
