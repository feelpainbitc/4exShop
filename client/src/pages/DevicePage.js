import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'

import bigstar from '../assets/Star 1.png'
import { fetchOneDevice } from '../http/deviceAPI'


/**
* @author
* @function DevicePage
**/

export const DevicePage = (props) => {
  const [device,setDevice]= useState({info:[]})
  const {id}=useParams()
  
  useEffect(()=>{
    fetchOneDevice(id).then(data=>setDevice(data))
  },[])


  return(
    <Container className="mt-3">
      <Row>
      <Col md={4}>
          <Image height={300} width={300} src={process.env.REACT_APP_API_URL + device.img}/>
      </Col>

      <Col md={4}>
          <Row className='d-flex flex-column align-items-center justify-content-center'>
            <h2>{device.name}</h2>
            <div
            className="d-flex align-items-center justify-content-center"
            style={{background:`url(${bigstar}) no-repeat center center`,width:240,height:240,backgroundSize:'cover', fontSize:68}}
            >{device.rating}</div>
          </Row>
      </Col>

      <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width:300,height:300,fontSize:32, border:'5px solid lightgray'}}
          >
            <h3>{device.price}</h3>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
      </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Характеристики</h2>
        {device.info.map((info,index)=>
          <Row key={info.if}
          style={{background:index%2===0 ? 'lightgray' : 'transparent',padding:10}}
          >
            {info.title}:{info.description}
          </Row>
          )}
      </Row>
      
    </Container>
   )

 }