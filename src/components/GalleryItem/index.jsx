function GalleryItem({ pictures }) {
  console.log(pictures)
  return (
    <div className="carousel-item">
      <img src={pictures} alt="" />
    </div>
  )
}

export default GalleryItem
