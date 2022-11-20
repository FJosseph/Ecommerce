import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormProduct from './FormProducts';

function AddProduct() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow}>
        Add Product
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a product!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormProduct/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddProduct