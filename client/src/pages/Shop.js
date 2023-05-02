import React from 'react'

import "../styles/shop.css"
import { TypeBar } from '../components/TypeBar'

/**
* @author
* @function Shop
**/

export const Shop = (props) => {
  return(
    <div classname='container'>
      <div className='types'>
        <TypeBar/>
      </div>
      <div className='main'>
        <div className='brands'>Apple</div>
        <div className='cards'>apple</div>
      </div>
    </div>
   )

 }