import React, { useContext, useEffect } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { TypeBar } from '../components/TypeBar'
import { BrandBar } from '../components/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchTypes,fetchBrands, fetchDevices } from '../http/deviceAPI'
import { Pages } from '../components/Pages'



/**
* @author
* @function Shop
**/

export const Shop = observer((props) => {
  const {device}=useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=>device.setTypes(data))
    fetchBrands().then(data=>device.setBrands(data))
    fetchDevices(null,null,1,3).then(data=>{
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  },[])

  useEffect(()=>{
    fetchDevices(device.selectedType.id,device.selectedBrand.id,device.page,3).then(data=>{
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  },[device.page,device.selectedType,device.selectedBrand])

  return(
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
   )

 })