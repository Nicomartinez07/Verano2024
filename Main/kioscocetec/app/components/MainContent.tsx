import React, { useState, useEffect } from "react"; // Asegúrate de que estas importaciones estén aquí
import "./MainContent.css";

// Definimos la interfaz 'Product' que describe la estructura de un producto
interface Product {
  Id: number;
  Nombre: string;
  Precio_venta: number;
  Img: string;
}

// Definimos las propiedades del componente 'MainContent'.
interface MainContentProps {
  onAddProduct: (product: Product) => void;
  searchTerm: string; // Agregamos searchTerm a las props
}

export default function MainContent({
  onAddProduct,
  searchTerm,
}: MainContentProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/productos")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  // Filtrar productos usando el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#be5600]">
      {isLoading ? (
        <div className="spinner">Cargando...</div>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.Id} className="group">
                  <div className="block">
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
                        onClick={() => onAddProduct(product)}
                        className="ml-2 text-sm rounded-md bg-blue-500 text-white py-1 px-2 hover:bg-blue-600"
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-900">
                No hay productos disponibles.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
