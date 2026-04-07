import About from "./components/about/About.tsx";
import Hero from "./components/Hero/Hero.tsx";
import NavBar from "./components/Nav/Nav.tsx";
import ProdSection from "./components/Productive/ProductiveSection.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ProdSection />
    </>
  );
}

export default App;
