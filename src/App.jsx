import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";
import Eventos from "./components/Eventos";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/">
      <div className="min-h-screen bg-[url('./components/assets/localop.jpg')] bg-cover bg-repeat">
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
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<Hero />}
          />
          <Route
            path="/eventos"
            element={<Eventos />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
