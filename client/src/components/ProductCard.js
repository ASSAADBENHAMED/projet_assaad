import React from 'react'
import { Card } from 'react-bootstrap'

function ProductCard({product}) {
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
      {product.desc}
      </Card.Text>
      <Card.Text>
      {product.price}
      </Card.Text>
      <Card.Text>
      {product.qty}
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}

export default ProductCard