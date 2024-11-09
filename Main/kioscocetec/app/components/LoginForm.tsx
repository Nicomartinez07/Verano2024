import React from "react";

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-black">Iniciar Sesion</h2>
        
        {/*Tener que desarrollar un formulario basico el cual permita poner un usuario basico*/}
        {/*Y que en base a eso, la pagina muestre cosas distintas*/}
        <form>
          <label className="block text-black mb-2">Nombre</label>
          <input
            type="Nombre"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa email"
          />
          
          <label className="block text-black mb-2">Contraseña</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa Contraseña"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Iniciar Sesion
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

export default LoginForm;
