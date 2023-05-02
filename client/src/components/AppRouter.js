import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes } from '../routes'
import { publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

import {Context} from '../index'

/**
* @author
* @function AppRouter
**/

export const AppRouter = (props) => {

    const {user}=useContext(Context)
    console.log(user)
  return(
    <Routes>
        {user.isAuth===true && authRoutes.map(({path,Component})=>
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        {publicRoutes.map(({path,Component})=>
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
   )

 }