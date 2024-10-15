from flask import Flask, jsonify, request
import mysql.connector
from mysql.connector import Error
from flask_cors import CORS  # Importar CORS

# Configuración de la conexión
config = {
    'user': 'kioskocetec',        # Cambia esto por tu usuario
    'password': 'kioskocetec111',  # Cambia esto por tu contraseña
    'host': '10.9.120.5',         # Cambia esto si tu base de datos está en otro host
    'database': 'kioskocetec',      # Cambia esto por el nombre de tu base de datos
    'charset': 'utf8mb4'
}

app = Flask(__name__)
CORS(app)  # Habilitar CORS en toda la aplicación
app.config["JSON_AS_ASCII"] = False
@app.route("/productos")
def productos():
    pagina = None
    filtro = None
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    if 'pagina' in request.args:
        pagina = int(request.args['pagina'])

    if request.is_json:
        if 'pagina' in request.json:
            pagina = request.json['pagina']
        if 'filtro' in request.json:
            filtro = request.json['filtro']

    # Crear un cursor
    cursor = db.cursor(dictionary=True) 

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    if pagina == None and filtro == None:
        query = "SELECT * FROM Productos"
        cursor.execute(query)
    elif filtro != None:
        query = "SELECT * FROM Productos WHERE Nombre LIKE '%' || ? || '%'"
        cursor.execute(query, (filtro,))
    else:
        elementos_por_pagina = 20
        paginas_descartadas = pagina-1
        elementos_descartados = paginas_descartadas * elementos_por_pagina
        query = "SELECT * FROM artist LIMIT 20 OFFSET ?"
        cursor.execute(query, (elementos_por_pagina,
                               elementos_descartados,))

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

@app.route("/estados")
def estados():
        # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor(dictionary=True)

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Estados"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = cursor.fetchall()

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)

@app.route("/reserva")
def reserva():
        # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor(dictionary=True)

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Reserva"
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

@app.route("/search", methods=["GET"])
def search():
    try:
        # Conexión a la base de datos
        db = mysql.connector.connect(**config)
        
        if db.is_connected():
            # Obtener el término de búsqueda desde los parámetros de la URL
            term = request.args.get('term', '')

            # Crear un cursor
            cursor = db.cursor(dictionary=True)
            cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

            # Consulta SQL utilizando LIKE para buscar productos que coincidan parcialmente con el nombre
            query = "SELECT Id, Nombre, Precio_venta FROM Productos WHERE Nombre LIKE %s"
            cursor.execute(query, (f"%{term}%",))

            # Obtener los resultados
            results = cursor.fetchall()

            cursor.close()
            return jsonify(results), 200

    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if db.is_connected():
            db.close()


@app.route("/categoria/<int:id>", methods=('GET',))
def productos_por_categoria(id):
   try:
       # Conexión a la base de datos
       db = mysql.connector.connect(**config)


       if db.is_connected():
           # Crear un cursor
           cursor = db.cursor(dictionary=True)
           cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")


           # 1. Consulta para obtener los productos de la categoría
           query_productos = "SELECT Id, Nombre, Precio_venta, Id_categoria, Id_marca FROM Productos WHERE Id_categoria = %s"
           cursor.execute(query_productos, (id,))
           productos = cursor.fetchall()


           # Si no hay productos en la categoría, devolver error 404
           if not productos:
               cursor.close()
               return jsonify({"error": "No se encontraron productos para esta categoría"}), 404


           cursor.close()
           return jsonify(productos)


   except mysql.connector.Error as e:
       return jsonify({"error": str(e)}), 500


   finally:
       if db.is_connected():
           db.close()


