import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";
import Eventos from "./components/Eventos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/">
      <div className="min-h-screen bg-[url('./components/assets/localop.jpg')] bg-cover bg-repeat">
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
            element={<Hero />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
