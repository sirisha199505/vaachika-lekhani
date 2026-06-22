import "./App.css";
import SacredBackground from "./components/SacredBackground";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import NameMeaning from "./components/NameMeaning";
import ThreeWays from "./components/ThreeWays";
import Features from "./components/Features";
import MantraLibrary from "./components/MantraLibrary";
import Dashboard from "./components/Dashboard";
import Languages from "./components/Languages";
import Movement from "./components/Movement";
import Privacy from "./components/Privacy";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <SacredBackground />
      <NavBar />
      <main>
        <Hero />
        <NameMeaning />
        <ThreeWays />
        <Features />
        <MantraLibrary />
        <Dashboard />
        <Languages />
        <Movement />
        <Privacy />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
