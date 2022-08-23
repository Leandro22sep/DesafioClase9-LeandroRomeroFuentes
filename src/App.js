import React from 'react'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import MyProvider from './context/CartContext'

const App = () => {
  return (
    <BrowserRouter>
      <MyProvider>
        <Header type="header" />
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer categoria="todas" />}></Route>
            <Route path='/categoria/hoodies' element={<ItemListContainer categoria="hoodies" />}></Route>
            <Route path='/categoria/camperas' element={<ItemListContainer categoria="camperas" />}></Route>
            <Route path='/categoria/remeras' element={<ItemListContainer categoria="remeras" />}></Route>
            <Route path='/carrito' element={<Cart />}></Route>
            <Route path='/detalle/:id' element={<ItemDetailContainer />}></Route>
          </Routes>
        </main>
        <Footer type="footer" />
      </MyProvider>
    </BrowserRouter>
  )
}

export default App