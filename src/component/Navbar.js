import React from 'react'
import {Link} from 'react-router-dom'  
import { useSelector } from 'react-redux'

const Navbar = () => {

  const allItemAdded = useSelector((state) => state.cart)

  return (
    <div className='logo' style={{display: 'flex' , justifyContent: 'space-between'}}>
        <span > Redux Store</span>
        <div>
            <Link  className='navLink' to= "/"> Home </Link>
            <Link className='navLink' to= "/Cart">Cart</Link>
            <span className='cartCount'>Cart items: {allItemAdded.length}</span>
        </div>
    </div>
  )
}

export default Navbar