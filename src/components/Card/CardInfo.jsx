const CardInfo = ({ nombre, descripcion, precio }) => {
    return (
        <div className="card__content">
        <h3>{nombre}</h3>
        <p className="card__description">{descripcion}</p>
        <span className="card__price">{precio}€ / noche</span>
        </div>
    );
};

export default CardInfo;
