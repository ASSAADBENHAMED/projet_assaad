import React, { useState } from 'react'
import { Fragment } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProducts } from '../action/productActions';

function ProductAdd() {
    
 
   

  const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newProduct, setnewProduct] = useState({
        title:"",
        desc:"",
        image:"",
        price:"",
        qty:""
      });
  return (
    <div>
     <Fragment>
    <Button variant="dark" bg="dark" onClick={handleShow}>
      Add product
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body><Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Product title</Form.Label>
    <Form.Control type="text" placeholder="Enter a product name" onChange={(e)=>setnewProduct({...newProduct, title:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Product description</Form.Label>
    <Form.Control type="text" placeholder="Enter a product description" onChange={(e)=>setnewProduct({...newProduct, desc:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Product image url</Form.Label>
    <Form.Control type="text" placeholder="Enter a product image url" onChange={(e)=>setnewProduct({...newProduct, image:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Product Price</Form.Label>
    <Form.Control type="text" placeholder="Enter a product price" onChange={(e)=>setnewProduct({...newProduct, price:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Product qty</Form.Label>
    <Form.Control type="text" placeholder="Enter a product qty" onChange={(e)=>setnewProduct({...newProduct, qty:e.target.value})} />
  </Form.Group>
  </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{dispatch(addProducts(newProduct))}}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  </Fragment>
  </div>
  )
}

export default ProductAdd