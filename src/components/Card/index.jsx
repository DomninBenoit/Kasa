import './style.scss'

function Card({ img, title }) {
  return (
    <div className="card">
      <img className="cardImg" src={img} alt={`${title} cover`} />
      <p className="cardText">{title}</p>
    </div>
  )
}

export default Card
