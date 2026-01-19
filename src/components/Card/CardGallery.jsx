import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const CardGallery = ({ imagenes, children }) => {

    const [indiceActual, setIndiceActual] = useState(0);

    if (!imagenes || imagenes.length === 0) return null;

    const siguienteImagen = (e) => {
        e.stopPropagation();
        setIndiceActual((prev) =>
        prev === imagenes.length - 1 ? 0 : prev + 1
        );
    };

    const imagenAnterior = (e) => {
        e.stopPropagation();
        setIndiceActual((prev) =>
        prev === 0 ? imagenes.length - 1 : prev - 1
        );
    };

    return (
        <div className="card__image">
        <img
            src={imagenes[indiceActual]}
            alt="Imagen del alojamiento"
        />

        {/* Flechas */}
        <button className="card__arrow left" onClick={imagenAnterior}>
            <IoIosArrowDropleft />
        </button>

        <button className="card__arrow right" onClick={siguienteImagen}>
            <IoIosArrowDropright />
        </button>

        {/* Acciones (favorito) */}
        {children}
        </div>
    );
};

export default CardGallery;
