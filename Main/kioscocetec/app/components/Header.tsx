import React, { useState } from "react";

interface Product {
  Id: string; // Asegúrate de que el tipo de ID coincida con el que estás utilizando
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
  const [isCartVisible, setIsCartVisible] = useState(false);

  const totalPrice = selectedProducts.reduce((total, product) => {
    return total + product.Precio_venta * product.quantity; // Usa 'price' para calcular el total
  }, 0);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Notifica al componente padre sobre el término de búsqueda
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#be5600] py-6 w-full z-20">
      <div className="flex items-center justify-between px-8">
        <a href="/" className="flex items-center">
          <h1 className="titulo text-4xl font-bold text-white">𝙆𝙄𝙊𝙎𝘾𝙊 𝘾𝙀𝙏𝙀𝘾</h1>
        </a>
        <div className="flex items-center gap-12">
          <a href="/" className="text-xl font-medium text-white">
            Home
          </a>
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
        </div>

        <div className="relative">
          <button
            onClick={toggleCartVisibility}
            className="relative ml-4 text-3xl p-2 bg-[#be5600] rounded-lg hover:bg-gray-100 transition duration-200"
          >
            🛒
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
                      {" "}
                      {/* Usa 'id' en lugar de 'Id' */}
                      <span>
                        {product.Nombre} - ${product.Precio_venta} (Cantidad:{" "}
                        {product.quantity}){" "}
                        {/* Asegúrate de usar 'name' y 'price' */}
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
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
