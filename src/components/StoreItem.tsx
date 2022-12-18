import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps ) => {
  return (
    <Card>
        <Card.Img variant="top" src={imgUrl} height='200px' style={{ objectFit: "cover" }} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {formatCurrency(price)}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Link to={`/${id}`}>
            <Button variant="primary">Product Details</Button>
            </Link>
        </Card.Footer>
    </Card>
  )
}

export default StoreItem
