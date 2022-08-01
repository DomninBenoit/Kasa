import './style.scss'

const Host = ({ host }) => {
  return (
    <div className="host">
      <p className="hostName">{host.name}</p>
      <img
        className="profilPictureHost"
        src={host.picture}
        alt="profilPictureHost"
      />
    </div>
  )
}

export default Host
