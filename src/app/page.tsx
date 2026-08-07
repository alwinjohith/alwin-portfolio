import Footer from "@/components/Footer";
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
      <Navbar />
      <main className="relative flex-1">
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
