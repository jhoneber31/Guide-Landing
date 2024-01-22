import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import './CarrouselSlider.scss'
/*assets*/
import arrowL from '../../assets/icons/arrowL-icon.svg'
import arrowR from '../../assets/icons/arrowR-icon.svg'
import m1 from '../../assets/Miniaturas/m1.png'
import m2 from '../../assets/Miniaturas/m2.png'
import m3 from '../../assets/Miniaturas/m3.png'
import m4 from '../../assets/Miniaturas/m4.png'
import m5 from '../../assets/Miniaturas/m5.png'
import m6 from '../../assets/Miniaturas/m6.png'
import m7 from '../../assets/Miniaturas/m7.png'
import m8 from '../../assets/Miniaturas/m8.png'

const CarouselSlider = () => {  

    

  return (
    <>
      <Slider>
        <Slide index={0}>
        <img src={m1} alt={`Miniatura 1`}/>
        </Slide>
        <Slide index={1}>
        <img src={m2} alt={`Miniatura 2`}/>
        </Slide>
        <Slide index={1}>
        <img src={m3} alt={`Miniatura 3`}/>
        </Slide>
        <Slide index={1}>
        <img src={m4} alt={`Miniatura 4`}/>
        </Slide>
        <Slide index={1}>
        <img src={m5} alt={`Miniatura 5`}/>
        </Slide>
        <Slide index={1}>
        <img src={m6} alt={`Miniatura 6`}/>
        </Slide>
        <Slide index={1}>
        <img src={m7} alt={`Miniatura 7`}/>
        </Slide>
        <Slide index={1}>
        <img src={m8} alt={`Miniatura 8`}/>
        </Slide>

        <div className="controls">
            <ButtonBack className="btn-arrow reverse-arrow">
                <img src={arrowL} alt="arrow" />
            </ButtonBack>
            <DotGroup className="dot-group" />
            <ButtonNext className="btn-arrow">
                <img src={arrowR} alt="arrow" />
            </ButtonNext>
        </div>
      </Slider>
    </>
  );
};

export default CarouselSlider;