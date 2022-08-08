import { useState } from 'react'
import './style.scss'

const Gallery = ({ pictures }) => {
  const [index, setIndex] = useState(0)

  const onNext = () => {
    index === pictures.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  const onPrevious = () => {
    index === 0 ? setIndex(pictures.length - 1) : setIndex(index - 1)
  }
  return (
    <div className="carousel">
      <div className="bgPicture">
        <img
          src={pictures[index]}
          alt="pictureActive"
          className="pictureActive"
        />
      </div>

      {pictures.length > 1 && (
        <>
          <svg
            onClick={() => onPrevious()}
            className="arrowLeft"
            viewBox="0 0 48 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" />
          </svg>
          <svg
            onClick={() => onNext()}
            className="arrowRight"
            viewBox="0 0 48 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" />
          </svg>
          <p className="pictureNumber">
            {index + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Gallery
