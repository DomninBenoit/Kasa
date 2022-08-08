import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.PNG'
import './style.scss'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo-kasa" className="logo" />
      <div className="nav">
        <Link className="accueil" to="/">
          Accueil
        </Link>
        <Link className="about" to="/about">
          A Propos
        </Link>
      </div>
    </div>
  )
}

export default Header
