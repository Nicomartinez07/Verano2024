"use client"; // Add this line at the top of the file

import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// Tu componente App
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Manejar la búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Manejar la adición de productos al carrito
  const handleAddProduct = (product) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.Id === product.Id);
      if (existingProduct) {
        return prev.map((p) =>
          p.Id === product.Id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Manejar la eliminación de una unidad de un producto del carrito
  const handleRemoveProduct = (productToRemove) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.Id === productToRemove.Id);

      if (existingProduct && existingProduct.quantity > 1) {
        // Si hay más de una unidad, reducimos la cantidad
        return prev.map((p) =>
          p.Id === productToRemove.Id ? { ...p, quantity: p.quantity - 1 } : p
        );
      } else {
        // Si solo hay una unidad, eliminamos el producto
        return prev.filter((product) => product.Id !== productToRemove.Id);
      }
    });
  };

  return (
    <div>
      <Header
        onSearch={setSearchTerm}
        selectedProducts={selectedProducts}
        handleRemoveProduct={handleRemoveProduct} // Pasamos la función de eliminar una unidad
        onAddProduct={handleAddProduct}
      />
      <MainContent searchTerm={searchTerm} onAddProduct={handleAddProduct} />

      <Footer />
    </div>
  );
};

export default App;
