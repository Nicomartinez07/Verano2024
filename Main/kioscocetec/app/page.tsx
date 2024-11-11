"use client"; // Add this line at the top of the file

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// Tu componente App
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Estado de la sesión (si el usuario está logueado y su rol)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  // Cargar estado de la sesión desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserRole = localStorage.getItem("userRole");

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      setUserRole(storedUserRole);
    }
  }, []);

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

  // Manejar el login
  const handleLogin = (username: string, password: string) => {
    if (
      (username === "cliente" && password === "cliente") ||
      (username === "admin" && password === "admin")
    ) {
      setIsLoggedIn(true);
      setUserRole(username);

      // Guardar el estado de la sesión en localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", username);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // Manejar el logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);

    // Eliminar el estado de la sesión de localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
  };

  return (
    <div>
      <Header
        onSearch={setSearchTerm}
        selectedProducts={selectedProducts}
        handleRemoveProduct={handleRemoveProduct} // Pasamos la función de eliminar una unidad
        onAddProduct={handleAddProduct}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <MainContent searchTerm={searchTerm} onAddProduct={handleAddProduct} />

      <Footer />
    </div>
  );
};

export default App;
