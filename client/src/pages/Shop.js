import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { TypeBar } from '../components/TypeBar'



/**
* @author
* @function Shop
**/

export const Shop = (props) => {
  return(
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          
        </Col>
      </Row>
    </Container>
   )

 }