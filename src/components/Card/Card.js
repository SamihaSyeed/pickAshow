import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import Tag from '../Tag'
import star from "../images/star.png"

const Card = (props) => {
  const item = props.data
  return (
    <div className='show-card'>
        <Link to={`/bookTickets/${item.id}/${item.name}`} >
            <img className="show-img" src={(item.image && item.image.medium) ? item.image.medium : ""} />
            {item.rating.average && <div className="rating">
                <img width="15px" src={star} />
                <div>{item.rating.average}</div>
            </div>}
        </Link>
        <div className='show-name'>{item.name}</div>
        <div style={{display:"flex"}} >
        {item.genres.map((tag, index)=><Tag tagName={tag} key={index} />)}

        </div>
    </div> 
  ) 
} 


export default Card