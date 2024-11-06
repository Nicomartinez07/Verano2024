import React, { useState } from "react";

interface ProductFormProps {
  onClose: () => void;
  onAddProduct: (product: {
    Id: number;
    Nombre: string;
    Precio_venta: number;
    Img: string;
    CategoriaId: number;
  }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onClose, onAddProduct }) => {
  const [nombre, setNombre] = useState("");
  const [precioVenta, setPrecioVenta] = useState<number | string>("");
  const [img, setImg] = useState("");
  const [categoriaId, setCategoriaId] = useState<string>(""); // Cambiar a string
  const [marca, setMarca] = useState(""); // Nuevo estado para Marca

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Crear el objeto del nuevo producto
    const newProduct = {
      Id: Math.random(), // Usamos un valor aleatorio para ID temporal (mejor usar un ID real si está disponible)
      Nombre: nombre,
      Precio_venta: parseFloat(precioVenta.toString()),
      Img: img, // No se valida la URL, se usa tal cual
      CategoriaId: parseInt(categoriaId), // Aquí cambiamos int
    };

    // Llamar a la función onAddProduct para pasar el nuevo producto
    onAddProduct(newProduct);

    // Limpiar el formulario y cerrar el modal
    setNombre("");
    setPrecioVenta("");
    setImg("");
    setCategoriaId(""); // Limpiar la categoría
    setMarca(""); // Limpiar la marca
    onClose(); // Cerrar el formulario
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-black">Añadir producto</h2>

        <form onSubmit={handleSubmit}>
          <label className="block text-black mb-2">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa Nombre"
          />
          <label className="block text-black mb-2">Precio Venta</label>
          <input
            type="number"
            value={precioVenta}
            onChange={(e) => setPrecioVenta(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Precio venta"
          />
          <label className="block text-black mb-2">Imagen</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Link de imagen"
          />
          <label className="block text-black mb-2">Categoría</label>
          <input
            type="text" // Campo de texto para la categoría
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)} // Actualizar como string
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Nombre de la Categoría"
          />
          <label className="block text-black mb-2">Marca</label>{" "}
          {/* Nuevo campo para la Marca */}
          <input
            type="text" // Campo de texto para la marca
            value={marca}
            onChange={(e) => setMarca(e.target.value)} // Actualizar la marca
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Marca del producto"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Añadir producto
          </button>
        </form>

        <button onClick={onClose} className="mt-4 text-black underline">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
