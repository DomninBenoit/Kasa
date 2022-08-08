import './style.scss'
import Card from '../Card'
import datas from '../../data/data.json'

function ListCard() {
  return (
    <div className="listCard">
      {datas.map(({ id, cover, title }) => (
        <Card key={id} id={id} img={cover} title={title} />
      ))}
    </div>
  )
}

export default ListCard
