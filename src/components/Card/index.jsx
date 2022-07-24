import { Link } from 'react-router-dom'
import './style.scss'

function Card({ id, img, title }) {
  return (
    <Link to={`/Lodging/${id}`}>
      <div className="card">
        <div className="cardBg">
          <img className="cardImg" src={img} alt={`${title} cover`} />
          <p className="cardText">{title}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
