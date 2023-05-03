import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { CreateType } from '../components/modals/CreateType'
import { CreateBrand } from '../components/modals/CreateBrand'
import { CreateDevice } from '../components/modals/CreateDevice'

/**
* @author
* @function Admin
**/

export const Admin = (props) => {


  const [brandVisible,setBrandVisible] = useState(false)
  const [typeVisible,setTypeVisible] = useState(false)
  const [deviceVisible,setDeviceVisible] = useState(false)


  return(
    <Container className='d-flex flex-column'>
        <Button 
        variant={"outline-dark"} 
        onClick={()=>setTypeVisible(true)}
        className="mt-2">
          Добавить тип
        </Button>
        <Button 
        variant={"outline-dark"}
        onClick={()=>setBrandVisible(true)} 
        className="mt-2">
          Добавить брэнд
          </Button>
        <Button 
        variant={"outline-dark"} 
        onClick={()=>setDeviceVisible(true)}
        className="mt-2">
          Добавить устройство
          </Button>
        <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
        <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}/>
    </Container>
   )

 }