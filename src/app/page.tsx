import Footer from "@/components/Footer";
import GradientOrbs from "@/components/GradientOrbs";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Research from "@/sections/Research";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <>
      <MatrixRain />
      <GradientOrbs />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
