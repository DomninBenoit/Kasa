import { Link } from 'react-router-dom'
import './style.scss'

const Error = () => {
  return (
    <div className="ErrorWrapper">
      <p className="ErrorTitle">404</p>
      <p className="ErrorSubtitle">
        Oups! La page que vous demandez n'existe pas.
      </p>
      {/*verifier utilité LinkHome*/}
      <div className="LinkHome">
        <Link className="link" to={'/'}>
          Retourner sur la page d'acccueil
        </Link>
      </div>
    </div>
  )
}

export default Error
