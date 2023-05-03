import React from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

/**
* @author
* @function CreateType
**/

export const CreateType = ({show, onHide}) => {
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
        Добавить новый тип
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control
            placeholder={'Введите название типа'}
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
    </Modal.Footer>
  </Modal>
   )

 }