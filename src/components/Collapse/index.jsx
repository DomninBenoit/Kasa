import { useState } from 'react'
import './style.scss'

const Collapse = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="collapse">
      <div className="collapseTitle" onClick={() => setIsOpen(!isOpen)}>
        {title}

        <svg
          className="svg"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              d="M13.8495 9.23864L15.2079 7.86941L7.60994 0.261718L0.0120036 7.87711L1.37042 9.23864L7.60994 2.9848L13.8495 9.23864Z"
              fill="white"
            />
          ) : (
            <path
              d="M1.3705 0.761356L0.0120851 2.13059L7.61002 9.73828L15.208 2.1229L13.8495 0.761357L7.61002 7.0152L1.3705 0.761356Z"
              fill="white"
            />
          )}
        </svg>
      </div>
      {isOpen && (
        <div className="collapseText">
          {Array.isArray(text) ? (
            <ul className="collapseList">
              {text.map((equip) => (
                <li className="collapseListItem" key={equip}>
                  {equip}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text">{text}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
