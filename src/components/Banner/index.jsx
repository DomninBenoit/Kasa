import './style.scss'
import bannerHome from '../../assets/IMG.png'
//import bannerAbout from '../../assets/about.png'

function Banner() {
  return (
    <div className="bannerHome">
      <img src={bannerHome} alt="bannière" />
      <div className="bannerBg"></div>
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner
