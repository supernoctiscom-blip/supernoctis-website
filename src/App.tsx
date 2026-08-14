import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Enterprise from "./components/Enterprise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Capabilities />
        <Portfolio />
        <Process />
        <Enterprise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
