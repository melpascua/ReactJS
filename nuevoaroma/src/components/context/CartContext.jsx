import { createContext, useState } from "react";


export const CartContext = createContext({
    carrito: []
});

export const Proveedor = ({children}) => {
    const [carrito, setCarrito] = useState([])
    
    console.log(carrito)

    const agregarProducto = (prod, cantidad) => {

        if (!productoAgregado(prod.id)) {

            setCarrito(prev => [...prev, {...prod, cantidad}])
        } else {
            console.error("El producto ya fue agregado")
        };
    };

    const eliminarProducto = (prodId) => {
        
        const actualizacion = carrito.filter(prod => prod.id !== prodId)
        setCarrito(actualizacion)
    };

    const limpiar = () => {
        setCarrito([])
    };

    const enElCarrito = (prodId) => {
        
        return carrito.some(prod => prod.id === prodId)
    };

    return (
        <CartContext.Provider value={{carrito, agregarProducto, eliminarProducto, limpiar, enElCarrito}}>
            {children}
        </CartContext.Provider>
    );
};