// import viteLogo from '/vite.svg' ejemplo de importar imagenes
// components
import { Carousel } from "components/AppComponents/Carousel";
import Card from "components/AppComponents/Card";
import Header from "components/Header";
import Footer from "components/Footer";
import PaymentSection from "components/Visa";
import { Register } from "./components/AppComponents/Register"

// resources / assets
import student from './assets/fotos/student.png'
import wb from "./assets/icons/wb-icon.svg";
import plus from "./assets/icons/plus-icon.svg";
import subBanner from "./assets/icons/sub-banner.svg";
// style
import "./App.scss";
import ChooseExam from "components/ChooseExam";
import ChooseGuide from "components/ChooseGuide";
import React, { useState, useEffect } from 'react';
import { DownloadProspectModal } from "components/DownloadProspectModal";

function App() {
  
  const [showForm, setShowForm] = useState(false);

  interface EstiloBoton {
    position: string;
    transition: string;
    zIndex: number;
    bottom: string;
  }
  
  const [webButtonStyle, setWebButtonStyle] = useState<EstiloBoton>({
    position: 'fixed',
    transition: 'bottom 0.3s ease',
    zIndex: 10,
    bottom: window.innerWidth >= 1600 ? '20vh' : '15vh',  // Inicialmente a 20px arriba de la section 2
  });

  const [mobileButtonStyle, setMobileButtonStyle] = useState<EstiloBoton>({
    position: 'fixed',
    transition: 'bottom 0.3s ease',
    zIndex: 10,
    bottom: '35vh',  // Valor por defecto para dispositivos móviles
  });

  const handleClickBoton = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };


  const [downloadModalProspectState, setDownloadModalProspectState] = useState<{
    isShow: boolean;
    selectedSchool: null | string;
  }>({
    isShow: false,
    selectedSchool: null,
  });

  const openDownloadModalAndSelectSchool = (selectedSchool: string) => {
    setDownloadModalProspectState({ isShow: true, selectedSchool });
  };

  const closeDownloadModal = () => {
    setDownloadModalProspectState({ isShow: false, selectedSchool: null });
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section2Element = document.querySelector('.home-2') as HTMLElement;
      const section2Height = section2Element?.offsetHeight || 0;

      if (scrollY > 20) {
        if (window.innerWidth <= 425 && mobileButtonStyle.bottom !== '150px') {
          setMobileButtonStyle((prevStyle: EstiloBoton) => ({
            ...prevStyle,
            bottom: '14vh',
          }));
        } else if (webButtonStyle.bottom !== `${section2Height - 20}px`) {
          setWebButtonStyle((prevStyle: EstiloBoton) => ({
            ...prevStyle,
            bottom: `${section2Height - 20}px`,
          }));
        }
      } else {
        if (window.innerWidth <= 425 && mobileButtonStyle.bottom !== '390px') {
          setMobileButtonStyle((prevStyle: EstiloBoton) => ({
            ...prevStyle,
            bottom: '35vh',
          }));
        } else if (webButtonStyle.bottom !== '200px') {
          setWebButtonStyle((prevStyle: EstiloBoton) => ({
            ...prevStyle,
            bottom: window.innerWidth >= 1600 ? '20vh' : '15vh',
          }));
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [webButtonStyle, mobileButtonStyle]);
  
  return (
    <div className="home">
      <Header />
      <section className="home-1">
        <div className="container">
          <div className="home-1-content">
            <img className="home-1-student" src={student} alt="" />
            <span className="home-1-text">
              INGRESA A LAS <br /> ESCUELAS DE LAS <br /> FF.AA. & PNP <br /> IESTPFFAA
            </span>
            <button
             className="home-1-buttonR"
             onClick={handleClickBoton}
            >
            <span className="button-1-text">INSCRIBIRME</span>
            </button>  
            {showForm && (
              <Register
                selectedSchool="" 
                closeDownloadModal={handleCloseModal}
              />
            )}         
            <button className="home-1-buttonW mobile" style={mobileButtonStyle as React.CSSProperties}>
              <a href="https://wa.me/51937281688?text=Hola,%20estoy%20interesado%20en%20prepararme%20para%20la%20Escuela%20de%20..." target="_blank">
                <span className="button-2 button-2-left">Escríbenos </span>
                <img className="img-home1" src={wb} alt="" /> 
                <span className="button-2 button-2-right">
                  937 281 688   
                </span>
              </a>
            </button>
          </div>
        </div>
        <button className="home-1-buttonW web" style={webButtonStyle as React.CSSProperties}>
          <a href="https://wa.me/51937281688?text=Hola,%20estoy%20interesado%20en%20prepararme%20para%20la%20Escuela%20de%20..." target="_blank">
            <span className="button-2 button-2-left">Escríbenos </span>
            <img className="img-home1" src={wb} alt="" /> 
            <span className="button-2 button-2-right">
              937 281 688   
            </span>
          </a>
        </button>
      </section>
      <section className="home-2">
        <div className="container">
          <div className="home-2-content">
            <div className="home-2-left">
              <img src={plus} alt="" />
              <div className="home-text-anios">
                <span className="span-text span-text-up">7 AÑOS</span>
                <span className="span-text span-text-down">PREPARANDO</span>
              </div>
            </div>
            <span className="home-text-div">|</span>
            <img className="subBanner" src={subBanner} alt="" />
          </div>
        </div>
      </section>
      <section className="home-3">
        <div className="container">
          <div className="home-3-title">
            <h2>¡TÚ TAMBIÉN INGRESA!</h2>
          </div>
          <div className="home-3-carousel">
            <Carousel />
          </div>
        </div>
      </section>
      <section className="home-4">
        <div className="container">
          <div className="home-4-content">
            <div className="home-4-1">
              <h2>TE PREPARAMOS</h2>
            </div>
            <div className="home-4-1">
              <div className="home-4-1-cards">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChooseExam />
      <ChooseGuide />
      <PaymentSection />
      <Footer
        openDownloadModalAndSelectedSchool={openDownloadModalAndSelectSchool}
      />
      {downloadModalProspectState.isShow && (
        <DownloadProspectModal
          selectedSchool={downloadModalProspectState.selectedSchool as string}
          closeDownloadModal={closeDownloadModal}
        />
      )}
    </div>
  );
}
export default App;
