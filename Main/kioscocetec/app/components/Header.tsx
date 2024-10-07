import React, { useState } from "react";

// Define el tipo de los productos seleccionados
interface Product {
  name: string;
  quantity: number;
}

// Define los tipos de los props que recibe el componente Header
interface HeaderProps {
  onSearch: (term: string) => void;
  selectedProducts: Product[];
}

const Header: React.FC<HeaderProps> = ({ onSearch, selectedProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Notifica al componente padre sobre el término de búsqueda
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible); // Cambia la visibilidad del carrito
  };

  return (
    <header className="bg-[#be5600] py-6 w-full">
      <div className="flex items-center justify-between px-8">
        <a href="/" className="flex items-center">
          <h1 className="titulo text-4xl font-bold text-white">𝙆𝙄𝙊𝙎𝘾𝙊 𝘾𝙀𝙏𝙀𝘾</h1>
        </a>
        <div className="header flex items-center flex-grow justify-center">
          <ul className="flex items-center gap-12">
            <li className="list-none">
              <a
                href="/"
                className="text-xl font-medium text-white hover:text-gray-200"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar"
            type="search"
            name="search"
            className="border rounded-lg py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="relative">
          <button onClick={toggleCartVisibility} className="relative ml-4">
            🛒
          </button>
          {/* Menú desplegable del carrito */}
          {isCartVisible && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
              <h2 className="font-bold text-lg text-black">Carrito</h2>
              <ul>
                {Array.isArray(selectedProducts) &&
                selectedProducts.length > 0 ? (
                  selectedProducts.map((product, index) => (
                    <li key={index} className="py-2 border-b">
                      {product.name} - {product.quantity}
                    </li>
                  ))
                ) : (
                  <li className="py-2 text-black ">El carrito está vacío</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
