"use client";
import { startTransition, useEffect, useState } from "react";

function StatsSection() {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    startTransition(async () => {
      const res = await fetch("/total");
      const data = await res.json();
      setTotal(data);
    });
  }, []);
  return (
    <section id="stats" className="light-bg-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Análisis de <span className="text-primary">Producción Académica</span>
        </h2>
        <hr className="border-accent border-2 w-16 mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/3783633550.svg"
              alt="Publicaciones icon"
              className="w-12 h-12 mb-4 text-primary"
            />
            <div>
              INDICE:
              {total}
            </div>
            <h3 className="text-3xl font-bold text-primary mb-1">450+</h3>
            <h4 className="font-semibold text-primary mb-2">Publicaciones</h4>
            <p className="text-sm text-gray-600 text-center">
              Artículos científicos indexados
            </p>
          </div>

          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/2563901416.svg"
              alt="Proyectos icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-3xl font-bold text-primary mb-1">120</h3>
            <h4 className="font-semibold text-primary mb-2">Proyectos</h4>
            <p className="text-sm text-gray-600 text-center">
              Proyectos de investigación activos
            </p>
          </div>

          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/548389142.svg"
              alt="Reconocimientos icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-3xl font-bold text-primary mb-1">38</h3>
            <h4 className="font-semibold text-primary mb-2">Reconocimientos</h4>
            <p className="text-sm text-gray-600 text-center">
              Premios nacionales e internacionales
            </p>
          </div>

          <div className="stats-card">
            <img
              src="https://ext.same-assets.com/3486587280/260646423.svg"
              alt="Investigadores icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-3xl font-bold text-primary mb-1">250</h3>
            <h4 className="font-semibold text-primary mb-2">Investigadores</h4>
            <p className="text-sm text-gray-600 text-center">
              Docentes investigadores certificados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
