/* Usuario------------------------------------------------------------------------------ */

INSERT INTO Usuario (Nombre, Apellido, Curso, Direccion, Num_direccion)
VALUES ('Nombre', 'Apellido', 'Curso', 'Direccion', Num_direccion);

UPDATE Usuario
SET X
WHERE x = ?

DELETE FROM Usuario
WHERE x = ?;

INSERT INTO Usuario (Nombre, Apellido, Curso, Direccion, Num_direccion)
VALUES ('Gonzalo', 'Alarcon', '5b', 'Rondeau', 124);
('María', 'Fernández', '5b', 'López', 56),
('Juan', 'Pérez', '5a', 'Calle Mayor', 34),
('Ana', 'Gómez', '5c', 'Pino', 78),
('Luis', 'Martínez', '5d', 'Sol', 12),
('Laura', 'Sánchez', '5a', 'Río', 90),
('Carlos', 'Ramírez', '5d', 'Mar', 45),
('Elena', 'Torres', '5a', 'Calle Luna', 23),
('Diego', 'Hernández', '5c', 'Valle', 67),
('Sofía', 'Jiménez', '5c', 'Cruz', 89),
('Javier', 'Moreno', '5b', 'Jardín', 33);


/* Roles_Usuario------------------------------------------------------------------------------ */
INSERT INTO Roles_Usuario (Id_usuario, Id_rol)
VALUES (Id_usuario, Id_rol);

UPDATE Roles_Usuario
SET X
WHERE x = ?;

DELETE FROM Roles_Usuario
WHERE x = ?;


INSERT INTO Roles_Usuario (Id_usuario, Id_rol)
VALUES (15, 2),
		(16, 2),
        (17, 2),
        (18, 2),
        (19, 2),
		(20, 2),
		(21, 2),
        (22,2),
        (12, 1),
        (13, 3),
        (14, 4);


/* Roles------------------------------------------------------------------------------ */
INSERT INTO Roles (Nombre)
VALUES ('Nombre');

UPDATE Roles
SET X
WHERE x = ?;

DELETE FROM Roles
WHERE x = ?;


INSERT INTO Roles (Nombre)
VALUES ('Administrador'),
('Cliente'),
('Proovedor'),
('Editor');

/* Marcas------------------------------------------------------------------------------ */

INSERT INTO Marcas (Nombre)
VALUES ('Nombre');

UPDATE Marcas
SET X
WHERE x = ?;

DELETE FROM Marcas
WHERE x = ?;

<<<<<<< HEAD
/* Productos------------------------------------------------------------------------------ */
=======

INSERT INTO Marcas (Nombre)
VALUES ("Oreo"),("Don Satur"),("Coca Cola"),("Sprite"),("Pitusas"),("Aquarius"),("Guaymallen"),("Aguila"),("Trio"),("Pepitos");


/* ------------------------------------------------------------------------------ */
>>>>>>> 66033eb2cf8e9cb8b4162b18117d3f6ca63ad79d

INSERT INTO Productos (Id_marca, Id_categoria, Nombre, Img, Precio_compra, Precio_venta, Stock, Cantidad_Gramos)
VALUES (Id_marca, Id_categoria, 'Nombre', 'linkImg', Precio_compra, Precio_venta, Stock, Cantidad_Gramos);


UPDATE Productos
SET X
WHERE x = ?;

DELETE FROM Productos
WHERE x = ?;

<<<<<<< HEAD
/* Reserva------------------------------------------------------------------------------ */
=======
INSERT INTO Productos (Id_marca, Id_categoria, Nombre, Img, Precio_compra, Precio_venta, Stock, Cantidad_Gramos)
VALUES (1, 4, 'Alfajor Oreo', 'linkImg', 800, 1000, 5, 50 ),
(2, 3, 'Galletitas Don Satur', 'linkImg', 600, 800, 5, 100),
(3, 1, 'Gaseosa Coca Cola', 'linkImg', 800, 1000, 5, 500),
(4, 1, 'Gaseosa Sprite', 'linkImg', 800, 1000, 2, 500),
(5, 3, 'Galletitas Pitusas', 'linkImg', 600,800, 5, 200),
(6, 1, 'Gaseosa Aquarius', 'linkImg', 800, 1000, 7, 500),
(7, 4, 'Alfajor Guaymallen', 'linkImg', 300,500, 9, 50),
(8, 4, 'Alfajor Aguila', 'linkImg', 800, 1000, 6, 50),
(9, 3, 'Galletitas Pepas Trio', 'linkImg',500 , 700, 4, 200),
(10, 3, 'Galletitas Pepitos', 'linkImg', 1000, 1200, 4, 100);

/* ------------------------------------------------------------------------------ */
>>>>>>> 66033eb2cf8e9cb8b4162b18117d3f6ca63ad79d

INSERT INTO Reserva (Id_usuario, Id_producto, Monto)
VALUES (Id_usuario, Id_producto, Monto);

UPDATE Reserva
SET X
WHERE x = ?;

DELETE FROM Reserva
WHERE x = ?;

<<<<<<< HEAD
/* Categorias------------------------------------------------------------------------------ */
=======
INSERT INTO Reserva (Id_usuario, Id_producto, Monto)
VALUES 
(12, 1, 1000),
(13, 2, 800),
(14, 3, 1000),
(15, 4, 1000),
(16, 5, 800),
(17, 6, 1000),
(18, 7, 500),
(19, 8, 1000),
(20, 9, 700),
(21, 10, 1200);
/* ------------------------------------------------------------------------------ */
>>>>>>> 66033eb2cf8e9cb8b4162b18117d3f6ca63ad79d

INSERT INTO Categorias (Nombre)
VALUES ('Nombre');

UPDATE Categorias
SET X
WHERE x = ?;

DELETE FROM Categorias
WHERE x = ?;

<<<<<<< HEAD
INSERT INTO Categorias (Nombre)
VALUES ('Bebidas'),
	   ('Chupetines'),
       ('Galletitas'),
       ('Alfajores'),
       ('Caramelos'),
       ('Chicles'),
       ('Snacks');

/* Tesoreria------------------------------------------------------------------------------ */

INSERT INTO Tesoreria (Fecha, Monto, Id_Estado, Descripcion)
VALUES (Fecha, Monto, Id_Estado, Descripcion);

UPDATE Tesoreria
SET X
WHERE x = ?;

DELETE FROM Tesoreria
WHERE x = ?;    

/* Estados------------------------------------------------------------------------------ */

INSERT INTO Estados (Estado)
VALUES (Estado);

UPDATE Estados
SET X
WHERE x = ?; 

DELETE FROM Estados
WHERE x = ?;

/* ------------------------------------------------------------------------------ */
