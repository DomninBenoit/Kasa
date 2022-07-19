import './style.scss'
import Card from '../Card'
import datas from '../../data/data.json'

function listCard() {
  return (
    <div className="listCard">
      {datas.map(({ id, cover, title }) => (
        <div key={id}>
          <Card img={cover} title={title} />
        </div>
      ))}
    </div>
  )
}

export default listCard
