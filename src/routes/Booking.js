import React from 'react'
import ShowDetails from '../components/ShowDetails/ShowDetails'
import Navbar from '../components/Navbar/Navbar'

// const Booking = () => {

//   const { id, name } = useParams()
//   console.log(id)
//   const [showDet, setShowDet] = useState(null)
//   useEffect( () => {
//     fetch("https://api.tvmaze.com/shows/"+id)
//      .then(res => res.json())
//      .then(data => setShowDet(data))
    
//   }, [])

// return showDet ? <ShowDetails show={showDet} /> : <div>Loading...</div>
// }

const Booking = () => {
  return (
    <>
        <Navbar />
        <ShowDetails />
        {/* <Footer /> */}
    </>
  )
}

export default Booking
