import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

/**
* @author
* @function CreateBrand
**/

export const CreateBrand = ({show,onHide}) => {

  const [value,setValue]=useState('')

  const addBrand=()=>{
    createBrand({name:value}).then(data=>{setValue('')})
    onHide()
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
        Добавить новый брэнд
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control
            value={value}
            onChange={e=>{setValue(e.target.value)}}
            placeholder={'Введите название брэнда'}
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant={'outline-success'} onClick={addBrand}>Добавить</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
    </Modal.Footer>
  </Modal>
   )

 }