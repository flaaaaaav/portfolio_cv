import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experiments from "./components/Experiments";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Header />
        <Projects />
        <Experiments />
        <ContactForm />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
