import { Link } from 'react-router-dom'
import './style.scss'

function Card({ id, img, title }) {
  return (
    <Link to={`/lodging/${id}`}>
      <div className="card">
        <img className="cardImg" src={img} alt={`${title} cover`} />
        <p className="cardText">{title}</p>
      </div>
    </Link>
  )
}

export default Card
