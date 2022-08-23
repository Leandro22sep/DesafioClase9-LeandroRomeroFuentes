import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { customFetch } from "../../assets/customFetch";
import { productos } from "../../assets/productos";
import CartWidget from "../CartWidget";
const NavBar = (props) => {
    const [navLinks, setNavLinks] = useState([]);

        useEffect(() => {
            customFetch(productos)
              .then(arrayProductos => arrayProductos.map(producto => producto.categoria))
              .then(arrayCategorias => setNavLinks([...new Set(arrayCategorias)]))
          },[])
    if(props.type === "header"){
        return(
            <>
                <nav className="nav">
                    {navLinks.map((element, index) => {
                        return <Link to={`/categoria/${element}`} key={index}>{element}</Link>
                    })}
                    <CartWidget></CartWidget>
                </nav>
            </>
        )
    }else if(props.type === "footer"){
        return(
            <>
                <nav className="nav">
                {navLinks.map((element, index) => {
                        return <Link to={`/categoria/${element}`} key={index}>{element}</Link>
                    })}
                </nav>
            </>
        )
    }
    
}

export default NavBar;