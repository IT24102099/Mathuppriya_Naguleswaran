import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Tools from "@/components/tools/Tools";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Tools />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}