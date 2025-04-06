"use client";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section pt-28 pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          ACREDITACIÓN<br />UNACH
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
          Compromiso con la excelencia académica y la producción científica de calidad
        </p>
        <Button
          className="bg-accent hover:bg-accent/90 text-white px-8 py-2 rounded-md font-medium transition"
        >
          Producción Académica de Alta Calidad
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
