import { Link } from "react-router-dom"
import { formatDate, formatTitle } from "../helpers"
import { encode } from "js-base64"

export default function NewsItem(props){
  const item = props.item
  return <div className="news-item">
    <div className="box">
      <div className="img-box">
        <img src={item.image} alt={item.title} onError={(e)=>{
          e.target.src='./assets/images/news-no-pic.jpg'
        }} />
      </div>
      <div className="detail-box">
        <div>
          <h5>
            {formatTitle(item.title)}
          </h5>
          <p>
            {item.text}
          </p>
        </div>
        <div className="options">
          <h6>
            {formatDate(item.publish_date)}
          </h6>
          <Link to={encode(item.url)}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  </div>
}