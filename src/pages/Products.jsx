import React from "react";
import Footer from "../components/Footer";
import Mantenimiento from "../components/Mantenimiento";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

const Products = () => {
  return (
    <div>
      <Navbar />
      <Mantenimiento />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Products;
