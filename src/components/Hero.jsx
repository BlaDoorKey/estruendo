// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video
        className="w-full h-full object-cover fixed top-0 left-0 -z-10"
        autoPlay
        loop
        muted>
        <source
          src="partytest.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <img
          src="logo.png"
          alt="Party Image"
          className="mx-auto w-1/2 md:w-1/3 lg:w-1/4 mb-6 hover:animate-spin ease-in"
        />
        <h1 className="text-white text-5xl font-semibold">Estruendo Organización</h1>
      </div>
    </div>
  );
};

export default Hero;
