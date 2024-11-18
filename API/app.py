from flask import Flask, jsonify, request, render_template, redirect, url_for, flash
import sqlite3  # Importamos el módulo de SQLite
from sqlite3 import Error
from flask_cors import CORS  # Importar CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os

# Ruta del archivo de la base de datos SQLite
DATABASE_PATH = os.path.join(os.path.abspath(os.path.dirname(__file__)), "/home/nicolas/Documentos/kioskocetecAPI/Base-Datos/kioskocetec.db")

app = Flask(__name__)
CORS(app)  # Habilitar CORS en toda la aplicación
CORS(app, resources={r"/login": {"origins": "http://localhost:3000"}})

app.config["JSON_AS_ASCII"] = False

# Función para obtener la conexión de SQLite
def get_db_connection():
    try:
        connection = sqlite3.connect(DATABASE_PATH)
        connection.row_factory = sqlite3.Row  # Para obtener resultados como diccionarios
        return connection
    except Error as e:
        print(f"Error al conectar con SQLite: {e}")
        return None


@app.route("/productos")
def paginado():
    Paginado = None
    connection = get_db_connection()

    if connection:
        cursor = connection.cursor()

        if 'Paginado' in request.args:
            pagina = int(request.args['Paginado'])

        if request.is_json:
            if 'Paginado' in request.json:
                pagina = request.json['Paginado']

        if Paginado is None:
            query = "SELECT * FROM Productos"
            cursor.execute(query)
        else:
            elementos_por_pagina = 4
            paginas_descartadas = Paginado - 1
            elementos_descartados = paginas_descartadas * elementos_por_pagina
            query = "SELECT * FROM Productos LIMIT ? OFFSET ?"
            cursor.execute(query, (elementos_por_pagina, elementos_descartados))

        result = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify([dict(row) for row in result])


@app.route("/categorias")
def categorias():
    connection = get_db_connection()

    if connection:
        cursor = connection.cursor()
        query = "SELECT * FROM Categorias"
        cursor.execute(query)
        result = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify([dict(row) for row in result])


@app.route("/marcas")
def marcas():
    connection = get_db_connection()

    if connection:
        cursor = connection.cursor()
        query = "SELECT * FROM Marcas"
        cursor.execute(query)
        result = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify([dict(row) for row in result])


@app.route("/AñadirProducto", methods=('PUT',))
def insertar_producto():
    try:
        # Conexión a la base de datos
        connection = get_db_connection()
        if connection:
            cursor = connection.cursor()
            data = request.get_json()
            # Validar que todos los campos necesarios estén presentes en el JSON
            required_fields = ['Nombre', 'Img', 'Precio_venta', 'Id_categoria', 'Id_marca']
            if not all(field in data for field in required_fields):
                return jsonify({"error": "Faltan campos obligatorios"}), 400

            # Extraer los datos del producto
            nombre = data['Nombre']
            img = data['Img']
            precio_venta = data['Precio_venta']
            id_categoria = data['Id_categoria']
            id_marca = data['Id_marca']
            precio_compra = 0  # Valor por defecto

            # Consulta SQL para insertar el producto
            query_insertar = """
                INSERT INTO Productos (Id_marca, Id_categoria, Nombre, Img, Precio_venta, Precio_compra)
                VALUES (?, ?, ?, ?, ?, ?)
            """
            cursor.execute(query_insertar, (id_marca, id_categoria, nombre, img, precio_venta, precio_compra))
            connection.commit()

            if cursor.rowcount == 1:
                # Obtener el ID del producto recién insertado
                connection.commit()
                id_producto = cursor.lastrowid
                cursor.close()
                connection.close()
                return jsonify({"message": "Producto insertado correctamente", "Nombre": nombre}), 201
            else:
                cursor.close()
                connection.close()
                return jsonify({"error": "Error al insertar el producto"}), 500

    except sqlite3.Error as e:
        return jsonify({"error": str(e)}), 500


@app.route("/search", methods=["GET"])
def search():
    try:
        # Conexión a la base de datos
        connection = get_db_connection()

        if connection:
            # Obtener el término de búsqueda desde los parámetros de la URL
            term = request.args.get('term', '')

            # Crear un cursor
            cursor = connection.cursor()
            query = "SELECT Id, Nombre, Precio_venta FROM Productos WHERE Nombre LIKE ?"
            cursor.execute(query, (f"%{term}%",))

            # Obtener los resultados
            results = cursor.fetchall()
            cursor.close()
            connection.close()
            return jsonify([dict(row) for row in results]), 200
    except sqlite3.Error as e:
        return jsonify({"error": str(e)}), 500


@app.route("/categoria/<int:id>", methods=('GET',))
def productos_por_categoria(id):
    try:
        # Conexión a la base de datos
        connection = get_db_connection()

        if connection:
            cursor = connection.cursor()
            query_productos = "SELECT * FROM Productos WHERE Id_categoria = ?"
            cursor.execute(query_productos, (id,))
            productos = cursor.fetchall()

            # Si no hay productos en la categoría, devolver error 404
            if not productos:
                cursor.close()
                connection.close()
                return jsonify({"error": "No se encontraron productos para esta categoría"}), 404

            cursor.close()
            connection.close()
            return jsonify([dict(row) for row in productos])

    except sqlite3.Error as e:
        return jsonify({"error": str(e)}), 500


@app.route('/eliminar_producto', methods=['DELETE'])
def eliminar_producto():
    nombre_producto = request.json.get('Nombre')  # Recibe el nombre del producto desde el frontend

    if not nombre_producto:
        return jsonify({"error": "Nombre del producto es requerido"}), 400

    try:
        # Conectar a la base de datos
        connection = get_db_connection()
        cursor = connection.cursor()

        # Eliminar el producto basado en el nombre
        query = "DELETE FROM Productos WHERE Nombre = ?"
        cursor.execute(query, (nombre_producto,))
        connection.commit()

        if cursor.rowcount == 0:
            return jsonify({"error": "Producto no encontrado"}), 404

        return jsonify({"message": "Producto eliminado exitosamente"}), 200

    except sqlite3.Error as err:
        print(f"Error al eliminar producto: {err}")
        return jsonify({"error": "Error en la base de datos"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()

if __name__ == '__main__':
    app.run(debug=True)

@app.route("/create-user", methods=["POST"])
def crear_usuario():
    try:
        # Conexión a la base de datos
        connection = get_db_connection()
        cursor = connection.cursor()

        # Obtén los datos del cuerpo de la solicitud
        data = request.json
        name = data.get("name")
        email = data.get("email")
        password = data.get("password")
        role = data.get("role")

        # Imprimir para verificar el valor de role
        print(f"Rol recibido: {role}")  # Verifica qué valor tiene el role

        # Validación de los datos
        if not name or not email or not password:
            return jsonify({"error": "Faltan parámetros"}), 400

        # Asignar el Rol_ID según el rol proporcionado
        if role == "Cliente":
            role_id = 1  # Cliente
        elif role == "Administrador":
            role_id = 2  # Administrador
        else:
            return jsonify({"error": "Rol no válido"}), 400  # Si el rol no es válido, devolver error

        # Verificar el rol asignado
        print(f"Rol asignado: {role_id}")  # Verifica que se asigne correctamente

        # Comprobar si el usuario ya existe
        query_check_user = "SELECT * FROM Usuarios WHERE email = ?"
        cursor.execute(query_check_user, (email,))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({"error": "El usuario ya existe con ese correo electrónico"}), 400

        # Insertar el nuevo usuario con el Rol_ID
        query_insert_user = "INSERT INTO Usuarios (name, email, password, Rol_id) VALUES (?, ?, ?, ?)"
        cursor.execute(query_insert_user, (name, email, password, role_id))
        connection.commit()

        return jsonify({"message": "Usuario creado exitosamente"}), 201

    except sqlite3.Error as e:
        return jsonify({"error": f"Error en la base de datos: {str(e)}"}), 500

    finally:
        if connection:
            cursor.close()
            connection.close()


@app.route("/login", methods=['POST'])
def login():
    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        if connection:
                data = request.json
                email = data.get('email')
                password = data.get('password')

                if not email or not password:
                    return jsonify({"error": "Faltan parámetros"}), 400

                # Verificar las credenciales del usuario
                cursor.execute("SELECT name, email, Rol_ID FROM Usuarios WHERE email = ? AND password = ?", (email, password))
                user = cursor.fetchone()

                if user:
                    # Asignar rol según el Rol_ID
                    rol_id = user[2]
                    if rol_id == 1:
                        role = "cliente"
                    elif rol_id == 2:
                        role = "administrador"
                    else:
                        role = "desconocido"

                    # Si el usuario existe, enviar el objeto con el rol
                    return jsonify({
                        "message": "Inicio de sesión exitoso",
                        "usuario": {
                            "name": user[0],
                            "email": user[1],
                            "role": role  # Devolver el rol como un string más comprensible
                        }
                    }), 200
                else:
                    return jsonify({"error": "Credenciales incorrectas"}), 401

    except Exception as e:
        return jsonify({"error": f"Error en el servidor: {str(e)}"}), 500

    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()
