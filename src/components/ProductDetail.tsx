import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const ProductDetail = ({ id, name, price, imgUrl, description }: StoreItemProps ) => {
  return (
    <Row>
       <Col md={6}>
              <Card>
                    <Card.Img variant="top" src={imgUrl} height='600px' style={{ objectFit: "cover" }} />
                </Card>
         </Col>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {formatCurrency(price)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/${id}`}>
                        <Button variant="primary"> + Add to Cart</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
    </Row>

  )
}

export default ProductDetail

