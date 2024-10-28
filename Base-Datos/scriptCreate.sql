CREATE TABLE Usuario (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50),
    Curso VARCHAR(50) NOT NULL,
    Direccion VARCHAR(50),
    Num_direccion INT,
);

CREATE TABLE Roles_Usuario (
    Id_rol INT PRIMARY KEY,
    Id_usuario INT NOT NULL,
    FOREIGN KEY (Id_rol) REFERENCES Roles(Id),
    FOREIGN KEY (Id_usuario) REFERENCES Usuario(Id),
);

CREATE TABLE Roles (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
);

CREATE TABLE Marcas (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
);

CREATE TABLE Productos (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Id_marca INT NOT NULL,
    Id_categoria INT NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Img VARCHAR(255) NOT NULL,
    Precio_compra INT NOT NULL,
    Precio_venta INT NOT NULL,
    Stock INT,
    Cantidad_Gramos FLOAT,
    FOREIGN KEY (Id_categoria) REFERENCES Categorias(Id),
    FOREIGN KEY (Id_marca) REFERENCES Marcas(Id),
);

CREATE TABLE Reserva (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Id_usuario INT NOT NULL ,
    Id_producto INT NOT NULL ,
    Monto INT NOT NULL,
    FOREIGN KEY (Id_usuario) REFERENCES Usuario(Id),
    FOREIGN KEY (Id_producto) REFERENCES Producto(Id),
);

CREATE TABLE Categorias (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
);

CREATE TABLE Facturas (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Id_usuario INT NOT NULL,
    Fechahora TIMESTAMP NULL,
    Id_producto INT NOT NULL,
    Id_reserva INT NOT NULL,
    Id_MDP INT NOT NULL,
    Total INT NOT NULL,
    FOREIGN KEY (Id_producto) REFERENCES Producto(Id),
    FOREIGN KEY (Id_reserva) REFERENCES Reserva(Id),
    FOREIGN KEY (Id_MDP) REFERENCES MetodoDePago(Id),
);

CREATE TABLE MetodoDePago (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
);

CREATE TABLE Tesoreria (
    Fecha DATETIME NULL,
    Monto INT NULL,
    Id_Estado INT NOT NULL,
    Descripcion TEXT NULL,
    FOREIGN KEY (Id_Estado) REFERENCES Estados(Id)
);

CREATE TABLE Estados (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Estado VARCHAR(50) NOT NULL,
);
 
