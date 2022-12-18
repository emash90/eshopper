import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import storeItems from '../data/items.json'


const Details = () => {
    const { id } = useParams<{ id: string }>()
    const item = storeItems.find((item) => item.id === parseInt(id))
    if (!item) {
        return <h1>Item not found</h1>
    }

  return (
    <>
        <h1>{item.name}</h1>
        <ProductDetail {...item} />
    </>
  )
}

export default Details
