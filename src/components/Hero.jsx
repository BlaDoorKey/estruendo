import React, { useRef } from "react";

const Hero = () => {
  const audioRef = useRef(null);

  // Function to play the sound
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <img
            src="logo.png"
            alt="Party Image"
            className="mx-auto w-1/2 md:w-1/3 lg:w-1/4 mb-6 ease-in cursor-pointer hover:opacity-75"
            onClick={playSound}
          />
          <audio
            ref={audioRef}
            src="Hallucination.mp3"></audio>
          <h1 className="text-white text-5xl font-semibold">Estruendo Organización</h1>
          <p className="text-white text-lg mt-4 max-w-md text-center">
            Dando vida a experiencias inolvidables.
          </p>
          <a
            href="/contact"
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">Organicemos tu evento!</span>
            </span>
          </a>
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-white text-sm">
            &copy; 2023 Estruendo Organización. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <div className="bg-white/70 py-12 hover:scale-y-110 transition ease-in overflow-hidden">
        <div className="container mx-auto text-center w-1/2">
          <h2 className="text-3xl font-semibold mb-2 text-red-600">¿Quíenes somos?</h2>
          <p className="text-lg text-black italic">
            Somos una organización con una experiencia de 35 años en la atención de eventos,
            integrando con el tiempo todos los elementos necesarios para otorgar en nuestro servicio
            un mayor realce a su celebración.
          </p>
        </div>
      </div>
      <div className="bg-gray-100/70 py-12 hover:scale-y-110 transition ease-in overflow-hidden">
        <div className="container mx-auto text-center w-1/2">
          <h2 className="text-3xl font-semibold mb-2 text-red-600">Servicios</h2>
          <p className="text-lg text-black italic">
            Desde el diseño conceptual hasta la ejecución, ofrecemos una gama de servicios
            personalizados para satisfacer sus necesidades del evento. Ya sean bodas, reuniones
            corporativas o fiestas privadas, tenemos la experiencia para hacerlo extraordinario.
          </p>
        </div>
      </div>
      <div className="bg-white/70 py-12 hover:scale-y-110 transition ease-in overflow-hidden">
        <div className="container mx-auto text-center w-1/2">
          <h2 className="text-3xl font-semibold mb-2 text-red-600">Somos la mejor opción</h2>
          <p className="text-lg text-black italic">
            Nuestro compromiso con la excelencia, la creatividad y la ejecución perfecta nos
            distingue. Nosotros tomamos Estamos orgullosos de ofrecer experiencias excepcionales que
            dejan una impresión duradera en usted y tus invitados.
          </p>
          <div className="mx-auto w-full grid place-items-center">
            <img
              src="sponge.gif"
              alt="Spongebob"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
