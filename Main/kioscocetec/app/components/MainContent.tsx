<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./MainContent.css";
=======
<<<<<<< HEAD
import React, { useState, useEffect } from "react"; // Importamos React y hooks de estado y efecto.
import "./MainContent.css"; // Importamos los estilos específicos para este componente.
=======
import React, { useState, useEffect } from "react"; // Importamos React y hooks necesarios
import "./MainContent.css"; // Importamos los estilos para el componente
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
>>>>>>> 541e4fe3e7d72ff8713e5fafcbdc843b996538c8

// Definimos la interfaz 'Product' que describe la estructura de un producto.
interface Product {
<<<<<<< HEAD
  Id: number;
  Nombre: string;
  Precio_venta: number;
  Img: string;
  CategoriaId: number; // Asegúrate de que cada producto tiene un ID de categoría
}

// Definimos la interfaz 'Category' que describe la estructura de una categoría
interface Category {
  Id: number;
  Nombre: string;
=======
<<<<<<< HEAD
  Id: number; // Identificador único del producto.
  Nombre: string; // Nombre del producto.
  Precio_venta: number; // Precio de venta del producto.
  Img: string; // URL de la imagen del producto.
=======
  Id: number; // Identificador único del producto
  Nombre: string; // Nombre del producto
  Precio_venta: number; // Precio de venta del producto
  Img: string; // URL de la imagen del producto
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
>>>>>>> 541e4fe3e7d72ff8713e5fafcbdc843b996538c8
}

// Definimos las propiedades del componente 'MainContent'.
interface MainContentProps {
<<<<<<< HEAD
  onAddProduct: (product: Product) => void;
  searchTerm: string;
=======
<<<<<<< HEAD
  onAddProduct: (product: Product) => void; // Función que se llama al agregar un producto.
  searchTerm: string; // Término de búsqueda para filtrar productos.
>>>>>>> 541e4fe3e7d72ff8713e5fafcbdc843b996538c8
}

// Componente principal 'MainContent'.
export default function MainContent({
  onAddProduct, // Propiedad para agregar productos.
  searchTerm, // Propiedad para el término de búsqueda.
}: MainContentProps) {
<<<<<<< HEAD
  const [productsByCategory, setProductsByCategory] = useState<Record<number, Product[]>>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null); // Estado para la categoría seleccionada
=======
  const [products, setProducts] = useState<Product[]>([]); // Estado para almacenar productos.
  const [isLoading, setIsLoading] = useState(true); // Estado que indica si los productos están cargando.
>>>>>>> 541e4fe3e7d72ff8713e5fafcbdc843b996538c8

  // MOSTRAR TODOS LOS PRODUCTOS.
  useEffect(() => {
<<<<<<< HEAD
    // Cargar categorías al montar el componente
    fetch("http://127.0.0.1:5000/categorias")
      .then((response) => response.json())
      .then((data: Category[]) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    // Cargar productos por categoría
    const fetchProducts = async () => {
      const fetchedProducts: Record<number, Product[]> = {};
      for (const category of categories) {
        try {
          const response = await fetch(`http://127.0.0.1:5000/productos?categoriaId=${category.Id}`);
          const data: Product[] = await response.json();
          fetchedProducts[category.Id] = data;
        } catch (error) {
          console.error(`Error fetching products for category ${category.Id}:`, error);
        }
      }
      setProductsByCategory(fetchedProducts);
      setIsLoading(false);
    };

    if (categories.length > 0) {
      fetchProducts();
    }
  }, [categories]);

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory !== null 
    ? productsByCategory[selectedCategory] || [] 
    : Object.values(productsByCategory).flat();

  const displayedProducts = filteredProducts.filter((product) =>
    product.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
=======
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
>>>>>>> 541e4fe3e7d72ff8713e5fafcbdc843b996538c8
  );

  return (
    <div className="bg-[#ffffff]">
      {" "}
      {/* Contenedor principal con fondo blanco. */}
      {isLoading ? ( // Verifica si está cargando.
        <div className="spinner">Cargando...</div> // Muestra un spinner mientras se cargan los productos.
      ) : (
=======
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
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
<<<<<<< HEAD
          {/* Renderizado de Categorías */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Categorías</h2>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => handleCategorySelect(null)}
                className={`text-sm rounded-md ${
                  selectedCategory === null
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                } py-1 px-2 hover:bg-gray-300`}
              >
                Todas
              </button>
              {categories.map((category) => (
                <button
                  key={category.Id}
                  onClick={() => handleCategorySelect(category.Id)}
                  className={`text-sm rounded-md ${
                    selectedCategory === category.Id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-900"
                  } py-1 px-2 hover:bg-gray-300`}
                >
                  {category.Nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Renderizado de Productos */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <div key={product.Id} className="group">
                  <div className="block">
=======
          {" "}
          {/* Contenedor de productos con márgenes y tamaño. */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
<<<<<<< HEAD
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
=======
            {filteredProducts.length > 0 ? ( // Verificamos si hay productos filtrados
              filteredProducts.map((product) => ( // Mapeamos sobre los productos filtrados
                <div key={product.Id} className="group"> {/* Cada producto debe tener una clave única */}
                  <div className="block ">
>>>>>>> 541e4fe3e7d72ff8713e5fafcbdc843b996538c8
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
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
            )}
          </div>
        </div>
      )}
    </div>
  );
}
