import React from 'react'
import ItemList from '../ItemList'
import { customFetch } from '../../assets/customFetch'
import { useState, useEffect } from 'react'
import { productos } from '../../assets/productos'

const ItemListContainer = (props) => {

  const[listProductos,setListProductos] = useState([])
  const[loading,setLoading] = useState(false)
  useEffect(() => {
    customFetch(productos)
      .then(data => {
        setLoading(true)
        setListProductos(data)
      })
  },[])
  if(props.categoria === "todas"){
    return (
      <>
        {!loading && <div>cargando...</div>}
        {loading && <ItemList listProductos = {listProductos} categoria = "todas"/>}
      </>
    )
  }else if(props.categoria === "hoodies"){
    return(
    <>
      {!loading && <div>cargando...</div>}
      {loading && <ItemList listProductos = {listProductos} categoria= {"hoodies"}/>}
    </>
    )
  }else if(props.categoria === "camperas"){
    return(
    <>
      {!loading && <div>cargando...</div>}
      {loading && <ItemList listProductos = {listProductos} categoria= {"camperas"}/>}
    </>
    )
  }else if(props.categoria === "remeras"){
    return(
    <>
      {!loading && <div>cargando...</div>}
      {loading && <ItemList listProductos = {listProductos} categoria= {"remeras"}/>}
    </>
    )
  }
  
}

export default ItemListContainer