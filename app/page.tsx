

import Image from "next/image";
import Navbar from "./sections/Nabvar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <Services />
   <Gallery />
   <Contact />
   <Footer />
   <Chatbot />
   </>
  );
}
