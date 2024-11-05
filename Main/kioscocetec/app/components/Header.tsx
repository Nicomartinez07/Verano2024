import React, { useState, useEffect } from "react"; // Importamos React y hooks necesarios
import MercadoButtonComponent from "./BotonMercado"; // Importamos el componente para el botón de Mercado

<<<<<<< HEAD
// Definimos una interfaz para el producto que se usará en el carrito
=======
// Definimos la interfaz 'Product' que describe la estructura de un producto
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
interface Product {
  Id: string; // Identificador único del producto
  Nombre: string; // Nombre del producto
  Precio_venta: number; // Precio de venta del producto
  quantity: number; // Cantidad del producto en el carrito
}

<<<<<<< HEAD
// Definimos una interfaz para las propiedades del componente Header
interface HeaderProps {
  onSearch: (term: string) => void; // Función que se llama cuando se realiza una búsqueda
  selectedProducts: Product[]; // Lista de productos seleccionados en el carrito
  handleRemoveProduct: (product: Product) => void; // Función para eliminar un producto del carrito
}

// Definimos el componente principal Header
=======
// Definimos las propiedades del componente 'Header'.
interface HeaderProps {
  onSearch: (term: string) => void; // Propiedad para manejar la búsqueda
  selectedProducts: Product[]; // Lista de productos seleccionados
  handleRemoveProduct: (product: Product) => void; // Propiedad para manejar la eliminación de un producto
}

// Componente funcional 'Header'
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
const Header: React.FC<HeaderProps> = ({
  onSearch,
  selectedProducts,
  handleRemoveProduct,
}) => {
<<<<<<< HEAD
  // Estado para el término de búsqueda ingresado por el usuario
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para los resultados de la búsqueda de productos
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  // Estado que indica si el carrito está visible o no
  const [isCartVisible, setIsCartVisible] = useState(false);
  // Estado para controlar la animación del carrito
  const [cartAnimation, setCartAnimation] = useState(false);
  // Estado que indica si las categorías están visibles o no
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  // Calcula la cantidad total de productos en el carrito sumando las cantidades de cada producto
=======
  
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [searchResults, setSearchResults] = useState<Product[]>([]); // Estado para los resultados de búsqueda
  const [isCartVisible, setIsCartVisible] = useState(false); // Estado para mostrar u ocultar el carrito
  const [cartAnimation, setCartAnimation] = useState(false); // Estado para animación del carrito
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false); // Estado para mostrar u ocultar categorías

  // Calcula la cantidad total de productos en el carrito
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
  const totalQuantity = selectedProducts.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

<<<<<<< HEAD
  // Calcula el precio total multiplicando precio por cantidad de cada producto
=======
  // Calcula el precio total de los productos en el carrito
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
  const totalPrice = selectedProducts.reduce((total, product) => {
    return total + product.Precio_venta * product.quantity;
  }, 0);

<<<<<<< HEAD
  // Maneja el evento de búsqueda y realiza una petición al servidor para obtener resultados
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Si el término tiene más de 3 caracteres, hace una petición de búsqueda al servidor
    if (term.length > 3) {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/search?term=${term}`
        );
        const data = await response.json();
        onSearch(term);
=======
  // Maneja el cambio en el campo de búsqueda
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value; // Obtiene el término de búsqueda
    setSearchTerm(term); // Actualiza el estado del término de búsqueda
    // Realiza la búsqueda si el término tiene más de 3 caracteres
    if (term.length > 3) {
      try {
        const response = await fetch(`http://127.0.0.1:5000/search?term=${term}`);
        const data = await response.json(); // Convierte la respuesta a JSON
        setSearchResults(data); // Actualiza los resultados de búsqueda
        onSearch(term); // Llama a la función onSearch con el término actual
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
      } catch (error) {
        console.error("Error fetching search results:", error); // Maneja errores de la búsqueda
      }
    } else {
<<<<<<< HEAD
      // Si el término es muy corto, obtiene todos los productos
      const response = await fetch(`http://127.0.0.1:5000/productos`);
      const data = await response.json();
      onSearch(term);
=======
      // Si el término es corto, obtiene todos los productos
      const response = await fetch(`http://127.0.0.1:5000/productos`);
      const data = await response.json(); // Convierte la respuesta a JSON
      setSearchResults(data); // Actualiza los resultados de búsqueda
      onSearch(term); // Llama a la función onSearch con el término actual
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
    }
  };

  // Alterna la visibilidad del carrito
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); // Cambia el estado de visibilidad del carrito
  };

<<<<<<< HEAD
  // Activa la animación del carrito al agregar un producto
=======
  // Maneja la animación al agregar un producto al carrito
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
  const handleAddProduct = () => {
    setCartAnimation(true); // Activa la animación
    setTimeout(() => setCartAnimation(false), 300); // Desactiva la animación después de 300ms
  };

  // Alterna la visibilidad de las categorías
  const toggleCategoriesVisibility = () => {
    setIsCategoriesVisible(!isCategoriesVisible); // Cambia el estado de visibilidad de categorías
  };

<<<<<<< HEAD
  // Render del componente
=======
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
  return (
    <header className="fixed top-0 left-0 w-full bg-[#be5600] py-4 z-30">
      <div className="flex items-center justify-between px-8">
        {/* Enlace de la cabecera */}
        <a href="/" className="flex items-center">
          <h1 className="titulo text-4xl font-bold text-white">𝙆𝙄𝙊𝙎𝘾𝙊 𝘾𝙀𝙏𝙀𝘾</h1>
        </a>

        <div className="flex items-center gap-12">
          {/* Botón de categorías */}
          <button
            onClick={toggleCategoriesVisibility}
            className="text-xl font-medium text-white"
          >
            Categorías
<<<<<<< HEAD
          </button>
          {/* Botón de login */}
          <button
            onClick={toggleCategoriesVisibility}
            className="text-xl font-medium text-white hover:bg-white hover:text-orange-500 border-2 border-[#be5500]-400 rounded-lg px-4 py-2 transition-colors"
          >
            Login
          </button>
          {/* Lista desplegable de categorías */}
          {isCategoriesVisible && (
            <div
              className="absolute bg-white shadow-lg rounded-lg p-4 z-20"
              style={{ top: "60px" }}
            >
=======
          </button>   
          {isCategoriesVisible && (
            <div className="absolute bg-white shadow-lg rounded-lg p-4 z-20" style={{ top: '60px' }}>
>>>>>>> d4d73d3c8d53d97f8faa185a3d981caf7c06c798
              <ul className="flex flex-col text-black">
                <li>
                  <a href="http://127.0.0.1:5000/categoria/1">Bebidas</a>
                </li>
                <li>
                  <a href="http://127.0.0.1:5000/categoria/3">Alfajores</a>
                </li>
                <li>
                  <a href="http://127.0.0.1:5000/categoria/4">Galletitas</a>
                </li>
                <li>
                  <a href="http://127.0.0.1:5000/categoria/7">Snacks</a>
                </li>
                <li>
                  <a href="http://127.0.0.1:5000/categoria/8">Golosinas</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Campo de búsqueda y resultados */}
        <div className="relative flex items-center">
          <input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar"
            type="search"
            name="search"
            className="border rounded-lg py-3 px-6 text-black placeholder:text-black"
          />
          {searchResults.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
              {searchResults.map((product) => (
                <li key={product.Id} className="px-4 py-2 border-b">
                  {product.Nombre} - ${product.Precio_venta}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botón y menú del carrito */}
        <div className="relative">
          <button
            onClick={toggleCartVisibility}
            className={`relative ml-4 text-3xl p-2 bg-[#be5600] rounded-lg hover:bg-gray-100 transition duration-200 ${
              cartAnimation ? "cart-animation" : ""
            }`}
          >
            🛒
            {/* Cantidad de productos en el carrito */}
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white text-xs rounded-full px-1">
                {totalQuantity}
              </span>
            )}
          </button>

          {/* Lista de productos en el carrito */}
          {isCartVisible && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
              <h2 className="font-bold text-lg text-black">Carrito</h2>
              <ul className="flex flex-col text-black">
                {selectedProducts.length > 0 ? (
                  selectedProducts.map((product) => (
                    <li
                      key={product.Id}
                      className="flex justify-between items-center"
                    >
                      <span>
                        {product.Nombre} - ${product.Precio_venta} (Cantidad:{" "}
                        {product.quantity})
                      </span>
                      <button
                        onClick={() => handleRemoveProduct(product)}
                        className="ml-2 text-red-500"
                      >
                        Eliminar
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="py-2 text-black">El carrito está vacío</li>
                )}
              </ul>
              <div className="mt-4 font-bold text-lg text-black">
                Precio total: ${totalPrice.toFixed(2)}
              </div>
              {/* Botón de pago con mercado */}
              <div>
                <MercadoButtonComponent price={totalPrice} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; // Exportamos el componente Header
