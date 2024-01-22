import logo from '../../assets/logos/logo.svg';
import fb from '../../assets/icons/fb-icon.svg';
import ig from '../../assets/icons/ig-icon.svg';
import tk from '../../assets/icons/tk-icon.svg';
import yt from '../../assets/icons/yt-icon.svg';
import './Header.scss';


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content-header">
          <div className="logo">
            <img className="logo-header" src={logo} alt="" />
            <h3>La mejor PRE VIRTUAL <br className="br-logo" />FF.AA. & PNP / IESTPFFAA</h3>
          </div>
          <div className="media">
            <span>
              Síguenos en:
            </span>
            <div className="media-icons">
              <a href="https://www.facebook.com/GuidePreMilitar" target='blank'>
                <img src={fb} alt="" />
              </a>
              <a href="https://www.instagram.com/guide.premilitar/" target='blank'>
                <img src={ig} alt="" />
              </a>
              <a href="https://www.tiktok.com/@guide.premilitar" target='blank'>
                <img src={tk} alt="" />
              </a>
              <a href="https://www.youtube.com/channel/UC1Myn-eZj5UHXuxbIyWCc4Q" target='blank'>
                <img src={yt} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header