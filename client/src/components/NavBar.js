import React, { useContext } from 'react'
import { Context } from '../index'
import '../styles/navbar.css'

/**
* @author
* @function NavBar
**/

export const NavBar = (props) => {
    const {user}=useContext(Context)
  return(
    <div className='navbar'>
        <div className='navbar_left'>
            <button className='btns'>Для мужчин</button>
            <button className='btns'>Для женщин</button>
            <button className='btns'>Унисекс</button>
        </div>
        <div className='logo'>
            4EX SHOP
        </div>
        <div className='navbar_right'>
            <div className='basket'>Basket</div>
            <div className='profile'>Profile</div>
        </div>
    </div>  
   )

 }