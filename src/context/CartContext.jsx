import React, { useState, useContext} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const AgregarProducto = (item, cantidad) => {
        let nuevoCarrito;
        let producto = cart.find(producto => producto.id === item.id);
        if (producto) {
            producto.cantidad += cantidad;
            nuevoCarrito = [...cart];
        } else {
            producto = {...item, cantidad: cantidad};
            nuevoCarrito = [...cart, producto];
        }
        setCart(nuevoCarrito);
    }

    console.log("carrito: ", cart);

    const PrecioTotal = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    const TotalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)

    const BorrarCarrito = () => setCart([]);

    const EstaEnElCarrito = (id) => {
        return cart.find(producto => producto.id === id) ? true : false;
    }

    const RemoverProducto = (id) => setCart(cart.filter(producto => producto.id !== id));


    return ( 
        <CartContext.Provider value={{
            BorrarCarrito,
            EstaEnElCarrito,
            RemoverProducto,
            AgregarProducto,
            PrecioTotal,
            TotalProductos,
            cart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider