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
}

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
result = [dict_factory(cursor, row) for row in cursor.fetchall()]

# Mostrar resultados
print(result)

# Cerrar cursor y conexión
cursor.close()
db.close()