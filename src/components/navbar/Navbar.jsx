import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        {/* <img src="./src/assets/Borcelle.png" alt="" className='logo'/> */}
        <Link to={'/'}><h1>FoodBite</h1></Link>

        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active": " "}>home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active": " "}>menu</a>
          <a href='#app-download'  onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active": " "}>mobile-app</a>
          <a href='#footer'  onClick={()=>setMenu("contact us")} className={menu==="contact us"? "active": " "}>contact us</a>
        </ul>

        <div className="navbar-right">

          <img src="./src/assets/search_icon.png" alt="" />
          <div className="navbar-search-icon">
           <Link to ={'/cart'}><img src="./src/assets/basket_icon.png"alt="" /></Link> 
            <div className={getTotalCartAmount()===0 ? "" :"dot"}></div>

          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>


    </div>
  )
}

export default Navbar