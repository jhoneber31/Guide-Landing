import './index.scss'
import logoguide from 'assets/logos/logo_guide_blanco.svg'
import logofb from 'assets/icons/fb_blanco.svg'
import logoinstagrand from 'assets/icons/ig_blanco.svg'
import logotiktok from 'assets/icons/tk_blanco.svg'
import logoyoutube from 'assets/icons/yt_blanco.svg'
import logoweb from 'assets/icons/web_blanco.svg'
import iconcelular from 'assets/icons/celular.svg'
import iconcorreo from 'assets/icons/correo.svg'
import iconhorario from 'assets/icons/horario.svg'
import iconubicacion from 'assets/icons/ubicación.svg'

function Footer({
  openDownloadModalAndSelectedSchool
}: any) {
  const footer_items = [
    {
      image: iconubicacion,
      text: 'Av. Defensores del Morro 957, Chorrillos, Lima'
    },
    {
      image: iconcelular,
      text: '937 281 688'
    },
    {
      image: iconcorreo,
      text: 'info@guideasesores.com'
    },
    {
      image: iconhorario,
      text: 'Siempre abierto'
    },
  ]
    return (
      <footer className='footer'>
        <div className="footer_container">
          <div className='footer_1'>
            <div className="footer_1_container">
              <div className="footer_1_footer_content">
                <div className="footer_1_footer_1">
                  <img className="footer_1_logo_footer img-fluid" src={logoguide} alt="logo"/>
                </div>
                <div className="footer_1_footer_2">
                  <div className="footer_1_items-footer">
                    <p className="footer_1_item redes">
                      <a target="_blank" href="https://www.facebook.com/GuidePreMilitar"><img src={logofb} alt=""/></a>
                      <a target="_blank" href="https://www.instagram.com/guide.premilitar/"><img src={logoinstagrand} alt=""/></a>
                      <a target="_blank" href="https://www.tiktok.com/@guide.premilitar"><img src={logotiktok}alt=""/></a>
                      <a target="_blank" href="https://www.youtube.com/channel/UC1Myn-eZj5UHXuxbIyWCc4Q"><img src={logoyoutube} alt=""/></a>
                      <a target="_blank" href="https://guideasesores.com/blog/"><img src={logoweb} alt=""/></a>
                    </p>
                    {
                      footer_items.map((item) => (
                        <div className="footer_1_item" key={Math.random().toString(32)}>
                          <p>
                            <span>
                              <img src={item.image} alt=""/>
                            </span>
                          { item.text }
                          </p>
                        </div>
                      ))
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_2'>
            <div className='footer_2_content'>
              <div className='buttons_header'>
                <h3>Descarga tu PROSPECTO:</h3>
              </div>
              <div className='buttons'>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('EMCH')}>EMCH</button>
                <div className='separador'> </div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('ENP')}>ENP</button>
                <div className='separador'> </div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('EOFAP')}>EOFAP</button>
                <div className='separador'></div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('EOPNP')}>EOPNP</button>
                <div className='separador'> </div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('ETE')}>ETE</button>
                <div className='separador'> </div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('CITEN')}>CITEN</button>
                <div className='separador'> </div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('ESOFA')}>ESOFA</button>
                <div className='separador'> </div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('EESTP PNP')}>EESTP PNP</button>
                <div className='separador'> </div>
                <button className='footer_2_content_button' onClick={() => openDownloadModalAndSelectedSchool('IESTPFFAA')}>IESTPFFAA</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    )
  }
  
  export default Footer;
  