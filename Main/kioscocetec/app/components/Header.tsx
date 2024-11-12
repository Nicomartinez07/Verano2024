import React, { useEffect, useState } from "react";
import MercadoButtonComponent from "./BotonMercado";
import LoginForm from "./LoginForm";
import ProductForm from "./ProductForm";
import { FaUserAstronaut } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

// Interfaces
interface Product {
  Id: string;
  Nombre: string;
  Precio_venta: number;
  quantity: number;
}

interface HeaderProps {
  onSearch: (term: string) => void;
  selectedProducts: Product[];
  handleRemoveProduct: (product: Product) => void;
  onAddProduct: (product: Product) => void;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  selectedProducts,
  handleRemoveProduct,
  onAddProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartAnimation, setCartAnimation] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const [showProductForm, setShowProductForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  // Cargar la sesión desde localStorage cuando la página se carga
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedLoginStatus === "true" && storedRole) {
      setIsLoggedIn(true);
      setUserRole(storedRole);
    }
  }, []);

  // Guardar el estado de la sesión en localStorage cuando se cambia
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", userRole || "");
    } else {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userRole");
    }
  }, [isLoggedIn, userRole]);

  // Calcula la cantidad de productos en el carrito
  const totalQuantity = selectedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  // Calcula el precio total
  const totalPrice = selectedProducts.reduce(
    (total, product) => total + product.Precio_venta * product.quantity,
    0
  );

  // Manejador de búsqueda
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 3) {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/search?term=${term}`
        );
        const data = await response.json();
        onSearch(term);
        setSearchResults(data); // Actualiza los resultados de búsqueda
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      const response = await fetch(`http://127.0.0.1:5000/productos`);
      const data = await response.json();
      onSearch(term);
      setSearchResults(data);
    }
  };

  // Despliega el carrito
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Manejador de cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null); // Limpia el rol del usuario
    localStorage.removeItem("userRole")
    location.reload()
  };

  // Manejador de inicio de sesión
  const handleLogin = (username: string, password: string) => {
    if (
      (username === "cliente" && password === "cliente") ||
      (username === "admin" && password === "admin")
    ) {
      setIsLoggedIn(true);
      setShowLogin(false); // Cierra el formulario de login

      if (username === "admin") {
        setUserRole("admin");
        location.reload()
      } else {
        setUserRole("cliente");
        location.reload()
      } 
    } else {
      alert("Credenciales incorrectas"); // Mensaje de error
    }
  };

  const handleAddProduct = (newProduct: Product) => {
    onAddProduct(newProduct);
    setShowProductForm(false);
  };

  const handleRemoveProductByName = async (productName: string) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/eliminar_producto", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Nombre: productName }), // Envia el nombre del producto
      });

      if (response.ok) {
        // Si la respuesta es exitosa, elimina el producto de la lista local
        handleRemoveProduct({
          Id: "",
          Nombre: productName,
          Precio_venta: 0,
          quantity: 0,
        });
        setShowDeleteForm(false); // Cierra el formulario
        alert("Producto eliminado exitosamente.");
      } else {
        const data = await response.json();
        alert(data.error || "Error al eliminar el producto.");
      }
    } catch (error) {
      console.error("Error eliminando producto:", error);
      alert("Hubo un error al eliminar el producto.");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#be5600] py-4 z-30">
      <div className="flex items-center justify-between px-8">
        <a href="/" className="flex items-center">
          <h1 className="titulo text-4xl font-bold text-white">𝖪𝗂𝗈𝗌𝖼𝗈 𝖢𝖤𝖳𝖤𝖢</h1>
        </a>

        {/* Botón de iniciar/cerrar sesión */}
        <div>
          <div>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="text-black bg-[#FF9C73] px-4 py-2 rounded-lg hover:bg-[#FF9C73] transition duration-200"
                >
                  Cerrar Sesión
                </button>
                <span className="text-white font-bold flex items-center">
                  {userRole === "admin" && (
                    <>
                      <FaUserAstronaut className="mr-2" /> Administrador
                    </>
                  )}
                  {userRole === "cliente" && (
                    <>
                      <FaUserGraduate className="mr-2" /> Cliente
                    </>
                  )}
                </span>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-4 text-black bg-[#FF9C73] px-4 py-2 rounded-lg hover:bg-[#FF9C73] transition duration-200"
              >
                Iniciar Sesión
              </button>
            )}
          </div>
        </div>

        {/* Muestra el buscador y el carrito solo si el rol es "cliente" y está logueado */}
        {isLoggedIn && userRole === "cliente" && (
          <>
            {/* Buscador */}
            <div className="relative flex items-center">
              <input
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar"
                type="search"
                name="search"
                className="border rounded-lg py-3 px-6 pl-10 text-black placeholder:text-black"
              />
              <svg
                className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5a6 6 0 015.196 8.804l4.612 4.613a1 1 0 01-1.414 1.415l-4.612-4.613A6 6 0 1111 5z"
                />
              </svg>
            </div>

            {/* Carrito */}
            <div className="relative">
              <button
                onClick={toggleCartVisibility}
                className={`relative ml-4 text-3xl p-2 bg-[#be5600] rounded-lg hover:bg-gray-100 transition duration-200 ${
                  cartAnimation ? "cart-animation" : ""
                }`}
              >
                🛒
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white text-xs rounded-full px-1">
                    {totalQuantity}
                  </span>
                )}
              </button>

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
                            {product.Nombre} - ${product.Precio_venta}{" "}
                            (Cantidad: {product.quantity})
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
                  <div>
                    <MercadoButtonComponent price={totalPrice} />
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {isLoggedIn && userRole === "admin" && (
          <>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowProductForm(true)}
                className="text-black bg-[#FF9C73] px-4 py-2 rounded-lg hover:bg-[#FF9C73] transition duration-200"
              >
                Añadir Producto
              </button>
              {showProductForm && (
                <ProductForm
                  onClose={() => setShowProductForm(false)}
                  onAddProduct={handleAddProduct}
                />
              )}
              {showDeleteForm && (
                <DeleteForm
                  onClose={() => setShowDeleteForm(false)}
                  onDeleteProduct={handleRemoveProductByName}
                />
              )}
            </div>
          </>
        )}
      </div>

      {showLogin && (
        <LoginForm onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </header>
  );
};

export default Header;
