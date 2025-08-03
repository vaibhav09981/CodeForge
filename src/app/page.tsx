import Accordion from "@/components/Accordion";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LoginSignup from "@/components/LoginSignup";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="m-auto px-4 pt-10 md:px-24">
      <Hero />
      <LoginSignup />
      <Services />
      <CaseStudies />
      <Accordion />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}