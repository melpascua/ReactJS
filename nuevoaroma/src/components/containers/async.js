const productos = [
    {
        "id": "SASD4",
        "nombre": "Cafetera de Filtro",
        "precio": 70,
        "imagen": "../../../public/images/maquina-de-cafe-de-filtro (2).png"
    },

    {
        "id": "SDSE6",
        "nombre": "Cafetera Express",
        "precio": 100,
        "imagen": "../../../public/images/maquina-de-cafe-express.png"
    },

    {
        "id": "YGHD7",
        "nombre": "Cafetera Molinillo",
        "precio": 85,
        "imagen": "../../../public/images/maquinade-de-cafe-molinillo.png"
    },

    {
        "id": "KIOP6",
        "nombre": "Café Molido",
        "precio": 25,
        "imagen": "../../../public/images/cafe-molido.png"
    },

    {
        "id": "OPSY2",
        "nombre": "Granos de Café",
        "precio": 30,
        "imagen": "../../../public/images/Sin título-1.png"
    },
    {
        "id": "ODYV5",
        "nombre": "Cápsulas",
        "precio": 40,
        "imagen": "../../../public/images/capsulas-nespresso.png"
    },
    {
        "id": "OTFC7",
        "nombre": "Vasos Reutilizables",
        "precio": 20,
        "imagen": "../../../public/images/vasos-reutilizables.png"
    },
    {
        "id": "YUCH0",
        "nombre": "Tazas Personalizables",
        "precio": 30,
        "imagen": "../../../public/images/taza-reutilizable.png"
    },
    {
        "id": "JFUC4",
        "nombre": "Almacen",
        "precio": 15,
        "imagen": "../../../public/images/dulce-de-leche.png"
    }
];

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    });
};

export const obtenerProductosId = (productoId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}