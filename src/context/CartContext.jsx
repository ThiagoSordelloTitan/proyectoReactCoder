import React, { useState, useContext} from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);



const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const BorrarCarrito = () => setCart([]);


    const AgregarProducto = (item, cantidad) => {
        if(EstaEnElCarrito(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad} : producto
            }));
        } else { 
            setCart([...cart, {...item, cantidad }]);
        }
    }

    console.log("carrito: ", cart);

    const EstaEnElCarrito = (id) => {
        return cart.find(producto => producto.id === id) ? true : false;
    }

    const RemoverProducto = (id) => setCart(cart.filter(producto => producto.id !== id));


    return ( 
        <CartContext.Provider value={{
            BorrarCarrito,
            EstaEnElCarrito,
            RemoverProducto,
            AgregarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider