import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { TypeBar } from '../components/TypeBar'
import { BrandBar } from '../components/BrandBar'



/**
* @author
* @function Shop
**/

export const Shop = (props) => {
  return(
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
        </Col>
      </Row>
    </Container>
   )

 }