import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCategory() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category, setCategory] = useState('')
  const handleChange = (e)=>{
    setCategory(e.target.value)
  }
  return (
    <>
      <Button onClick={handleShow}>
        Add New Category
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value={category} onChange={handleChange}></input>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCategory