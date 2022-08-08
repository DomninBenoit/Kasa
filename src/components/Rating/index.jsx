import { useEffect, useState } from 'react'
import './style.scss'

const Rating = ({ rating }) => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    let color = ''
    for (let i = 0; i < 5; i++) {
      color = rating > i ? '#FF6060' : '#E3E3E3'
      const svg = (
        <svg
          className="star"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          key={i}
        >
          <path
            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
            fill={color}
          />
        </svg>
      )
      setStars((state) => [...state, svg])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="listStars">{stars}</div>
}

export default Rating
