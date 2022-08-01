import './style.scss'

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <p className="tag" key={tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}

export default Tags
