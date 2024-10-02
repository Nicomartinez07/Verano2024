const Header = () => {
    return (
      <header className="bg-[#be5600] py-6 w-full">
        <div className="flex items-center justify-between px-8">
          <a href="/" className="flex items-center">
            <h1 className="titulo text-4xl font-bold text-white">𝙆𝙄𝙊𝙎𝘾𝙊 𝘾𝙀𝙏𝙀𝘾</h1>
          </a>
          <div className="header flex items-center gap-16">
            {/* Aquí se separan los enlaces de Home y Productos */}
            <ul className="flex items-center gap-12">
              <li className="list-none">
                <a
                  data-radix-collection-item=""
                  href="/"
                  className="text-xl font-medium text-white hover:text-gray-200"
                >
                  Home
                </a>
              </li>
              <li className="list-none">
                <a
                  data-radix-collection-item=""
                  href="/productos"
                  className="text-xl font-medium text-white hover:text-gray-200"
                >
                  Productos
                </a>
              </li>
            </ul>
            {/* Input de búsqueda */}
            <div className="relative flex items-center">
              <input
                placeholder="Buscar"
                type="search"
                name="search"
                className="border rounded-lg py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            {/* Botón de registro */}
            <button className="ml-4 bg-white text-[#be5600] hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg">
              Carrito
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  