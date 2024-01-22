import './index.scss';
import img_1 from 'assets/fotos/foto_ori_1.jpg'
import img_2 from 'assets/fotos/foto_ori_3.jpg'
import img_3 from 'assets/fotos/foto_ori_2.jpg'
import img_4 from 'assets/fotos/foto_ori_4.jpg'
import img_5 from 'assets/fotos/foto_ori_5.jpg'
import img_6 from 'assets/fotos/foto_ori_6.jpg'
import img_7 from 'assets/fotos/foto_ori_7.jpg'
import excelencia from 'assets/logos/excelencia_castrense.png'
import { Slider } from 'infinite-react-carousel'

export default function ChooseGuide () {  
  const images =[
    {
      img: img_1,
      text: 
        <div className='contenedor_img_1 top'>
          <div className='text_1'>Convenio con las</div>
          <div className='text_2 left'>FFAA</div>
        </div> 
    },
    {
      img: img_2,
      text: 
        <div className='contenedor_img_1'>
          <div className='text_1'>Proyecto de</div>
          <div className='text_2'>Aula Virtual</div>
        </div> 
    },
    {
      img: img_3,
      text: 
        <div className='contenedor_img_1'>
          <div className='text_2'>CADE 2023</div>
          
        </div> 
    },
    {
      img: img_4,
      text: 
        <div className='contenedor_img_1'>
          <div className='text_1'>Convenio con</div>
          <div className='text_2'>Colegios Militares</div>
        </div> 
    },
    {
      img: img_5,
      text: 
        <div className='contenedor_img_1'>
          <div className='text_1'>Reconocimiento</div>
          <div className='text_2'>Académico</div>
        </div> 
    },
    {
      img: img_6,
      text: 
        <div className='contenedor_img_1'>
          <div className='text_1'>Contribución con</div>
          <div className='text_2'>Bibliotecas del Ejército</div>
        </div> 
    },
    {
      img: img_7,
      text: 
        <div className='contenedor_img_1'>
          <div className='text_1'>Somos padrinos de</div>
          <div className='text_2'>Promociones</div>
        </div>
    },
  ]
  const settings =  {
    dots: true,
    className: 'carrousel',
    duration: 200,
  };
  return (
    <section className='home-6'>
      <div className="container">
        <div className="home-6-content">
          <div className='home-6_text'>
            <p>Tu acceso directo a la</p>
            <img className='home-6_text_img' src={excelencia} alt='elige guide'/>
          </div>
          <div>
            <Slider { ...settings }>
              {images.map((item) => (
                <div className='contenedor'>
                  <img className='contenedor_img'
                  src={item.img}
                  style={{width:"100%"}}
                  key={Math.random().toString(32)}
                  />
                  {item.text}
                </div>
                
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
    
  )
}
    