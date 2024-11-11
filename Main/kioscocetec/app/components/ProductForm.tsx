import React, { useState, useEffect } from "react";

interface ProductFormProps {
  onClose: () => void;
  onAddProduct: (product: {
    Id: number;
    Nombre: string;
    Precio_venta: number;
    Img: string;
    CategoriaId: number;
    MarcaId: number;
  }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onClose, onAddProduct }) => {
  const [nombre, setNombre] = useState("");
  const [precioVenta, setPrecioVenta] = useState<number | string>("");
  const [img, setImg] = useState("");
  const [categoriaId, setCategoriaId] = useState<string>("");
  const [marcaId, setMarcaId] = useState<string>("");
  const [categories, setCategories] = useState<any[]>([]); // Para almacenar las categorías
  const [marcas, setMarcas] = useState<any[]>([]); // Para almacenar las marcas
  const [error, setError] = useState<string>("");

  // Cargar las categorías desde la API
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/categorias");
      if (!response.ok) {
        throw new Error("No se pudieron cargar las categorías");
      }
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error(err);
      setError("Error al cargar las categorías.");
    }
  };

  // Cargar las marcas desde la API
  const fetchMarcas = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/marcas");
      if (!response.ok) {
        throw new Error("No se pudieron cargar las marcas");
      }
      const data = await response.json();
      setMarcas(data);
    } catch (err) {
      console.error(err);
      setError("Error al cargar las marcas.");
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchMarcas(); // Llamar a fetchMarcas para cargar las marcas también
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Crear el objeto del nuevo producto
    const newProduct = {
      Nombre: nombre,
      Precio_venta: parseFloat(precioVenta.toString()),
      Img: img,
      Id_categoria: parseInt(categoriaId), // Asegúrate de que esté bien en la base de datos
      Id_marca: parseInt(marcaId), // Asegúrate de que esté bien en la base de datos
    };

    try {
      // Realiza la solicitud PUT al backend
      const response = await fetch("http://127.0.0.1:5000/AñadirProducto", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Producto añadido:", result);

        // Llamar a onAddProduct para agregar el nuevo producto
        onAddProduct({
          Id: Math.random(), // Asume que esto es temporal; usa el ID de la base de datos real si es necesario
          Nombre: nombre,
          Precio_venta: parseFloat(precioVenta.toString()),
          Img: img,
          CategoriaId: parseInt(categoriaId),
          MarcaId: parseInt(marcaId),
        });

        // Limpiar el formulario
        setNombre("");
        setPrecioVenta("");
        setImg("");
        setCategoriaId("");
        setMarcaId("");
        onClose(); // Cerrar el formulario
      } else {
        console.error("Error al añadir el producto");
        alert("Hubo un problema al añadir el producto.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al realizar la solicitud.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-black">Añadir producto</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
            placeholder="Link de Imagen Png"
          />
          <label className="block text-black mb-2">Categoría</label>
          <select
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black bg-white"
          >
            <option value="">Selecciona una categoría</option>
            {categories.length > 0 ? (
              categories.map((category) => (
                <option
                  key={category.Id}
                  value={category.Id}
                  className="text-black"
                >
                  {category.Nombre}
                </option>
              ))
            ) : (
              <option disabled>Cargando categorías...</option>
            )}
          </select>

          <label className="block text-black mb-2">Marca</label>
          <select
            value={marcaId}
            onChange={(e) => setMarcaId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black bg-white"
          >
            <option value="">Selecciona una Marca</option>
            {marcas.length > 0 ? (
              marcas.map((marca) => (
                <option key={marca.Id} value={marca.Id} className="text-black">
                  {marca.Nombre}
                </option>
              ))
            ) : (
              <option disabled>Cargando marcas...</option>
            )}
          </select>

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
