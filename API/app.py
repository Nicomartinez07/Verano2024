from flask import Flask, jsonify
import mysql.connector
from mysql.connector import Error

# Configuración de la conexión
config = {
    'user': 'kioskocetec',        # Cambia esto por tu usuario
    'password': 'kioskocetec111',  # Cambia esto por tu contraseña
    'host': '10.9.120.5',         # Cambia esto si tu base de datos está en otro host
    'database': 'kioskocetec',      # Cambia esto por el nombre de tu base de datos
    'charset': 'utf8mb4'
}

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False
@app.route("/productos")
def productos():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor(dictionary=True) 

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Productos"
    cursor.execute(query)

    result = cursor.fetchall()


    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)

@app.route("/usuarios")
def usuarios():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor(dictionary=True)

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Usuario"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = cursor.fetchall()

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)

@app.route("/marcas")
def marcas():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor(dictionary=True)

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Marcas"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = cursor.fetchall()

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)

@app.route("/categorias")
def categorias():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor(dictionary=True)

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Categorias"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = cursor.fetchall()

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)


@app.route("/roles")
def roles():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor(dictionary=True)

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Roles"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = cursor.fetchall()

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)

@app.route("/producto/<int:id>")
def detalle_producto(id):
    try:
        # Conexión a la base de datos
        db = mysql.connector.connect(**config)
        
        if db.is_connected():
            # Crear un cursor
            cursor = db.cursor(dictionary=True)
            
            # Establecer el modo para obtener resultados como diccionarios
            cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")
            
            # 1. Consulta para obtener el producto
            query_producto = "SELECT Id, Nombre, Precio_venta, Id_categoria,Id_marca FROM Productos WHERE Id = %s"
            cursor.execute(query_producto, (id,))
            product = cursor.fetchone()

            # Si el producto no existe, devolver error 404
            if not product:
                cursor.close()
                return jsonify({"error": "Producto no encontrado"}), 404

            # 2. Consulta para obtener el nombre de la Categoría (si existe)
            query_categoria = "SELECT Nombre FROM Categorias WHERE Id = %s"
            cursor.execute(query_categoria, (product['Id_categoria'],))
            categoria = cursor.fetchone()

            # 3. Consulta para obtener el nombre de la Marca (si existe)
            query_marca = "SELECT Nombre FROM Marcas WHERE Id = %s"
            cursor.execute(query_marca, (product['Id_marca'],))
            marca = cursor.fetchone()

            # Cerrar el cursor después de usarlo
            cursor.close()

            # Añadir los nombres de la categoría y marca al producto
            if categoria:
                product['nombre_categoria'] = categoria['Nombre']
            else:
                product['nombre_categoria'] = None  # O el valor que prefieras

            if marca:
                product['nombre_marca'] = marca['Nombre']
            else:
                product['nombre_marca'] = None  # O el valor que prefieras

            # Devolver el producto con las marcas y categorías
            return jsonify(product)

    except Error as e:
        return jsonify({"error": str(e)}), 500
    
    finally:
        # Asegurarse de que la conexión se cierre siempre
        if db.is_connected():
            db.close()