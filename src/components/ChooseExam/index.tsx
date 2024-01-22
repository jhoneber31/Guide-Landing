import './index.scss'
import psicologico from 'assets/fotos/cursos_2.jpg'
import apreciacion from 'assets/fotos/cursos_3.jpg'
import fisico from 'assets/fotos/cursos_4.jpg'
import conocimientos from 'assets/fotos/cursos_1.jpg'
import { Slider } from 'infinite-react-carousel'

export default  function ChooseExam() {
  const images = [conocimientos, psicologico, apreciacion, fisico];
  const settings =  {
    dots: true,
    className: 'carrousel',
    duration: 200,
  };
  return (
    <section className='home_5'>
      <div className="container">
      <div className="home-5-content">
        <div className='title'>PARA LOS EXÁMENES</div>
          <Slider { ...settings }>
            {images.map((item) => (
                <img
                className='img'
                src={item}
                style={{height:"100%"}}
                key={Math.random().toString(32)}
              />
            ))}
          </Slider>
        <div className="nav-container">
          <div className='content container'>
            <div className='content-row'>
              <div className='left'>
                <div className='circle'>1</div>
                <div className='content-text'>CONOCIMIENTOS<br/>APTITUD ACADÉMICA/PSICOMÉTRICO</div>
              </div>
              <div className='right'>
                <div className='circle'>2</div>
                <div className='content-text'>PSICOLÓGICO</div>
              </div>
            </div>
            <div className='content-row'>
              <div className='left'>
                <div className='circle'>3</div>
                <div className='content-text'>APRECIACIÓN GENERAL</div>
              </div>
              <div className='rigth'>
                <div className='circle'>4</div>
                <div className='content-text'>FÍSICO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}