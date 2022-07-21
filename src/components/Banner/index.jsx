import './style.scss'
import bannerHome from '../../assets/IMG.png'
import bannerAbout from '../../assets/about.png'

function Banner(props) {
  return props.page === 'home' ? (
    <div className="bannerHome">
      <img src={bannerHome} alt="bannière" />
      <div className="bannerBg"></div>
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div>
  ) : (
    <div className="bannerAbout">
      <img src={bannerAbout} alt="bannière" />
      <div className="bannerBg"></div>
    </div>
  )
}

export default Banner
