import React, { useState, useEffect } from "react";
import "./MainContent.css";

// Definimos la interfaz 'Product' que describe la estructura de un producto
interface Product {
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
}

// Definimos las propiedades del componente 'MainContent'.
interface MainContentProps {
  onAddProduct: (product: Product) => void;
  searchTerm: string;
}

export default function MainContent({
  onAddProduct,
  searchTerm,
}: MainContentProps) {
  const [productsByCategory, setProductsByCategory] = useState<Record<number, Product[]>>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null); // Estado para la categoría seleccionada

  useEffect(() => {
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
  );

  return (
    <div className="bg-[#ffffff]">
      {isLoading ? (
        <div className="spinner">Cargando...</div>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
