import React, { useState } from "react";

interface DeleteFormProps {
  onClose: () => void;
  onDeleteProduct: (productName: string) => void;
}

const DeleteForm: React.FC<DeleteFormProps> = ({
  onClose,
  onDeleteProduct,
}) => {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onDeleteProduct(nombre);
    setNombre("");
    onClose(); // Cerrar el formulario
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-black">Borrar producto</h2>

        <form onSubmit={handleSubmit}>
          <label className="block text-black mb-2">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa Nombre"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Borrar Producto
          </button>
        </form>

        <button onClick={onClose} className="mt-4 text-black underline">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default DeleteForm;
