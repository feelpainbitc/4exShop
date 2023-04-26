import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';


/**
* @author
* @function AppRouter
**/

export const AppRouter = (props) => {
  const {user} = useContext(Context)

  console.log(user)

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