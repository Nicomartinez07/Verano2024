import React from "react";

interface ProductFormProps {
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-black">Añadir producto </h2>
        
        <form>
          <label className="block text-black mb-2">Nombre</label>
          <input
            type="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa Nombre"
          />

          <label className="block text-black mb-2">Marca</label>
          <input
            type="Marca"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa Marca"
          />

          <label className="block text-black mb-2">Precio Venta</label>
          <input
            type="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Precio venta"
          />

          <label className="block text-black mb-2">Categoria</label>
          <input
            type="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa Categoria"
          />
          
          <label className="block text-black mb-2">Imagen</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Link de imagen"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Añadir producto 
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-black underline"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
