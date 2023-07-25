import React from "react";
import Navbar from "../components/Navbar";
import { EmblaCarousel } from "../components/EmblaCarousel";
import About from "../components/About";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <EmblaCarousel />
      <About />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;
