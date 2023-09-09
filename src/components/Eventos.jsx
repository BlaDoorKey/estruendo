import React from "react";

const Eventos = () => {
  const images = [
    "party/1.png",
    "party/2.png",
    "party/3.png",
    "party/4.png",
    // Add more image URLs as needed
  ];

  return (
    <section className="bg-gradient-to-b from-black via-black/80 to-black/50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-green-500">Nuestros Paquetes de Eventos</h2>
        <p className="text-white text-lg mb-12">
          Les ofrecemos una gran variedad de paquetes para satisfacer sus necesidades, desde eventos
          pequeños hasta eventos masivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="border border-gray-300 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Audio</h3>
            <ul className="text-white">
              <li>Equipo de Audio adaptable</li>
              <li>Bocinas de alta calidad</li>
              <li>Capacidad de salón</li>
              {/* Add more package details */}
            </ul>
          </div>

          {/* Package 2 */}
          <div className="border border-gray-300 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Iluminación</h3>
            <ul className="text-white">
              <li>Moving Head, Scanner Intelligent</li>
              <li>Maquina de humo, burbujas y confetti</li>
              <li>Estrobos</li>
              {/* Add more package details */}
            </ul>
          </div>

          {/* Package 3 */}
          <div className="border border-gray-300 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Filmación</h3>
            <ul className="text-white">
              <li>Fotografía</li>
              <li>Ampliaciones</li>
              <li>Proyección de pantalla grande.</li>
              {/* Add more package details */}
            </ul>
          </div>
        </div>

        {/* Responsive Image Gallery */}
        <div className="container mx-auto mt-12">
          <h2 className="text-4xl font-bold mb-8 text-green-500">Galería de Eventos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-8 text-green-500">Tipos de Eventos</h2>
          <p className="text-white text-lg">
            Ofrecemos servicios para una amplia variedad de eventos, incluyendo:
          </p>
          <ul className="text-white text-lg mt-4">
            <li>Eventos Sociales</li>
            <li>Eventos Corporativos</li>
            {/* Add more event types */}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-8 text-green-500">Servicios Adicionales</h2>
          <p className="text-white text-lg">
            Además de nuestros paquetes, también ofrecemos servicios adicionales, como:
          </p>
          <ul className="text-white text-lg mt-4">
            <li>Servicio de Sonorización</li>
            <li>Renta de Proyectores</li>
            <li>Servicios de Video y Fotografía</li>
            {/* Add more additional services */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Eventos;
