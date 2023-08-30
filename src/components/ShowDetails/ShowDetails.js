import React, { useState, useEffect } from 'react'
import "./ShowDetails.css"
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../Button/Button';

const ShowDetails = () => {
  const { id } = useParams()
  console.log(id)
  const [showDet, setShowDet] = useState(null)
  useEffect( () => {
    fetch("https://api.tvmaze.com/shows/"+id)
      .then(res => res.json())
      .then(data => setShowDet(data))
    
  }, [])
  console.log(showDet)
  // return showDet ? <ShowDetails show={showDet} /> : <div>Loading...</div>
  return (
    showDet ?
    // <div className='row'>
    //   <div className='show-image' >
    //     <img height="100%" alt='movie poster' src={(showDet.image && showDet.image.medium) ? showDet.image.medium : ""} />
    //   </div>
    //   <div className="show-brief">
    //     <div>{showDet.name}</div>
    //     <div dangerouslySetInnerHTML={{__html: showDet.summary}} />
    //   </div>
    //   <div className="show-info">
    //     <div>showDet Info</div>
    //     <div>
    //     <div>Language: {showDet.language}</div>
    //     <div>Type: {showDet.type}</div>
    //     <div>Status: {showDet.status}</div>
    //     <div>Network: {showDet.network.name}</div>
    //     <div>genres: {[...showDet.genres]}</div>

    //     </div>
    //     <button>BOOK NOW</button>
    //   </div>
    // </div> :
    <div className='show-details'>
    <Row>
      <Col>
        <div className='show-image' >
          <img height="100%" alt='movie poster' src={(showDet.image && showDet.image.medium) ? showDet.image.medium : ""} />
        </div>
      </Col>
      <Col xs={6}>
        <div className="show-brief">
          <div className='show-titles'>{showDet.name}</div>
          <div dangerouslySetInnerHTML={{__html: showDet.summary}} />
        </div>
      </Col>
      <Col>
        <div className="show-info">
          <div className='show-titles'>Show Info</div>
          <div className='show-info-text-container'>
            <div className='show-info-text'>Language: {showDet.language}</div>
            <div className='show-info-text'>Type: {showDet.type}</div>
            <div className='show-info-text'>Status: {showDet.status}</div>
            <div className='show-info-text'>Network: {showDet.network.name}</div>
            <div className='show-info-text'>genres: {[...showDet.genres].join(", ")}</div>
          </div>
          <Button text="watch now" />
        </div>
      </Col>
    </Row>
    
  </div> :
  <div className='loading-screen'> Loading... </div>
  ) 
} 

export default ShowDetails