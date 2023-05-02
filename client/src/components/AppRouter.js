import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes } from '../routes'
import { publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

/**
* @author
* @function AppRouter
**/

export const AppRouter = (props) => {

    const isAuth=false
  return(
    <Routes>
        {isAuth===true && authRoutes.map(({path,Component})=>
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        {publicRoutes.map(({path,Component})=>
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
   )

 }