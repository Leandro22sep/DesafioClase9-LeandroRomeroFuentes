import React from 'react'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';

const Cart = () => {
  const {carrito} = useContext(CartContext)
  console.log(carrito)
  return (
    <div>Cart</div>
  )
}

export default Cart