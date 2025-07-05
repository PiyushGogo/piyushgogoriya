import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Projects from "@/components/projects";
import Skills from "@/components/skill";
import Image from "next/image";

export default function Home() {
  return (<>  
      < Header />
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
            
      </>
  );
}
