import React from 'react'
import {Switch,Route,Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';

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
    </Routes>
   );

 }