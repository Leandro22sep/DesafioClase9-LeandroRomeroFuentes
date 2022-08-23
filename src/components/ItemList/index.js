import React from 'react'
import Item from '../Item'

const ItemList = (props) => {
  if(props.categoria === "todas"){
    return (
      <section className='items'>
        {props.listProductos.map(producto => <Item key={producto.id} producto={producto} detail={false}/>)}
      </section>
    )
  }else if(props.categoria === "hoodies"){
    const arrayFiltrado = props.listProductos.filter(producto => producto.categoria === "hoodies");
    return (
      <section className='items'>
        {arrayFiltrado.map(producto => <Item key={producto.id} producto={producto} detail={false}/>)}
      </section>
    )
  }else if(props.categoria === "camperas"){
    const arrayFiltrado = props.listProductos.filter(producto => producto.categoria === "camperas");
    return (
      <section className='items'>
        {arrayFiltrado.map(producto => <Item key={producto.id} producto={producto} detail={false}/>)}
      </section>
    )
  }else if(props.categoria === "remeras"){
    const arrayFiltrado = props.listProductos.filter(producto => producto.categoria === "remeras");
    return (
      <section className='items'>
        {arrayFiltrado.map(producto => <Item key={producto.id} producto={producto} detail={false}/>)}
      </section>
    )
  }
  
}

export default ItemList