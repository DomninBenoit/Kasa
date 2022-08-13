import Header from '../../components/Header'
import Gallery from '../../components/Gallery'
import './style.scss'
import { useParams } from 'react-router-dom'
import datas from '../../data/data.json'
import Host from '../../components/Host'
import Tags from '../../components/Tags'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Footer from '../../components/Footer'
import ErrorPage from '../ErrorPage'

const Lodging = () => {
  const { id } = useParams()
  const idGal = datas.find((data) => data.id === id)
  return idGal === undefined ? (
    <ErrorPage />
  ) : (
    <div>
      <Header />
      <Gallery pictures={idGal.pictures} />
      <div className="tlahr">
        <div className="tla">
          <p className="title">{idGal.title}</p>
          <p className="location">{idGal.location}</p>
          <Tags tags={idGal.tags} />
        </div>
        <div className="hr">
          <Host host={idGal.host} />
          <Rating rating={idGal.rating} />
        </div>
      </div>
      <div className="collapseLodging">
        <Collapse title="Description" text={idGal.description} />
        <Collapse title="Équipements" text={idGal.equipments} />
      </div>
      <Footer />
    </div>
  )
}

export default Lodging
