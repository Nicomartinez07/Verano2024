import React, { useState } from "react";
import "./MainContent.css";
import { LiaStarSolid } from "react-icons/lia";

const products = [
  {
    id: 1,
    name: "Pepas trio",
    href: "https://imgs.search.brave.com/Kb-GATqHUFkfGuJb5JLQa-Bol6IwB8kD3QcucPdFFDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDkvZ2FsbGV0aXRh/cy10cmlvLXBlcGFz/LW9mZXJ0YS5qcGc",
    price: "700",
    imageSrc:
      "https://imgs.search.brave.com/Kb-GATqHUFkfGuJb5JLQa-Bol6IwB8kD3QcucPdFFDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDkvZ2FsbGV0aXRh/cy10cmlvLXBlcGFz/LW9mZXJ0YS5qcGc",
    imageAlt: "a",
  },
  {
    id: 2,
    name: "Mini Toddy",
    href: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/9780/26694/mini-toddy-galletitas-50g__49003.1702500962.jpg?c=2",
    price: "600",
    imageSrc:
      "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/9780/26694/mini-toddy-galletitas-50g__49003.1702500962.jpg?c=2",
    imageAlt: "a",
  },
  {
    id: 4,
    name: "Don Satur Saladas",
    href: "https://m.media-amazon.com/images/I/51U0NgN1KbL.jpg",
    price: "800",
    imageSrc: "https://m.media-amazon.com/images/I/51U0NgN1KbL.jpg",
    imageAlt: "a",
  },
  {
    id: 5,
    name: "Don Satur Dulces",
    href: "https://f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/b/i/bizcochitosdulcesdegrasadonsatur.png",
    price: "800",
    imageSrc:
      "https://f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/b/i/bizcochitosdulcesdegrasadonsatur.png",
    imageAlt: "a",
  },
  {
    id: 3,
    name: "Pepitos",
    href: "https://imgs.search.brave.com/kIO_m4w9xaHTGnHD4NH06zBpIRutkIfBvBgKULcKw8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDcvZ2FsbGV0aXRh/cy1wZXBpdG9zLXBv/ci1tYXlvci5qcGc",
    price: "1200",
    imageSrc:
      "https://imgs.search.brave.com/kIO_m4w9xaHTGnHD4NH06zBpIRutkIfBvBgKULcKw8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDcvZ2FsbGV0aXRh/cy1wZXBpdG9zLXBv/ci1tYXlvci5qcGc",
    imageAlt: "a",
  },
  {
    id: 9,
    name: "Oreos",
    href: "https://imgs.search.brave.com/A9L_6WB3rtomWHLTGxySPPVCpsny03KU2jOWO9myRts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUvZ2FsbGV0aXRh/cy1vcmVvLXZlbnRh/LmpwZw",
    price: "1200",
    imageSrc:
      "https://imgs.search.brave.com/A9L_6WB3rtomWHLTGxySPPVCpsny03KU2jOWO9myRts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUvZ2FsbGV0aXRh/cy1vcmVvLXZlbnRh/LmpwZw",
    imageAlt: "a",
  },

  {
    id: 7,
    name: "Duquesa",
    href: "https://www.distribuidorapop.com.ar/wp-content/uploads/2023/10/GALLETITAS-TERRABUSI-DUQUESA-115GR-POP-ARGENTINA.jpg",
    price: "800",
    imageSrc:
      "https://www.distribuidorapop.com.ar/wp-content/uploads/2023/10/GALLETITAS-TERRABUSI-DUQUESA-115GR-POP-ARGENTINA.jpg",
    imageAlt: "a",
  },
  {
    id: 8,
    name: "Melba",
    href: "https://www.distribuidorapop.com.ar/wp-content/uploads/2016/08/galletitas-melba-por-mayor.jpg",
    price: "800",
    imageSrc:
      "https://www.distribuidorapop.com.ar/wp-content/uploads/2016/08/galletitas-melba-por-mayor.jpg",
    imageAlt: "a",
  },
  {
    id: 6,
    name: "Pitusas",
    href: "https://imgs.search.brave.com/PlURa1ePFg6cSiKuS7uBGSOxnO-uDHvniS3dNuVxjns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmRp/YXByb2QudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzMx/Njc1OS01MDAtYXV0/bz92PTYzODU5OTQ2/NDA0MzI3MDAwMCZ3/aWR0aD01MDAmaGVp/Z2h0PWF1dG8mYXNw/ZWN0PXRydWU",
    price: "800",
    imageSrc:
      "https://imgs.search.brave.com/PlURa1ePFg6cSiKuS7uBGSOxnO-uDHvniS3dNuVxjns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmRp/YXByb2QudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzMx/Njc1OS01MDAtYXV0/bz92PTYzODU5OTQ2/NDA0MzI3MDAwMCZ3/aWR0aD01MDAmaGVp/Z2h0PWF1dG8mYXNw/ZWN0PXRydWU",
    imageAlt: "a",
  },

  {
    id: 11,
    name: "Fanta",
    href: "https://ardiaprod.vtexassets.com/arquivos/ids/307616/Gaseosa-Fanta-Naranja-500-Ml-_1.jpg?v=638599332519170000",
    price: "1000",
    imageSrc:
      "https://ardiaprod.vtexassets.com/arquivos/ids/307616/Gaseosa-Fanta-Naranja-500-Ml-_1.jpg?v=638599332519170000",
    imageAlt: "a",
  },
  {
    id: 10,
    name: "Aquarius",
    href: "https://jumboargentina.vtexassets.com/arquivos/ids/783111/Agua-Saborizada-Aquarius-Manzana-500-Ml-1-469228.jpg?v=638206693783500000",
    price: "1000",
    imageSrc:
      "https://jumboargentina.vtexassets.com/arquivos/ids/783111/Agua-Saborizada-Aquarius-Manzana-500-Ml-1-469228.jpg?v=638206693783500000",
    imageAlt: "a",
  },
  {
    id: 14,
    name: "Coca Cola",
    href: "https://ardiaprod.vtexassets.com/arquivos/ids/307622/Gaseosa-CocaCola-Sabor-Original-500-Ml-_1.jpg?v=638599332594100000",

    price: "1000",
    imageSrc:
      "https://ardiaprod.vtexassets.com/arquivos/ids/307622/Gaseosa-CocaCola-Sabor-Original-500-Ml-_1.jpg?v=638599332594100000",
    imageAlt: "a",
  },
  {
    id: 12,
    name: "Sprite",
    href: "https://jumboargentina.vtexassets.com/arquivos/ids/791799/Gaseosa-Sprite-Lima-lim-n-500-Ml-1-10500.jpg?v=638291793659030000",

    price: "1000",
    imageSrc:
      "https://jumboargentina.vtexassets.com/arquivos/ids/791799/Gaseosa-Sprite-Lima-lim-n-500-Ml-1-10500.jpg?v=638291793659030000",
    imageAlt: "a",
  },
  {
    id: 13,
    name: "Seven Up",
    href: "https://acdn.mitiendanube.com/stores/323/592/products/a-vacia-copia1-d8743be8bf776e47a415946714214897-1024-10241-a33b25d8e10476c6c316414059802723-640-0.jpg",

    price: "1000",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/323/592/products/a-vacia-copia1-d8743be8bf776e47a415946714214897-1024-10241-a33b25d8e10476c6c316414059802723-640-0.jpg",
    imageAlt: "a",
  },

  {
    id: 15,
    name: "Bagio",
    href: "https://http2.mlstatic.com/D_883379-MLA50260602960_062022-C.jpg",
    price: "500",
    imageSrc: "https://http2.mlstatic.com/D_883379-MLA50260602960_062022-C.jpg",
    imageAlt: "a",
  },
  {
    id: 16,
    name: "Guaymallen Triple",
    href: "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/guaymallen-triple-x-3-614e08a31ad45.png",

    price: "500",
    imageSrc:
      "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/guaymallen-triple-x-3-614e08a31ad45.png",
    imageAlt: "a",
  },
  {
    id: 17,
    name: "Tita",
    href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD-8xvcik4wtF0ok1oKm5V-f5yD8l7pQfZg&s",

    price: "500",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD-8xvcik4wtF0ok1oKm5V-f5yD8l7pQfZg&s",
    imageAlt: "a",
  },
  {
    id: 18,
    name: "Milka",
    href: "https://www.farmaciassanchezantoniolli.com.ar/13164-large_default/milka-mousse-alfajor-triple-x-55g-.jpg",

    price: "1000",
    imageSrc:
      "https://www.farmaciassanchezantoniolli.com.ar/13164-large_default/milka-mousse-alfajor-triple-x-55g-.jpg",
    imageAlt: "a",
  },
  {
    id: 19,
    name: "Shot",
    href: "https://http2.mlstatic.com/D_NQ_NP_811767-MLA53825682135_022023-O.webp",

    price: "1000",
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_811767-MLA53825682135_022023-O.webp",
    imageAlt: "a",
  },
  {
    id: 20,
    name: "Oreo",
    href: "https://acdn.mitiendanube.com/stores/001/185/658/products/oreotriple-43d148d1c1f4457f7417152891747509-1024-1024.jpg",

    price: "1000",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/001/185/658/products/oreotriple-43d148d1c1f4457f7417152891747509-1024-1024.jpg",
    imageAlt: "a",
  },
  {
    id: 21,
    name: "Rasta Blanco",
    href: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/11987/30784/rasta-alfajor-blanco-70g__50837.1724442132.jpg?c=2",

    price: "1200",
    imageSrc:
      "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/11987/30784/rasta-alfajor-blanco-70g__50837.1724442132.jpg?c=2",
    imageAlt: "a",
  },
  {
    id: 22,
    name: "Rasta Negro",
    href: "https://acdn.mitiendanube.com/stores/004/231/250/products/whatsapp-image-2024-05-09-at-10-10-51-6d012a87858c5e66fe17152606073345-640-0.jpeg",

    price: "1200",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/004/231/250/products/whatsapp-image-2024-05-09-at-10-10-51-6d012a87858c5e66fe17152606073345-640-0.jpeg",
    imageAlt: "a",
  },

  {
    id: 24,
    name: "Saladix",
    href: "https://www.distribuidorapop.com.ar/wp-content/uploads/2019/06/saladix-jamon-30gr-distirbuidora-pop.jpg",

    price: "600",
    imageSrc:
      "https://www.distribuidorapop.com.ar/wp-content/uploads/2019/06/saladix-jamon-30gr-distirbuidora-pop.jpg",
    imageAlt: "a",
  },
  {
    id: 25,
    name: "Club Social",
    href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN13Cks5JDHmoyK-ewTbwp9isSMPPD5cMx1w&s",

    price: "400",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN13Cks5JDHmoyK-ewTbwp9isSMPPD5cMx1w&s",
    imageAlt: "a",
  },
  {
    id: 23,
    name: "Nikitos",
    href: "https://acdn.mitiendanube.com/stores/323/592/products/nikitos-papas1-dd249f87ca157dd3ea16678429238504-640-0.jpg",

    price: "1000",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/323/592/products/nikitos-papas1-dd249f87ca157dd3ea16678429238504-640-0.jpg",
    imageAlt: "a",
  },

  {
    id: 27,
    name: "Papas Quento Asado Criollo",
    href: "https://http2.mlstatic.com/D_NQ_NP_800663-MLA73736455776_012024-O.webp",

    price: "1600",
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_800663-MLA73736455776_012024-O.webp",
    imageAlt: "a",
  },
  {
    id: 28,
    name: "Papas Quento BBQ",
    href: "https://acdn.mitiendanube.com/stores/001/218/857/products/54231-70be5ab884b3e0ce1516741546636224-1024-1024.png",

    price: "1600",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/001/218/857/products/54231-70be5ab884b3e0ce1516741546636224-1024-1024.png",
    imageAlt: "a",
  },
  {
    id: 26,
    name: "Papas Quento Jamon",
    href: "https://modomarketar.vteximg.com.br/arquivos/ids/164210/Papas-Fritas-Quento-Jamon-Serrano-X-90-Grs-1-2909.jpg?v=637941117695670000",

    price: "1600",
    imageSrc:
      "https://modomarketar.vteximg.com.br/arquivos/ids/164210/Papas-Fritas-Quento-Jamon-Serrano-X-90-Grs-1-2909.jpg?v=637941117695670000",
    imageAlt: "a",
  },
  {
    id: 29,
    name: "Bull Dog",
    href: "https://acdn.mitiendanube.com/stores/001/218/857/products/1220-pastillas-bulldog-sandia-x12-7ce801140f5a86657d16986891226934-1024-1024.jpg",

    price: "600",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/001/218/857/products/1220-pastillas-bulldog-sandia-x12-7ce801140f5a86657d16986891226934-1024-1024.jpg",
    imageAlt: "a",
  },
  {
    id: 37,
    name: "Palitos de la Selva (5)",
    href: "https://http2.mlstatic.com/D_NQ_NP_657750-MLU73787237206_012024-O.webp",

    price: "200",
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_657750-MLU73787237206_012024-O.webp",
    imageAlt: "a",
  },
  {
    id: 40,
    name: "Bubbaloo Tutti Frutti",
    href: "https://ardiaprod.vtexassets.com/arquivos/ids/326378/Chicle-Bubbaloo-Tutti-Frutti-5-Gr-_1.jpg?v=638599594320730000",

    price: "200",
    imageSrc:
      "https://ardiaprod.vtexassets.com/arquivos/ids/326378/Chicle-Bubbaloo-Tutti-Frutti-5-Gr-_1.jpg?v=638599594320730000",
    imageAlt: "a",
  },
  {
    id: 32,
    name: "Chupetines con Chicle",
    href: "https://acdn.mitiendanube.com/stores/001/061/483/products/whatsapp-image-2024-04-13-at-10-17-52-1e5037f5abe7abfed417130143769747-640-0.jpeg",

    price: "200",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/001/061/483/products/whatsapp-image-2024-04-13-at-10-17-52-1e5037f5abe7abfed417130143769747-640-0.jpeg",
    imageAlt: "a",
  },

  {
    id: 36,
    name: "Sapito",
    href: "https://acdn.mitiendanube.com/stores/516/580/products/whatsapp-image-2022-10-24-at-16-49-01-71-41b0e600648a7b898c16666410673971-1024-1024.jpeg",

    price: "200",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/516/580/products/whatsapp-image-2022-10-24-at-16-49-01-71-41b0e600648a7b898c16666410673971-1024-1024.jpeg",
    imageAlt: "a",
  },
  {
    id: 31,
    name: "Rhodesia",
    href: "https://www.distribuidorapop.com.ar/wp-content/uploads/2014/06/rhodesia-precio-mayorista-768x768.jpg.webp",

    price: "500",
    imageSrc:
      "https://www.distribuidorapop.com.ar/wp-content/uploads/2014/06/rhodesia-precio-mayorista-768x768.jpg.webp",
    imageAlt: "a",
  },

  {
    id: 33,
    name: "Pipas",
    href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCgW-RquJBAG4PE1aKcuSqA4QSLDHWLgewg&s",

    price: "300",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCgW-RquJBAG4PE1aKcuSqA4QSLDHWLgewg&s",
    imageAlt: "a",
  },
  {
    id: 38,
    name: "Tic Tacs",
    href: "https://acdn.mitiendanube.com/stores/001/185/658/products/786000271-37bdfde807a869bace16794021567358-1024-1024.jpg",

    price: "600",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/001/185/658/products/786000271-37bdfde807a869bace16794021567358-1024-1024.jpg",
    imageAlt: "a",
  },
  {
    id: 41,
    name: "Mantecol 26g",
    href: "https://ardiaprod.vtexassets.com/arquivos/ids/323018/Mantecol-bajo-en-Sodio-26-Gr-_1.jpg?v=638599550798330000",

    price: "600",
    imageSrc:
      "https://ardiaprod.vtexassets.com/arquivos/ids/323018/Mantecol-bajo-en-Sodio-26-Gr-_1.jpg?v=638599550798330000",
    imageAlt: "a",
  },
  {
    id: 34,
    name: "Cubanitos",
    href: "https://acdn.mitiendanube.com/stores/516/580/products/dulce-de-leche1-38429963999280148516195254579587-1024-1024.jpg",

    price: "100",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/516/580/products/dulce-de-leche1-38429963999280148516195254579587-1024-1024.jpg",
    imageAlt: "a",
  },
  {
    id: 35,
    name: "Hamlet",
    href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb4lqDCVvBGkxHGiIsgIEV0bRY3aLuux3Ow&s",

    price: "500",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgb4lqDCVvBGkxHGiIsgIEV0bRY3aLuux3Ow&s",
    imageAlt: "a",
  },
  {
    id: 30,
    name: "Beldent",
    href: "https://acdn.mitiendanube.com/stores/323/592/products/beldent-menta-3dceda23ad189c5d7d17056840414525-1024-1024.jpg",

    price: "500",
    imageSrc:
      "https://acdn.mitiendanube.com/stores/323/592/products/beldent-menta-3dceda23ad189c5d7d17056840414525-1024-1024.jpg",
    imageAlt: "a",
  },

  {
    id: 39,
    name: "Flow Cereal",
    href: "https://http2.mlstatic.com/D_Q_NP_848801-MLU76991294375_062024-O.webp",

    price: "500",
    imageSrc:
      "https://http2.mlstatic.com/D_Q_NP_848801-MLU76991294375_062024-O.webp",
    imageAlt: "a",
  },
];
export default function MainContent({ searchTerm = "", onAddProduct }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Filtramos los productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (product) => {
    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevProducts, { ...product, quantity: 1 }];
    });
    onAddProduct(product); // Llamar al prop para actualizar los productos en el Header
  };

  return (
    <div className="bg-[#be5600]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="block">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => handleAddProduct(product)}
                    className="ml-2 text-sm rounded-md bg-blue-500 text-white py-1 px-2 hover:bg-blue-600"
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
