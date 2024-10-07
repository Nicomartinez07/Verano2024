// app/page.tsx
"use client"; // Add this line at the top of the file

import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// Your component code follows...

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddProduct = (product) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <Header onSearch={handleSearch} selectedProducts={selectedProducts} />
      <MainContent searchTerm={searchTerm} onAddProduct={handleAddProduct} />
      <Footer />
    </div>
  );
};

export default App;
