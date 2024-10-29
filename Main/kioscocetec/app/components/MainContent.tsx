import React, { useState, useEffect } from "react"; // Importamos React y hooks necesarios
import "./MainContent.css"; // Importamos los estilos para el componente

// Definimos la interfaz 'Product' que describe la estructura de un producto
interface Product {
  Id: number; // Identificador único del producto
  Nombre: string; // Nombre del producto
  Precio_venta: number; // Precio de venta del producto
  Img: string; // URL de la imagen del producto
}

// Definimos las propiedades del componente 'MainContent'.
interface MainContentProps {
  onAddProduct: (product: Product) => void; // Propiedad para manejar la acción de añadir un producto
  searchTerm: string; // Propiedad que recibe el término de búsqueda
}

// Componente funcional 'MainContent'
export default function MainContent({
  onAddProduct, // Desestructuramos las props
  searchTerm,
}: MainContentProps) {
  // State para almacenar la lista de productos
  const [products, setProducts] = useState<Product[]>([]);
  // State para manejar el estado de carga
  const [isLoading, setIsLoading] = useState(true);

  // useEffect se ejecuta después de que el componente se monta
  useEffect(() => {
    // Realizamos la solicitud fetch para obtener los productos desde el backend
    fetch("http://127.0.0.1:5000/productos")
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((data: Product[]) => {
        setProducts(data); // Actualizamos el estado de productos con los datos recibidos
        setIsLoading(false); // Cambiamos el estado de carga a false
      })
      .catch((error) => {
        // Manejo de errores en caso de que la solicitud falle
        console.error("Error fetching products:", error);
        setIsLoading(false); // Cambiamos el estado de carga a false incluso si hay un error
      });
  }, []); // Dependencias vacías significan que se ejecuta una vez al montar el componente

  // Filtrar productos usando el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) // Filtramos los productos cuyo nombre incluye el término de búsqueda (sin distinguir entre mayúsculas y minúsculas)
  );

  return (
    <div className="bg-[#ffffff]"> {/* Fondo blanco para el contenedor principal */}
      {isLoading ? ( // Si está cargando, mostramos un mensaje de carga
        <div className="spinner">Cargando...</div>
      ) : ( // Si ya ha cargado, mostramos los productos
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.length > 0 ? ( // Verificamos si hay productos filtrados
              filteredProducts.map((product) => ( // Mapeamos sobre los productos filtrados
                <div key={product.Id} className="group"> {/* Cada producto debe tener una clave única */}
                  <div className="block ">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        alt={product.Nombre} 
                        src={product.Img} 
                        className="h-full w-full object-cover object-center group-hover:opacity-75" 
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-900"> 
                      {product.Nombre}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-lg font-medium text-gray-900"> 
                        ${product.Precio_venta}
                      </p>
                      <button
                        onClick={() => onAddProduct(product)} // Al hacer clic, llama a la función onAddProduct con el producto actual
                        className="ml-2 text-sm rounded-md bg-blue-500 text-white py-1 px-2 hover:bg-blue-600"
                      >
                        Comprar 
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : ( // Si no hay productos filtrados
              <p className="text-center text-gray-900">No hay productos disponibles.</p> // 
            )}
          </div>
        </div>
      )}
    </div>
  );
}
