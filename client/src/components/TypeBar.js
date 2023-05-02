import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'

import ListGroup from 'react-bootstrap/esm/ListGroup'

/**
* @author
* @function TypeBar
**/

export const TypeBar = observer((props) => {
    const {device}=useContext(Context)
  return(
    <ListGroup>
      {device.types.map(type=>
        <ListGroup.Item key={type.id}>
            {type.name}
        </ListGroup.Item>
        )}
    </ListGroup>
   )

 })