import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card/Card.jsx";
import items from "./data/items.js";

import { BsGrid } from "react-icons/bs";
import { PiListBold } from "react-icons/pi";

function App() {
  const [viewMode, setViewMode] = useState("grid"); // grid | list

  return (
    <>
      <Header />

      {/* Toggle de vista */}
      <div className="view-toggle">
        <button
          className={viewMode === "grid" ? "active" : ""}
          onClick={() => setViewMode("grid")}
          aria-label="Vista en cuadrícula"
        >
          <BsGrid />
        </button>

        <button
          className={viewMode === "list" ? "active" : ""}
          onClick={() => setViewMode("list")}
          aria-label="Vista en lista"
        >
          <PiListBold />
        </button>
      </div>

      {/* Productos */}
      <main className={`products ${viewMode}`}>
        {items.map((item) => (
          <Card
            key={item.id}
            nombre={item.nombre}
            precio={item.precio}
            imagenes={item.imagenes}
            descripcion={item.descripcion}
            viewMode={viewMode}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
