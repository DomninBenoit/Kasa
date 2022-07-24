import GalleryItem from '../GalleryItem'
import datas from '../../data/data.json'

const Gallery = () => {
  const pathname = window.location.pathname
  const split = pathname.split('/')
  const idGal = split[2]
  return (
    <div className="carousel">
      {datas
        .filter((data) => data.id.includes(idGal))
        .map(({ pictures }) => (
          <GalleryItem pictures={pictures} />
        ))}
    </div>
  )
}

export default Gallery
