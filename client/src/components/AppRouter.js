import React from 'react'
import {Routes,Route,Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

/**
* @author
* @function AppRouter
**/

export const AppRouter = (props) => {
    const isAuth=false
  return(
    <Routes>
        {isAuth && authRoutes.map(({path,Components})=>
            <Route key={path} component={Components} exact/>
        
        )}
         {publicRoutes.map(({path,Components})=>
            <Route key={path} component={Components} exact/>
        
        )}
        <Redirect to={SHOP_ROUTE}/>
    </Routes>
   );

 }