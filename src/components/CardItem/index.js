// Write your code here.
import './index.css'

const CardItem = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item

  return (
    <li className={className}>
      <div className="detailscontainer">
        <h1 className="cardheading">{title}</h1>
        <p className="cardpara">{description}</p>
      </div>
      <div className="imagecontainer">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
