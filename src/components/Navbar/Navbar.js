import React, { useState } from 'react'
// import logo from ".../images/Logo.svg"
import "./Navbar.css"
import {ReactComponent as Logo} from "../images/Logo.svg"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import ShowForm from '../ShowForm'
import MainComponent from '../MainContent/MainContent'

const Navbar = () => {
  const [display, setDisplay] = useState("none")
  const handleClick = () => {
    console.log("hello")
    setDisplay("block")
  };
  return (
    <>
      <div className='navbar'>
          <Link to={"http://localhost:3000/"}>
            <Logo />
          </Link>
          <div style={{"display":"flex"}}>
            <Button text="Generate" onClick={handleClick} />
            <div>
              <i class="fa fa-search search-bar-icon" aria-hidden="true"></i>
              <input type="text" placeholder="Search..." className='search-bar' />
            </div>
          </div>
        </div> 
        <ShowForm displayValue={display} />
    </>
  )
}

export default Navbar