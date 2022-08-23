import React from 'react'
import ItemDetail from '../ItemDetail';
import { useState, useEffect } from 'react'
import { customFetch } from '../../assets/customFetch';
import { productos } from '../../assets/productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [productoDetail, setProductoDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    customFetch(productos)
      .then(data => {
        setLoading(true)
        setProductoDetail(data.find(item => item.id == id))
      })
  }, [id])

  return (
    <>
      {!loading && <div>cargando...</div>}
      {loading && <ItemDetail producto={productoDetail} />}
    </>
  )
}

export default ItemDetailContainer