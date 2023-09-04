import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <img
            src="logo.png"
            alt="Party Image"
            className="mx-auto w-1/2 md:w-1/3 lg:w-1/4 mb-6 hover:animate-spin ease-in"
          />
          <h1 className="text-white text-5xl font-semibold">Estruendo Organización</h1>
          <p className="text-white text-lg mt-4 max-w-md text-center">
            Dando vida a experiencias inolvidables. Somos sus socios en la creación de la mayor
            Eventos y fiestas memorables.
          </p>
          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg shadow-md">
            Organicemos tu evento.
          </button>
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-white text-sm">
            &copy; 2023 Estruendo Organización. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <div className="bg-white/50 py-12">
        <div className="container mx-auto text-center w-1/2">
          <h2 className="text-3xl font-semibold mb-2">¿Quíenes somos?</h2>
          <p className="text-lg text-gray-700">
            Somos una organización con una experiencia de 35 años en la atención de eventos,
            integrando con el tiempo todos los elementos necesarios para otorgar en nuestro servicio
            un mayor realce a su celebración.
          </p>
        </div>
      </div>
      <div className="bg-gray-100/50 py-12">
        <div className="container mx-auto text-center w-1/2">
          <h2 className="text-3xl font-semibold mb-2">Servicios</h2>
          <p className="text-lg text-gray-700">
            Desde el diseño conceptual hasta la ejecución, ofrecemos una gama de servicios
            personalizados para satisfacer sus <necesidade></necesidade>s. necesidades del evento.
            Ya sean bodas, reuniones corporativas o fiestas privadas, tenemos la experiencia para
            hacerlo extraordinario.
          </p>
        </div>
      </div>
      <div className="bg-white/50 py-12">
        <div className="container mx-auto text-center w-1/2">
          <h2 className="text-3xl font-semibold mb-2">Somos la mejor opción</h2>
          <p className="text-lg text-gray-700">
            Nuestro compromiso con la excelencia, la creatividad y la ejecución perfecta nos
            distingue. Nosotros tomamos Estamos orgullosos de ofrecer experiencias excepcionales que
            dejan una impresión duradera en usted y tus invitados.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
