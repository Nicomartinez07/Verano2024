from flask import Flask, jsonify
import mysql.connector

# Función auxiliar para obtener diccionarios
def dict_factory(cursor, row):
    """Arma un diccionario con los valores de la fila"""
    return {cursor.column_names[i]: row[i] for i in range(len(row))}

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

    # Convertir objeto cursor a lista de diccionarios
    result = [dict_factory(cursor, row) for row in cursor.fetchall()]

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)

@app.route("/usuarios")
def usuarios():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor()

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Usuario"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    resultado = [dict_factory(cursor, row) for row in cursor.fetchall()]

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(resultado)

@app.route("/marcas")
def marcas():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor()

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Marcas"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = [dict_factory(cursor, row) for row in cursor.fetchall()]

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)

@app.route("/categorias")
def categorias():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor()

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Categorias"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = [dict_factory(cursor, row) for row in cursor.fetchall()]

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)


@app.route("/roles")
def roles():
    # Conexión a la base de datos
    db = mysql.connector.connect(**config)

    # Crear un cursor
    cursor = db.cursor()

    # Establecer el método para obtener resultados como diccionarios
    cursor.execute("SET SESSION sql_mode='NO_ENGINE_SUBSTITUTION'")

    # Consulta
    query = "SELECT * FROM Roles"
    cursor.execute(query)

    # Convertir objeto cursor a lista de diccionarios
    result = [dict_factory(cursor, row) for row in cursor.fetchall()]

    # Cerrar cursor y conexión
    cursor.close()
    db.close()
    return jsonify(result)