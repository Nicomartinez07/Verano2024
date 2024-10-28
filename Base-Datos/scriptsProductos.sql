DELETE FROM Categorias
WHERE Nombre IN ('Chupetines', 'Caramelos', 'Chicles');

INSERT INTO Categorias (Nombre)
VALUES ('Golosinas');

INSERT INTO Productos (Id_marca, Id_categoria, Nombre, Img, Precio_compra, Precio_venta, Stock, Cantidad_Gramos)
VALUES /*Galletitas:*/  
                        (12, 3, 'Pepas trio', 'https://imgs.search.brave.com/Kb-GATqHUFkfGuJb5JLQa-Bol6IwB8kD3QcucPdFFDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDkvZ2FsbGV0aXRh/cy10cmlvLXBlcGFz/LW9mZXJ0YS5qcGc', 500, 700, 1, 200),
                        (14, 3, 'Mini toddy', 'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/9780/26694/mini-toddy-galletitas-50g__49003.1702500962.jpg?c=2', 400, 600, 1, 50),
                        (17, 3, 'Pepitos', 'https://imgs.search.brave.com/kIO_m4w9xaHTGnHD4NH06zBpIRutkIfBvBgKULcKw8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDcvZ2FsbGV0aXRh/cy1wZXBpdG9zLXBv/ci1tYXlvci5qcGc', 1000, 1200, 1, 119),
                        (19, 3, 'Don Satur Saladas', 'https://m.media-amazon.com/images/I/51U0NgN1KbL.jpg', 600, 800, 1, 200),
                        (19, 3, 'Don Satur Dulces', 'https://f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/b/i/bizcochitosdulcesdegrasadonsatur.png
', 600, 800, 1, 200),
                        (12, 3, 'Pitusas Chocolate', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUHEDlVXVLoWz786y_WNFCGFEHvYQz-lLJg&s', 600, 800, 1, 160),
                        (12, 3, 'Pitusas Frutilla', 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.parnor.com.ar/wp-content/uploads/2014/11/PITUSAS-FRUTILLA.png', 600, 800, 1, 160),
                        (12, 3, 'Pitusas Limon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86Fy0sPMa7DZsnantRvzJTLqTY3QjCl3oRQ&s', 600, 800, 1, 160),
                        (12, 3, 'Duquesa', 'https://www.distribuidorapop.com.ar/wp-content/uploads/2023/10/GALLETITAS-TERRABUSI-DUQUESA-115GR-POP-ARGENTINA.jpg', 600, 800, 1, 115),
                        (12, 3, 'Melba', 'https://www.distribuidorapop.com.ar/wp-content/uploads/2016/08/galletitas-melba-por-mayor.jpg
', 600, 800, 1, 115),
                        (16, 3, 'Oreos', 'https://imgs.search.brave.com/A9L_6WB3rtomWHLTGxySPPVCpsny03KU2jOWO9myRts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUvZ2FsbGV0aXRh/cy1vcmVvLXZlbnRh/LmpwZw
', 1000, 1200, 1, 117),
                        (12, 3, 'Bizcochitos Jorjito', 'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/698/8570/D_NQ_NP_601611-MLA42159410745_062020-O__82837.1725633055.jpg?c=2?imbypass=on', 600, 800, 1, 200),
                        (12, 3, 'Mini Oreos', 'https://articulo.mercadolibre.com.ar/MLA-907054327-galletitas-mini-oreo-clasicas-pack-x-6u-50g-cu-_JM', 400, 600, 1, 50),

                        /*Bebidas: */
                        (13, 1, 'Aquarius', 'https://jumboargentina.vtexassets.com/arquivos/ids/783111/Agua-Saborizada-Aquarius-Manzana-500-Ml-1-469228.jpg?v=638206693783500000', 800, 1000, 1, 500),
                        (13, 1, 'Fanta', 'https://ardiaprod.vtexassets.com/arquivos/ids/307616/Gaseosa-Fanta-Naranja-500-Ml-_1.jpg?v=638599332519170000
', 800, 1000, 1, 500),
                        (13, 1, 'Sprite', 'https://jumboargentina.vtexassets.com/arquivos/ids/791799/Gaseosa-Sprite-Lima-lim-n-500-Ml-1-10500.jpg?v=638291793659030000', 800, 1000, 1, 500),
                        (14, 1, 'Seven Up', 'https://acdn.mitiendanube.com/stores/323/592/products/a-vacia-copia1-d8743be8bf776e47a415946714214897-1024-10241-a33b25d8e10476c6c316414059802723-640-0.jpg', 800, 1000, 1, 500),
                        (13, 1, 'Coca Cola', 'https://ardiaprod.vtexassets.com/arquivos/ids/307622/Gaseosa-CocaCola-Sabor-Original-500-Ml-_1.jpg?v=638599332594100000', 800, 1000, 1, 500),
                        (15, 1, 'Baggio Manzana', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbq-So6tgafiqxpQuX0093Tdty3qomiM5K_w&s', 300, 500, 1, 200),
                        (15, 1, 'Baggio Naranja', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6Gb1Kd6Bprz_J0W02K-9SepkWJctwgI4Kw&s', 300, 500, 1, 200),
                        (15, 1, 'Baggio Multifruta', 'https://acdn.mitiendanube.com/stores/001/157/846/products/el-granero-141-ed55ae6938d339d71816624915194813-1024-1024.png', 300, 500, 1, 200),

                        /*Alfajores: */
                        (20, 4, 'Guaymallen Membrillo', 'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/590x590/products/1699/4428/triplefruta__99270.1723126017.png?c=2', 300, 500, 1, 70),
                        (20, 4, 'Guaymallen Negro', 'https://d3340tyzmtlo4u.cloudfront.net/users/864/images/detailed/10/Guaymall%C3%A9n_Alfajor_Triple_Chocolate,_70_g_.webp', 300, 500, 1, 70),
                        (20, 4, 'Guaymallen Blanco', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2y42-LNAOn3PSQjNmlD0RPwxmN_rynWnqdA&s', 300, 500, 1, 70),
                        (16, 4, 'Tita', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD-8xvcik4wtF0ok1oKm5V-f5yD8l7pQfZg&s', 300, 500, 1, 36),
                        (16, 4, 'Milka Mousse', 'https://acdn.mitiendanube.com/stores/001/185/658/products/milkatriplemouse-648377d310b45c22b217148466698324-1024-1024.jpg', 800, 1000, 1, 70),
                        (16, 4, 'Milka Dulce de Leche', 'https://http2.mlstatic.com/D_NQ_NP_775779-MLA76084901518_052024-O.webp', 800, 1000, 1, 70),
                        (16, 4, 'Milka Oreo', 'https://acdn.mitiendanube.com/stores/001/217/469/products/d_nq_np_660920-mla72692203490_112023-o-f9fdb82f6c924919a617163897148403-640-0.webp', 800, 1000, 1, 70),
                        (16, 4, 'Shot', 'https://http2.mlstatic.com/D_NQ_NP_811767-MLA53825682135_022023-O.webp', 800, 1000, 1, 60),
                        (16, 4, 'Pepito', 'https://http2.mlstatic.com/D_NQ_NP_645005-MLA72605897519_102023-O.webp', 800, 1000, 1, 60),
                        (16, 4, 'Oreo', 'https://acdn.mitiendanube.com/stores/001/185/658/products/oreotriple-43d148d1c1f4457f7417152891747509-1024-1024.jpg
', 800, 1000, 1, 60),
                        (16, 4, 'Bonobon', 'https://dcdn.mitiendanube.com/stores/001/786/605/products/2-11-1e2dc3ca9816a1fd9d16278404161187-240-0.jpg', 800, 1000, 1, 60),
                        (16, 4, 'Aguila', 'https://http2.mlstatic.com/D_NQ_NP_897823-MLA44651065774_012021-O.webp', 800, 1000, 1, 70),
                        (12, 4, 'Rasta Blanco', 'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/11987/30784/rasta-alfajor-blanco-70g__50837.1724442132.jpg?c=2
', 1000, 1200, 1, 70),
                        (12, 4, 'Rasta Negro', 'https://acdn.mitiendanube.com/stores/004/231/250/products/whatsapp-image-2024-05-09-at-10-10-51-6d012a87858c5e66fe17152606073345-640-0.jpeg', 1000, 1200, 1, 70),

                        /*Snacks: */
                        (12, 7, 'Nikitos', 'https://acdn.mitiendanube.com/stores/323/592/products/nikitos-papas1-dd249f87ca157dd3ea16678429238504-640-0.jpg
', 800, 1000, 1, 65),
                        (12, 7, 'Nikitos Ketchup', 'https://acdn.mitiendanube.com/stores/323/592/products/nikitos-ketchup1-9156b598f29fdbd01716678404946669-1024-1024.jpg', 800, 1000, 1, 70),
                        (12, 7, 'Nikitos Corte Americano', 'https://acdn.mitiendanube.com/stores/323/592/products/nikitos-americana1-c3c0bdf83f8d7719ac16678404748351-640-0.jpg', 800, 1000, 1, 70),
                        (12, 7, 'Saladix Jamon', 'https://www.distribuidorapop.com.ar/wp-content/uploads/2019/06/saladix-jamon-30gr-distirbuidora-pop.jpg
', 400, 600, 1, 30),
                        (12, 7, 'Saladix Pizza', 'https://arcorencasa.com/wp-content/uploads/2023/08/20230824-3870.jpg', 400, 600, 1, 30),
                        
                        (16, 7, 'Club Social', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN13Cks5JDHmoyK-ewTbwp9isSMPPD5cMx1w&s
', 200, 400, 1, 24),
                        (16, 7, 'Club Social Jamon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPssBUOddDrCjavN-T9kDQDJsRJbsBkvG4zQ&s', 200, 400, 1, 24),
                        (12, 7, 'Papas Quento Asador Criollo', 'https://http2.mlstatic.com/D_NQ_NP_800663-MLA73736455776_012024-O.webp
', 1400, 1600, 1, 90),
                        (12, 7, 'Papas Quento Jamon Serrano', 'https://modomarketar.vteximg.com.br/arquivos/ids/164210/Papas-Fritas-Quento-Jamon-Serrano-X-90-Grs-1-2909.jpg?v=637941117695670000', 1400, 1600, 1, 90),
                        (12, 7, 'Papas Quento BBQ', 'https://acdn.mitiendanube.com/stores/001/218/857/products/54231-70be5ab884b3e0ce1516741546636224-1024-1024.png
', 1400, 1600, 1, 90),
                        (12, 7, 'Papas Quento Cheddar', 'https://www.lacoopeencasa.coop/media/lcec/publico/articulos/4/0/c/40c8865c402c308d991837ebf83887ca', 1400, 1600, 1, 90),

                        /*Golosinas:*/
                        
                        (12, 8, 'Bombon Oreo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwU5eHAncMsONqxuVuQQYlzO48DQmpteNoA&s', 50, 200, 1, 10),
                        (12, 8, 'Bull dog', 'https://acdn.mitiendanube.com/stores/001/218/857/products/1220-pastillas-bulldog-sandia-x12-7ce801140f5a86657d16986891226934-1024-1024.jpg', 400, 600, 1, 30),
                        (16, 8, 'Beldent Menta', 'https://acdn.mitiendanube.com/stores/323/592/products/beldent-menta-3dceda23ad189c5d7d17056840414525-1024-1024.jpg
', 300, 500, 1, 10),
                        (16, 8, 'Beldent Chicle Globo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCT-J5DD1iMIo4YVJ1608_U1Zc6kGc8ZtjRQ&s', 300, 500, 1, 10),
                        (16, 8, 'Rhodesia', 'https://www.distribuidorapop.com.ar/wp-content/uploads/2014/06/rhodesia-precio-mayorista-768x768.jpg.webp', 300, 500, 1, 22),
                        (12, 8, 'Chupetines c/chicle', 'https://acdn.mitiendanube.com/stores/001/061/483/products/whatsapp-image-2024-04-13-at-10-17-52-1e5037f5abe7abfed417130143769747-640-0.jpeg', 30, 200, 1,5),
                        (12, 8, 'Chupetin Pop', 'https://acdn.mitiendanube.com/stores/516/580/products/dlizt261nt_1024x11-901050efc0ed32c69d15955089432049-1024-1024.jpg', 30, 100, 1, 5),
                        (12, 8, 'Pipas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCgW-RquJBAG4PE1aKcuSqA4QSLDHWLgewg&s
', 100, 300, 1, 18),
                        (12, 8, 'Cubanitos', 'https://acdn.mitiendanube.com/stores/516/580/products/dulce-de-leche1-38429963999280148516195254579587-1024-1024.jpg', 30, 100, 1, 5),
                        (12, 8, 'Hamlet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb4lqDCVvBGkxHGiIsgIEV0bRY3aLuux3Ow&s
', 300, 500, 1, 43),
                        (12, 8, 'Sapito Blanco', 'https://jumboargentina.vtexassets.com/arquivos/ids/823718/Chocolate-Sapito-Arcor-Mani-Blanco-10gr-1-1016968.jpg?v=638508259953600000', 50, 200, 1, 10),
                        (12, 8, 'Sapito Mani', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLW0QppInWcaqYdVj8I1jdXhIcLvfGRdoR8w&s', 50, 200, 1, 10),
                        (12, 8, 'Sapito Dulce de Leche', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcHtkSqZeb1UimxHhm9OyE4v4xZsHNIxt0w&s', 50, 200, 1, 10),
                        (12, 8, 'Palitos de la Selva (5x200)', 'https://http2.mlstatic.com/D_NQ_NP_657750-MLU73787237206_012024-O.webp

', 30, 200, 1, 5),
                        (12, 8, 'Flynn Paff', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Pze0pV1DWPFRBYbt4WvvzF-RzJXKXgRYRg&s', 30, 100, 1, 5),	
                        (12, 8, 'Chocman', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQ2pFpdgm5EATx27kfgzOJhEQPTGTMAAg8Q&s', 300, 500, 1, 35),
                        (12, 8, 'Turron', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXBRW0AclpDmAlzpevi8SM69c1zvJgCGgVA&s', 50, 200, 1, 16),
                        (12, 8, 'Lenguetazo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1m2xZifvyF1ckPBAAOgtEZgSMXz3o9pm4MQ&s', 50, 200, 1, 10),
                        (21, 8, 'Tic Tacs', 'https://acdn.mitiendanube.com/stores/001/185/658/products/786000271-37bdfde807a869bace16794021567358-1024-1024.jpg
', 400, 600, 1, 16),
                        (21, 8, 'Tic Tacs Multifruta', 'https://acdn.mitiendanube.com/stores/001/185/658/products/77973940012721-76300af6bd385e8a7c16794016588150-1024-1024.jpg', 400, 600, 1, 16),
                        (16, 8, 'Flow Cereal', 'https://http2.mlstatic.com/D_Q_NP_848801-MLU76991294375_062024-O.webp
', 300, 500, 1, 23),
                        (12, 8, 'Bubbaloo Tutti Frutti', 'https://ardiaprod.vtexassets.com/arquivos/ids/326378/Chicle-Bubbaloo-Tutti-Frutti-5-Gr-_1.jpg?v=638599594320730000', 30, 200, 1, 5),
                        (18, 8, 'Mantecol', 'https://ardiaprod.vtexassets.com/arquivos/ids/323018/Mantecol-bajo-en-Sodio-26-Gr-_1.jpg?v=638599550798330000
', 400, 600, 1, 26);


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*Marcas de productos agrupados por su empresa: */

/* Galletitas */
("Pepas trio", "Arcor"),
("Mini toddy", "Pepsico"),
("Pepitos", "Bagley"),
("Don satur saladas", "Don Satur"),
("Don satur dulces", "Don Satur"),
("Pitusas", "Arcor"),
("Duquesa", "Arcor"),
("Melba", "Arcor"),
("Oreos", "Mondelez"),

/* Bebidas */
("Aquarius", "The Coca-Cola Company"),
("Fanta", "The Coca-Cola Company"),
("Sprite", "The Coca-Cola Company"),
("Seven Up", "Pepsico"),
("Coca cola", "The Coca-Cola Company"),
("Bagio", "Baggio"),

/* Alfajores */
("Guaymallen triple", "Guaymallén"),
("Tita", "Mondelez"),
("Milka", "Mondelez"),
("Shot", "Mondelez"),
("Oreo", "Mondelez"),
("Rasta blanco", "Arcor"),
("Rasta negro", "Arcor"),

/* Snacks */
("Nikitos", "Arcor"),
("Saladix", "Pepsico"),
("Club Social", "Mondelez"),
("Papas Quento", "Arcor"),

/* Golosinas */
("Bull dog", "Arcor"),
("Beldent", "Mondelez"),
("Rhodesia", "Mondelez"),
("Chupetines con chicle", "Arcor"),
("Chupetines sin chicle", "Arcor"),
("Pipas", "Arcor"),
("Cubanitos", "Arcor"),
("Hamlet", "Arcor"),
("Sapito", "Arcor"),
("Palitos de la Selva", "Arcor"),
("Tic Tacs", "Ferrero"),
("Bubbaloo Tutti Frutti", "Mondelez"),
("Mantecol", "Arcor"),
("Flow Cereal", "Georgalos"),


DELETE FROM Marcas;

INSERT INTO Marcas (Nombre)
VALUES 
('Arcor'),
('The Coca-Cola Company'),
('Pepsico'),
('Baggio'),
('Mondelez'),
('Bagley'),
('Georgalos'),
('Don Satur'),
('Guaymallén'),
('Ferrero');

/*LINKS------------------------------------------------------------------------------------------------------------------------------------------*/
/* Galletitas */

Pepas trio: https://imgs.search.brave.com/Kb-GATqHUFkfGuJb5JLQa-Bol6IwB8kD3QcucPdFFDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDkvZ2FsbGV0aXRh/cy10cmlvLXBlcGFz/LW9mZXJ0YS5qcGc

Mini toddy: https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/9780/26694/mini-toddy-galletitas-50g__49003.1702500962.jpg?c=2

Pepitos: https://imgs.search.brave.com/kIO_m4w9xaHTGnHD4NH06zBpIRutkIfBvBgKULcKw8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDcvZ2FsbGV0aXRh/cy1wZXBpdG9zLXBv/ci1tYXlvci5qcGc

Don satur saladas: https://m.media-amazon.com/images/I/51U0NgN1KbL.jpg

Don satur Dulces: https://f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/b/i/bizcochitosdulcesdegrasadonsatur.png

Pitusas: https://imgs.search.brave.com/PlURa1ePFg6cSiKuS7uBGSOxnO-uDHvniS3dNuVxjns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmRp/YXByb2QudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzMx/Njc1OS01MDAtYXV0/bz92PTYzODU5OTQ2/NDA0MzI3MDAwMCZ3/aWR0aD01MDAmaGVp/Z2h0PWF1dG8mYXNw/ZWN0PXRydWU

Duquesa: https://www.distribuidorapop.com.ar/wp-content/uploads/2023/10/GALLETITAS-TERRABUSI-DUQUESA-115GR-POP-ARGENTINA.jpg

Melba: https://www.distribuidorapop.com.ar/wp-content/uploads/2016/08/galletitas-melba-por-mayor.jpg

Oreos: https://imgs.search.brave.com/A9L_6WB3rtomWHLTGxySPPVCpsny03KU2jOWO9myRts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUvZ2FsbGV0aXRh/cy1vcmVvLXZlbnRh/LmpwZw






/* Bebidas */
Aquarius: https://jumboargentina.vtexassets.com/arquivos/ids/783111/Agua-Saborizada-Aquarius-Manzana-500-Ml-1-469228.jpg?v=638206693783500000

Fanta: https://ardiaprod.vtexassets.com/arquivos/ids/307616/Gaseosa-Fanta-Naranja-500-Ml-_1.jpg?v=638599332519170000

Sprite: https://jumboargentina.vtexassets.com/arquivos/ids/791799/Gaseosa-Sprite-Lima-lim-n-500-Ml-1-10500.jpg?v=638291793659030000

Seven Up: https://acdn.mitiendanube.com/stores/323/592/products/a-vacia-copia1-d8743be8bf776e47a415946714214897-1024-10241-a33b25d8e10476c6c316414059802723-640-0.jpg

Coca cola: https://ardiaprod.vtexassets.com/arquivos/ids/307622/Gaseosa-CocaCola-Sabor-Original-500-Ml-_1.jpg?v=638599332594100000

Bagio: https://http2.mlstatic.com/D_883379-MLA50260602960_062022-C.jpg






/* Alfajores */
Guaymallen triple: https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/guaymallen-triple-x-3-614e08a31ad45.png

Tita: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD-8xvcik4wtF0ok1oKm5V-f5yD8l7pQfZg&s

Milka: https://www.farmaciassanchezantoniolli.com.ar/13164-large_default/milka-mousse-alfajor-triple-x-55g-.jpg

Shot: https://http2.mlstatic.com/D_NQ_NP_811767-MLA53825682135_022023-O.webp

Oreo: https://acdn.mitiendanube.com/stores/001/185/658/products/oreotriple-43d148d1c1f4457f7417152891747509-1024-1024.jpg

Rasta Blanco: https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/11987/30784/rasta-alfajor-blanco-70g__50837.1724442132.jpg?c=2

Rasta Negro: https://acdn.mitiendanube.com/stores/004/231/250/products/whatsapp-image-2024-05-09-at-10-10-51-6d012a87858c5e66fe17152606073345-640-0.jpeg






/* Snacks */
Nikitos: https://acdn.mitiendanube.com/stores/323/592/products/nikitos-papas1-dd249f87ca157dd3ea16678429238504-640-0.jpg

Saladix: https://www.distribuidorapop.com.ar/wp-content/uploads/2019/06/saladix-jamon-30gr-distirbuidora-pop.jpg

Club Social: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN13Cks5JDHmoyK-ewTbwp9isSMPPD5cMx1w&s

Papas Quento Jamon: https://modomarketar.vteximg.com.br/arquivos/ids/164210/Papas-Fritas-Quento-Jamon-Serrano-X-90-Grs-1-2909.jpg?v=637941117695670000

Papas Quento Asado Criollo: https://http2.mlstatic.com/D_NQ_NP_800663-MLA73736455776_012024-O.webp

Papas Quento BBQ: https://acdn.mitiendanube.com/stores/001/218/857/products/54231-70be5ab884b3e0ce1516741546636224-1024-1024.png




/* Golosinas */
Bull dog: https://acdn.mitiendanube.com/stores/001/218/857/products/1220-pastillas-bulldog-sandia-x12-7ce801140f5a86657d16986891226934-1024-1024.jpg

Beldent: https://acdn.mitiendanube.com/stores/323/592/products/beldent-menta-3dceda23ad189c5d7d17056840414525-1024-1024.jpg

Rhodesia: https://www.distribuidorapop.com.ar/wp-content/uploads/2014/06/rhodesia-precio-mayorista-768x768.jpg.webp

Chupetines c/chicle: https://acdn.mitiendanube.com/stores/001/061/483/products/whatsapp-image-2024-04-13-at-10-17-52-1e5037f5abe7abfed417130143769747-640-0.jpeg

Pipas: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCgW-RquJBAG4PE1aKcuSqA4QSLDHWLgewg&s

Cubanitos: https://acdn.mitiendanube.com/stores/516/580/products/dulce-de-leche1-38429963999280148516195254579587-1024-1024.jpg

Hamlet: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb4lqDCVvBGkxHGiIsgIEV0bRY3aLuux3Ow&s

Sapito: https://acdn.mitiendanube.com/stores/516/580/products/whatsapp-image-2022-10-24-at-16-49-01-71-41b0e600648a7b898c16666410673971-1024-1024.jpeg

Palitos de la Selva: https://http2.mlstatic.com/D_NQ_NP_657750-MLU73787237206_012024-O.webp

Tic Tacs: https://acdn.mitiendanube.com/stores/001/185/658/products/786000271-37bdfde807a869bace16794021567358-1024-1024.jpg

Flow Cereal: https://http2.mlstatic.com/D_Q_NP_848801-MLU76991294375_062024-O.webp

Bubbaloo Tutti Frutti: https://ardiaprod.vtexassets.com/arquivos/ids/326378/Chicle-Bubbaloo-Tutti-Frutti-5-Gr-_1.jpg?v=638599594320730000

Mantecol 26g: https://ardiaprod.vtexassets.com/arquivos/ids/323018/Mantecol-bajo-en-Sodio-26-Gr-_1.jpg?v=638599550798330000



const products = [
  {
    /*ALFAJORES*/
    id: 1,
    name: 'Alfajor Oreo - 56g',
    price: '$1000',
    imageSrc: 'https://imgs.search.brave.com/PTbhs8X1DQ-ilbk9weaSuqzNys1A-lgS5GqiF3s4lrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGJl/cmRpc2EudnRleGlt/Zy5jb20uYnIvYXJx/dWl2b3MvaWRzLzE3/Mzk4Ni0yOTItMjky/L0FsZmFqb3ItVHJp/cGxlLU9yZW8tMXVu/LXgtNTVnci5wbmc_/dj02MzgxNDY1MzAx/NzY2NzAwMDA',
  },
]

Necesito que tomando de ejemplo el unico elemento de products, haga uno por cada producto mencionado arriba, que en name ponga los nombres de los productos y en imageSrc: ponga todos los links, y a TODOS los productos les ponga un precio de $1000