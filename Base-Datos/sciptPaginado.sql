/*Productos*/
SELECT m.Nombre as Marca, c.Nombre as Categoria, p.Nombre as Producto, p.Precio_venta
FROM Productos p  
JOIN Categorias c ON p.Id_categoria = c.id 
JOIN Marcas m  ON  p.id_marca = m.id
ORDER BY Id_categoria DESC
LIMIT 5 OFFSET 20; 

/*Marcas*/
SELECT * 
FROM Marcas
ORDER BY Id_marca

LIMIT 10 OFFSET (pagina - 1) * 10;

/*Usuario*/
SELECT *
FROM Usuario
ORDER BY Apellido

LIMIT 10 OFFSET (pagina - 1) * 10;

