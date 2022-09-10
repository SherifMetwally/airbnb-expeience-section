
import './card.css'

export default function Card(props) {
  return (
    <div className="container hero">
       {props.openSpots === 0 && <div className="count-label"> Sold Out </div> }
       {props.openSpots != 0 && props.location === 'Online' && <div className="count-label"> {props.location} </div>}
       <img className="hero-image"  src={`../../images/${props.coverImg}`} alt=""/>
      <div className="hero-rating" >
      <img src={`../../images/Star 1.png`} alt="rating" />
      <label>{props.stats.rating}</label><label>({props.stats.reviewCount})</label> • <label> {props.location}</label> 
      </div>
      <p>{props.title}</p>
      <p> <b>From ${props.price}  </b>/ person</p>
    </div>
  );
}
