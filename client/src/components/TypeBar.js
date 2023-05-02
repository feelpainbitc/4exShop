import { observer } from "mobx-react-lite";
import React, { useContext } from 'react';
import { Context } from '..';



/**
* @author
* @function TypeBar
**/

export const TypeBar = observer((props) => {

    const {device}=useContext(Context)
  return(
    <li className="typebar">
        {device.types.map(type=>
            <ul>{type.name}</ul>
            )}
    </li>
   )

 });