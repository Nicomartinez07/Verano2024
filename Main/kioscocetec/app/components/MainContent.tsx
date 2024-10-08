import React, { useState, useEffect } from "react";
import "./MainContent.css";

// Definimos la interfaz 'Product' que describe la estructura de un producto
interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
}

// Definimos las propiedades del componente 'MainContent'.
interface MainContentProps {
  searchTerm?: string;
  onAddProduct: (product: Product) => void;
}

export default function MainContent({
  searchTerm = "",
  onAddProduct,
}: MainContentProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/productos")
      .then((response) => response.json())
      .then((data: Product[]) => {
        console.log(data); // Verificar qué datos recibimos
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  // Mostrar todos los productos para pruebas
  const filteredProducts = products;

  const handleAddProduct = (product: Product) => {
    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.Id === product.Id);
      if (existingProduct) {
        // Si el producto ya existe, no lo agregamos de nuevo
        return prevProducts; 
      }
      // Si no existe, agregamos el nuevo producto con cantidad 1
      return [...prevProducts, { ...product, quantity: 1 }];
    });
    onAddProduct(product);
  };
  
  return (
    <div className="bg-[#be5600]">
      {isLoading ? (
        <div className="spinner">Cargando...</div>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.length > 0 ? ( // Verificamos si hay productos
              filteredProducts.map((product) => (
                <div key={product.Id} className="group">
                  <div className="block">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        alt={product.imageAlt}
                        src={product.Img}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-900">{product.Nombre}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-lg font-medium text-gray-900">
                        ${product.Precio_venta}
                      </p>
                      <button
                        onClick={() => handleAddProduct(product)}
                        className="ml-2 text-sm rounded-md bg-blue-500 text-white py-1 px-2 hover:bg-blue-600"
                      >
                        Añadir
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-900">No hay productos disponibles.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
