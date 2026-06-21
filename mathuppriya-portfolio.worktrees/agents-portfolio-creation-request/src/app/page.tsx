import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Tools from "@/components/tools/Tools";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import BackgroundEffects from "@/components/common/BackgroundEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <BackgroundEffects />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Tools />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}