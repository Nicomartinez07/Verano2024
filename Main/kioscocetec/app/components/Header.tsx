import React, { useState } from "react";
import MercadoButtonComponent from "./BotonMercado";
import LoginForm from "./LoginForm";


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
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  selectedProducts,
  handleRemoveProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartAnimation, setCartAnimation] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const totalQuantity = selectedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = selectedProducts.reduce(
    (total, product) => total + product.Precio_venta * product.quantity,
    0
  );

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
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      const response = await fetch(`http://127.0.0.1:5000/productos`);
      const data = await response.json();
      onSearch(term);
    }
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleAddProduct = () => {
    setCartAnimation(true);
    setTimeout(() => setCartAnimation(false), 300);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#be5600] py-4 z-30">
      <div className="flex items-center justify-between px-8">
        <a href="/" className="flex items-center">
          <h1 className="titulo text-4xl font-bold text-white">𝙆𝙄𝙊𝙎𝘾𝙊 𝘾𝙀𝙏𝙀𝘾</h1>
        </a>

        <div>
          <button
            onClick={() => setShowLogin(true)}
            className="ml-4 text-white bg-[#FF9C73] px-4 py-2 rounded-lg hover:bg-[#FF9C73] transition duration-200"
          >
            Iniciar Sesión
          </button>
        </div>

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
              <div>
                <MercadoButtonComponent price={totalPrice} />
              </div>
            </div>
          )}
        </div>
      </div>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </header>
  );
};

export default Header;
