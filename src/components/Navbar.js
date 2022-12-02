import React , {useState} from 'react'
import "./navbar.css"
import {SiHomeadvisor} from 'react-icons/si'
import {BiMenuAltLeft} from 'react-icons/bi'
import{RxCross2} from 'react-icons/rx';

const Navbar = () => {

    // usestate 
    const [click ,setClick] = useState(false)
    const handleClick = ()=>setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><SiHomeadvisor />Rent</span>Wise</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                <li><a href="#">Buy</a></li> 
                <li><a href="#">Sell</a></li>
                <li><a href="#">Manage</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
            <button className='btn'>Get started</button>
            <div className='ham-menu' onClick={handleClick}>
                {click ? (<RxCross2 className='icon' />) : (<BiMenuAltLeft  className='icon'/>) } 
            </div>
        </div>
    </div>
  )
}

export default Navbar