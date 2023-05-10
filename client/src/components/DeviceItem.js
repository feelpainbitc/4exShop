import React from 'react'
import {useNavigate} from 'react-router-dom'

import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Image from 'react-bootstrap/esm/Image'
import star from '../assets/Vector.png'
import { DEVICE_ROUTE } from '../utils/consts'

/**
* @author
* @function DeviceItem
**/

export const DeviceItem = ({device}) => {
    const navigate=useNavigate();
  return(
    <Col md={3} className="mt-3" onClick={()=>navigate(DEVICE_ROUTE+'/'+device.id)}>
        <Card style={{width:160,cursor:'pointer'}} border='dark'>
            <Image width={148} height={148} src={process.env.REACT_APP_API_URL + device.img} className="align-self-center mt-1"/>
            <div className="d-flex justify-content-between align-items-center mt-1">
                <div className='text-black-50'>{device.brandId}</div>
                <div className="d-flex align-items-center ">
                    <div>{device.rating}</div>
                    <Image width={18} height={18} src={star}/>
                </div>
            </div>
            <div>{device.name}</div>
        </Card>
    </Col>
   )

 }