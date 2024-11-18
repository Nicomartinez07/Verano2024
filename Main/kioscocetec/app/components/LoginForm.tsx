import React from "react";
interface LoginFormProps {
  onClose: () => void;
  onLogin: (email: string, password: string) => void; // Actualizado
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("cliente"); // Valor por defecto cliente
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      let response;
      if (isLogin) {
        // Iniciar sesión
        response = await fetch("http://127.0.0.1:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
      } else {
        // Registrar usuario
        response = await fetch("http://127.0.0.1:5000/create-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, role }),
        });
      }
  
      if (!response.ok) {
        const errorResult = await response.json();
        setErrorMessage(errorResult.message || `Error en el ${isLogin ? "inicio de sesión" : "registro"}`);
        return;
      }
  
      const result = await response.json();
      console.log(`${isLogin ? "Usuario inició sesión" : "Usuario registrado"} exitosamente:`, result);
  
      setErrorMessage(""); // Limpiar mensajes de error
  
      if (isLogin) {
        onLogin(email, password); // Enviar email y password al componente padre
      } else {
        // Cambiar a vista de inicio de sesión tras el registro
        setIsLogin(true);
        setPassword(""); // Limpiar contraseña por seguridad
      }
    } catch (error) {
      setErrorMessage("Error al enviar los datos. Intenta de nuevo.");
    }
  };
  
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-black">{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-black mb-2">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
                placeholder="Ingresa tu nombre"
              />
            </div>
          )}

          <label className="block text-black mb-2">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa tu correo electrónico"
          />

          <label className="block text-black mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
            placeholder="Ingresa tu contraseña"
          />

          {!isLogin && (
            <div>
              <label className="block text-black mb-2">Selecciona el Rol</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black"
              >
                <option value="cliente">Cliente</option>
                <option value="administrador">Administrador</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {isLogin ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-blue-600 underline"
        >
          {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>

        <button onClick={onClose} className="mt-4 text-black underline">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
