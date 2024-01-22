import './AppComponent.scss'
import { useState } from 'react';
import Slider from 'infinite-react-carousel';
import { AppComponent } from "./AppComponent";
import play from 'assets/icons/play.svg';

export const Carousel = () => {

  const app = AppComponent;
  const[clickIndex, setClickIndex]=useState(-999);
  const [modal, setModal] = useState(false);

  const handleImageClick = (index:number) => {
      setClickIndex(index);
  };

  const toggleModal = () => {
      setModal(!modal);
  }

  const handleImageClickAndToggleModal = (index:number) => {
      handleImageClick(index);
      toggleModal();
  };

  const settings =  {
    dots: true,
    className: 'carrousel',
    duration: 200,
  };

  return (
    <>
    <Slider { ...settings }>
    {app.map((item) => (
      <>
        <img
          src={item.imageUrl}
          alt={`m${item.id}`}
          onClick={() => handleImageClickAndToggleModal(item.id)}
          style={{height:"100%"}}
        />
      </>
      ))}
    </Slider>
    {modal && (
      <div className="modal">
        <div 
        onClick={toggleModal}
        className="overlay">
          <div className="modal-content">
            <iframe
              className="iframe-video"
              title="vimeo-player"
              src={app[clickIndex].video}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    )
    }
    </>
  )
}
