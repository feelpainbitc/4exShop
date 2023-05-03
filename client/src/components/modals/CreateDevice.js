import React, { useContext, useState } from 'react'


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Context } from '../..';

/**
* @author
* @function CreateDevice
**/

export const CreateDevice = ({show, onHide}) => {


    
    const {device}=useContext(Context)
    const [info,setInfo]=useState([])

    const addInfo=()=>{
        setInfo([...info,{title:'', description:'', number:Date.now()}])
    }
    const removeInfo=(number)=>{
      setInfo(info.filter(i=>i.number!==number))
    }
  
  
    return(
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавить новое устройство
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
                {device.types.map(type=>
                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    )}
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
            <Dropdown.Menu>
                {device.brands.map(brand=>
                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                    )}
            </Dropdown.Menu>
        </Dropdown>
        <Form.Control
            className='mt-3'
            placeholder='Введите название устройства'
        />
                <Form.Control
            className='mt-3'
            placeholder='Введите стоимость устройства'
            type="number"
        />
                <Form.Control
            className='mt-3'
            placeholder='Приложите фотографию устройства'
            type="file"
        />
        
      </Form>
      <hr></hr>
      <Button
        variant={'outline-dark'}
        onClick={addInfo}
      >
        Добавить новое свойство
        </Button>
        {info.map(i=>
          <Row className='mt-3' key={i.number}>
            <Col md={4}>
              <Form.Control
                placeholder='Введите название характеристики'
              />
            </Col>
            <Col md={4}>
              <Form.Control
                placeholder='Введите описание характеристики'
              />
            </Col>
            <Col md={4}>
              <Button 
              onClick={()=>removeInfo(i.number)}
              variant={'outline-danger'}
              >
                Удалить
                </Button>
            </Col>
          </Row>
        )}
    </Modal.Body>
    <Modal.Footer>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
    </Modal.Footer>
  </Modal>
   )

 }