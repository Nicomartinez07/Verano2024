import json
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
    try:
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

        # Guardar el resultado en un archivo JSON
        with open("productos.json", "w", encoding="utf-8") as json_file:
            json.dump(result, json_file, ensure_ascii=False, indent=4)

        # Cerrar cursor y conexión
        cursor.close()
        db.close()

        return jsonify({"message": "Datos guardados en productos.json con éxito", "data": result})

    except Error as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
