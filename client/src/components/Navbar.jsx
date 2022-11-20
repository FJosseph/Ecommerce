import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddProduct from './Modal';
import { getProductsBySearch } from '../redux/actions';
import { useDispatch } from 'react-redux';

function NavBar() {
  const [productName, setProductName] = useState('')
  const dispatch = useDispatch()
  const handleInput = (e)=>{
    setProductName(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(getProductsBySearch(productName))
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <AddProduct/>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleInput}
              value={productName}
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;