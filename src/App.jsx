import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AudioPlayer audioSrc="Hallucination.mp3" />
      <div className="z-10">
        <Navbar />
      </div>
      <Hero />
    </>
  );
}

export default App;
