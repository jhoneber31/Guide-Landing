import { useState } from "react";
import card1 from 'assets/fotos/card1-1.png';
import card2 from 'assets/fotos/card2-1.png';
import card3 from 'assets/fotos/card3-1.png';
import cartilla1 from 'assets/fotos/cartilla-1.png';
import cartilla2 from 'assets/fotos/cartilla-2.png';
import cartilla3 from 'assets/fotos/card3-2.png';

const cards = [
  {
    title: "OFICIALES",
    imageFront: card1,
    imageBack: cartilla1,
  },
  {
    title: "SUBOFICIALES",
    imageFront: card2,
    imageBack: cartilla2,
  },
  {
    title: "IESTPFFAA",
    imageFront: card3,
    imageBack: cartilla3,
  },
];

const Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <>
      {cards.map((tarjeta, index) => (
        <div
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
          className={`card ${hoveredIndex === index ? "hovered" : ""}`}
          key={index}
        >
          <div
            className={`card__image ${hoveredIndex === index ? "active" : ""}`}
          >
            <div className="card__front">
              <img src={tarjeta.imageBack} alt="" />
            </div>
            <div className="card__back">
              <img src={tarjeta.imageFront} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
