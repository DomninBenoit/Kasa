import './style.scss'
import logoFooter from '../../assets/LogoFooter.png'

function Footer() {
  return (
    <footer className="footer">
      <img className="logoFooter" src={logoFooter} alt="logoFooter" />
      <p className="textFooter">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
