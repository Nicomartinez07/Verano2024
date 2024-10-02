import React from 'react';
import './MainContent.css';

const products = [
  {
    /*ALFAJORES*/
    id: 1,
    name: 'Alfajor Oreo - 56g',
    href: '#',
    price: '$1000',
    imageSrc: 'https://imgs.search.brave.com/PTbhs8X1DQ-ilbk9weaSuqzNys1A-lgS5GqiF3s4lrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGJl/cmRpc2EudnRleGlt/Zy5jb20uYnIvYXJx/dWl2b3MvaWRzLzE3/Mzk4Ni0yOTItMjky/L0FsZmFqb3ItVHJp/cGxlLU9yZW8tMXVu/LXgtNTVnci5wbmc_/dj02MzgxNDY1MzAx/NzY2NzAwMDA',
    imageAlt: 'Alfajor Oreo.',
  },
  {
    id: 2,
    name: 'Alfajor Guaymallen - 70g',
    href: '#',
    price: '$500',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtwZPMi13e-ozZ-QZyvZCh6719nbrQHEVlA&s',
    imageAlt: 'Alfajor Guaymallen.',
  },
  {
    id: 3,
    name: 'Alfajor Aguila - 50g',
    href: '#',
    price: '$1000',
    imageSrc: 'https://imgs.search.brave.com/VxfBWB8w2i-1Qu1wUIZmIcyUtgwQe4Vc4-uhfccimwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2lvc2NvZWx0YW5v/LmNvbS5hci80My1O/aWFyYV9sYXJnZS9h/bGZham9yLWFndWls/YS1taW5pdG9ydGEt/Y29jby03MDUtZ3Iu/anBn',
    imageAlt: 'Alfajor Aguila.',
  },
  {
    id: 4,
    name: 'Alfajor Rasta - 70g',
    href: '#',
    price: '$1400',
    imageSrc: 'https://imgs.search.brave.com/pF9FZ08lWgHDHUx_ykgFaSCUIDIp9dRrBRGfcMc1uy4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/Lm1pdGllbmRhbnVi/ZS5jb20vc3RvcmVz/LzMxMy81MDcvcHJv/ZHVjdHMvbmVncm8x/LTk0NzQzOTUyZTE1/YjE1MGUyODE2ODc1/NTAwMTU0MzcyLTEw/MjQtMTAyNC0wYzUz/MjZmZDA2NWZiMTJj/NTIxNzE0ODM2NDky/NzU2MC0yNDAtMC5q/cGc',
    imageAlt: 'Alfajor Rasta.',
  },

  /*GASEOSAS*/
  {
    id: 5,
    name: 'Gaseosa Fanta - 500ml',
    href: '#',
    price: '$1000',
    imageSrc: 'https://imgs.search.brave.com/8E2p4AOVQ1maVAXVxz5S6sE87ngsOdFAz5gzdEvcuDE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/MjU3MjEtTUxBNDcy/MTY4NjMwMjhfMDgy/MDIxLVYud2VicA',
    imageAlt: 'Gaseosa Fanta.',
  },
  {
    id: 6,
    name: 'Gaseosa Coca Cola - 500ml',
    href: '#',
    price: '$1000',
    imageSrc: 'https://imgs.search.brave.com/4Sf1QIklrhcHZ_ehuKTtuRpFVioSb0UJqY7XyC85WMk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/NzE1OTYtTUxBNDQy/NTgxNjMzNjFfMTIy/MDIwLU8ud2VicA',
    imageAlt: 'Gaseosa Coca Cola.',
  },
  {
    id: 7,
    name: 'Gaseosa Sprite - 500ml',
    href: '#',
    price: '$1000',
    imageSrc: 'https://jumboargentina.vtexassets.com/arquivos/ids/791799/Gaseosa-Sprite-Lima-lim-n-500-Ml-1-10500.jpg?v=638291793659030000',
    imageAlt: 'Gaseosa Sprite.',
  },
  {
    id: 8,
    name: 'Gaseosa Aquarius - 500ml',
    href: '#',
    price: '$1000',
    imageSrc: 'https://imgs.search.brave.com/zfosHtLonDdHS-CDwGSsi1TTsmc2-lfeU-SkSRtHIzk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucmFwcGkuY29t/LmFyL3Byb2R1Y3Rz/LzIwMmVlNjczLWNj/ZTQtNDg0ZS1hMWEx/LTQ4NzQxYTk0ZjBm/My5wbmc_ZD0zMDB4/MzAwJmU9d2VicCZx/PTEw',
    imageAlt: 'Gaseosa Aquarius.',
  },
  
  /*GALLETITAS*/
  {
    id: 9,
    name: 'Galletitas Pepas Trio - 200g',
    href: '#',
    price: '$700',
    imageSrc: 'https://imgs.search.brave.com/Kb-GATqHUFkfGuJb5JLQa-Bol6IwB8kD3QcucPdFFDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDkvZ2FsbGV0aXRh/cy10cmlvLXBlcGFz/LW9mZXJ0YS5qcGc',
    imageAlt: 'Galletitas Pepas Trio.',
  },
  {
      id: 10,
      name: 'Galletitas Pitusas - 200g',
      href: '#',
      price: '$800',
      imageSrc: 'https://imgs.search.brave.com/64NyKSHregvP74Uq-E8G_UggxpHGBA8AkMnhkaac-sY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcmRp/YXByb2QudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzMx/Njc1OS01MDAtYXV0/bz92PTYzODU5OTQ2/NDA0MzI3MDAwMCZ3/aWR0aD01MDAmaGVp/Z2h0PWF1dG8mYXNw/ZWN0PXRydWU.jpeg',
      imageAlt: 'Galletitas Pitusas.',
  },
  {
    id: 11,
    name: 'Galletitas Don Satur - 200g',
    href: '#',
    price: '$800',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQsU5wrRlKywMWckGWTAA4_3FlXfxgIAxXA&s',
    imageAlt: 'Galletitas Don Satur.',
  },
  {
    id: 12,
    name: 'Galletitas Pepitos - 118g',
    href: '#',
    price: '$1200',
    imageSrc: 'https://imgs.search.brave.com/kIO_m4w9xaHTGnHD4NH06zBpIRutkIfBvBgKULcKw8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDcvZ2FsbGV0aXRh/cy1wZXBpdG9zLXBv/ci1tYXlvci5qcGc',
    imageAlt: 'Galletitas Pepitos.',
  },
  
]
export default function Example() {

  return (
    <div className="bg-#be5600">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <a href={product.href} className="block">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-900">{product.name}</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-lg font-medium text-gray-900">{product.price}</p>
                  <button className="ml-2 text-sm rounded-md bg-blue-500 text-white py-1 px-2 hover:bg-blue-600">
                    + Añadir
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}






