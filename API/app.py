from flask import Flask, jsonify, request
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

@app.route("/producto/<int:id>", methods=('GET', 'DELETE'))
def detalle_producto(id):
    try:
        # Conexión a la base de datos
        db = mysql.connector.connect(**config)
        
        if db.is_connected():
            # Crear un cursor
            cursor = db.cursor(dictionary=True)
            cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

            if request.method == 'GET':
                # 1. Consulta para obtener el producto
                query_producto = "SELECT Id, Nombre, Precio_venta, Id_categoria, Id_marca FROM Productos WHERE Id = %s"
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

                # Añadir los nombres de la categoría y marca al producto
                product['nombre_categoria'] = categoria['Nombre'] if categoria else None
                product['nombre_marca'] = marca['Nombre'] if marca else None

                cursor.close()
                return jsonify(product)

            elif request.method == 'DELETE':
                # Consulta para borrar el producto
                delete_producto = "DELETE FROM Productos WHERE Id = %s"
                cursor.execute(delete_producto, (id,))
                db.commit()

                if cursor.rowcount == 0:
                    cursor.close()
                    return jsonify({"error": "Producto no encontrado"}), 404

                cursor.close()
                return jsonify({"message": "Producto eliminado correctamente"}), 200

    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if db.is_connected():
            db.close()


#Put
@app.route("/producto", methods=('PUT',))
def insertar_producto():
    try:
        # Conexión a la base de datos
        db = mysql.connector.connect(**config)
        
        if db.is_connected():
            # Crear un cursor
            cursor = db.cursor()
            data = request.get_json()

            # Validar que todos los campos necesarios estén presentes en el JSON
            required_fields = ['Nombre', 'Img', 'Precio_compra', 'Precio_venta', 'Stock', 'Cantidad_Gramos', 'Id_categoria', 'Id_marca']
            if not all(field in data for field in required_fields):
                return jsonify({"error": "Faltan campos obligatorios"}), 400

            # Extraer los datos del producto
            nombre = data['Nombre']
            img = data['Img']
            precio_compra = data['Precio_compra']
            precio_venta = data['Precio_venta']
            stock = data['Stock']
            cantidad_gramos = data['Cantidad_Gramos']
            id_categoria = data['Id_categoria']
            id_marca = data['Id_marca']

            # Consulta SQL para insertar el producto
            query_insertar = """
                INSERT INTO Productos (Id_marca, Id_categoria, Nombre, Img, Precio_compra, Precio_venta, Stock, Cantidad_Gramos)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(query_insertar, (id_marca, id_categoria, nombre, img, precio_compra, precio_venta, stock, cantidad_gramos))
            db.commit()

            # Confirmar que el producto se insertó correctamente
            if cursor.rowcount == 1:
                # Obtener el ID del producto recién insertado
                id_producto = cursor.lastrowid
                cursor.close()
                return jsonify({"message": "Producto insertado correctamente", "Id": id_producto}), 201
            else:
                cursor.close()
                return jsonify({"error": "Error al insertar el producto"}), 500

    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500
    
    finally:
        if db.is_connected():
            db.close()



