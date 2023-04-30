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
        <div className='logo'>4EX SHOP</div>
        <div className='btns'>
            <button className='navbar_adm'>Админ панель</button>
            <button className='navbar_ent'>Войти</button>
        </div>
    </div>
   )

 }