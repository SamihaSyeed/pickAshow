import React, { useState, useEffect } from 'react'
import { json } from 'react-router-dom'
import Card from '../Card/Card'

const MainComponent = () => {
  const [showCard, setShowCard] = useState([])
  useEffect( () => {
    fetch("https://api.tvmaze.com/shows")
     .then(res => res.json())
     .then(data => setShowCard(data))
    
  }, [])

  console.log(showCard)
  return (
    <div style={styles}>
        {showCard.map( item => {
      return <Card key={item.id} data={item} />
    })}
    </div>
  ) 
}
const styles = { 
    display: "grid",
    columnGap: "10px",
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    padding: '20px 30px',
   justifyItems:"center",
  
}
export default MainComponent