import React from "react";

const Eventos = () => {
  return (
    <section className="bg-black/50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-green-600">Nuestros Paquetes de Eventos</h2>
        <p className="text-white text-lg mb-8">
          Les ofrecemos una gran variedad de paquetes para satisfacer sus necesidades, desde eventos
          pequeños hasta eventos masivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Audio</h3>
            <ul className="text-white">
              <li>Equipo de Audio adaptable</li>
              <li>Bocinas de alta calidad</li>
              <li>Capacidad de salon</li>
              {/* Add more package details */}
            </ul>
            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
              Ver Detalles
            </button>
          </div>

          {/* Package 2 */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Iluminación</h3>
            <ul className="text-white">
              <li>Moving Head, Scanner Intelligent</li>
              <li>Maquina de humo, burbujas y confetti</li>
              <li>Estrobos</li>
              {/* Add more package details */}
            </ul>
            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
              Ver Detalles
            </button>
          </div>

          {/* Package 3 */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Filmación</h3>
            <ul className="text-white">
              <li>Fotografía</li>
              <li>Ammpliaciones</li>
              <li>Proyección de pantalla grande.</li>
              {/* Add more package details */}
            </ul>
            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
              Ver Detalles
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-600">Tipos de Eventos</h2>
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
          <h2 className="text-3xl font-semibold mb-6 text-green-600">Servicios Adicionales</h2>
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
