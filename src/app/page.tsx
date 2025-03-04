import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";
import Contact2 from "@/components/Contact2";
import { Footer } from "@/components/Footer";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Quote/>
      <Services />
      <Testimonials/>
      {/* <Contact /> */}
      <Contact2/>
      <Footer />
    </>
  );
}
