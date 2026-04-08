import About from "./components/about/About.tsx";
import Access from "./components/Access/Access.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Hero from "./components/Hero/Hero.tsx";
import NavBar from "./components/Nav/Nav.tsx";
import ProdSection from "./components/Productive/ProductiveSection.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ProdSection />
      <Testimonials />
      <Access/>
      <Footer/>
    </>
  );
}

export default App;
