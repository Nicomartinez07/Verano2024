import React, { useState, useEffect } from "react"; // Importamos React y hooks de estado y efecto.
import "./MainContent.css"; // Importamos los estilos específicos para este componente.

// Definimos la interfaz 'Product' que describe la estructura de un producto.
interface Product {
  Id: number; // Identificador único del producto.
  Nombre: string; // Nombre del producto.
  Precio_venta: number; // Precio de venta del producto.
  Img: string; // URL de la imagen del producto.
}

// Definimos las propiedades del componente 'MainContent'.
interface MainContentProps {
  onAddProduct: (product: Product) => void; // Función que se llama al agregar un producto.
  searchTerm: string; // Término de búsqueda para filtrar productos.
}

// Componente principal 'MainContent'.
export default function MainContent({
  onAddProduct, // Propiedad para agregar productos.
  searchTerm, // Propiedad para el término de búsqueda.
}: MainContentProps) {
  const [products, setProducts] = useState<Product[]>([]); // Estado para almacenar productos.
  const [isLoading, setIsLoading] = useState(true); // Estado que indica si los productos están cargando.

  // MOSTRAR TODOS LOS PRODUCTOS.
  useEffect(() => {
    // Trae los productos desde el flask.
    fetch("http://127.0.0.1:5000/productos")
      .then((response) => response.json()) // Convierte la respuesta a formato JSON.
      .then((data: Product[]) => {
        setProducts(data); // Actualiza el estado de productos con los datos recibidos.
        setIsLoading(false); // Cambia el estado de carga a false.
      })
      .catch((error) => {
        console.error("Error fetching products:", error); // Manejo de errores en la consola.
        setIsLoading(false); // Cambia el estado de carga a false en caso de error.
      });
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez al montar.

  // Filtrar productos usando el término de búsqueda.
  const filteredProducts = products.filter(
    (product) => product.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra productos que contienen el término de búsqueda.
  );

  return (
    <div className="bg-[#ffffff]">
      {" "}
      {/* Contenedor principal con fondo blanco. */}
      {isLoading ? ( // Verifica si está cargando.
        <div className="spinner">Cargando...</div> // Muestra un spinner mientras se cargan los productos.
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {" "}
          {/* Contenedor de productos con márgenes y tamaño. */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {" "}
            {/* Diseño de cuadrícula para los productos. */}
            {filteredProducts.length > 0 ? ( // Verifica si hay productos filtrados.
              filteredProducts.map(
                (
                  product // Mapea cada producto filtrado para crear un componente.
                ) => (
                  <div key={product.Id} className="group">
                    {" "}
                    {/* Contenedor para cada producto. */}
                    <div className="block ">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        {" "}
                        {/* Contenedor de imagen. */}
                        <img
                          alt={product.Nombre} // Texto alternativo para la imagen.
                          src={product.Img} // Fuente de la imagen del producto.
                          className="h-full w-full object-cover object-center group-hover:opacity-75" // Estilos para la imagen.
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-900">
                        {product.Nombre}
                      </h3>{" "}
                      {/* Nombre del producto. */}
                      <div className="flex items-center justify-between mt-1">
                        {" "}
                        {/* Contenedor para precio y botón. */}
                        <p className="text-lg font-medium text-gray-900">
                          ${product.Precio_venta}
                        </p>{" "}
                        {/* Precio del producto. */}
                        <button
                          onClick={() => onAddProduct(product)} // Llama a onAddProduct con el producto actual al hacer clic.
                          className="ml-2 text-sm rounded-md bg-blue-500 text-white py-1 px-2 hover:bg-blue-600"
                        >
                          Comprar {/* Texto del botón. */}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <p className="text-center text-gray-900">
                No hay productos disponibles.
              </p> // Mensaje si no hay productos filtrados.
            )}
          </div>
        </div>
      )}
    </div>
  );
}
