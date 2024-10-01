import React from 'react';
import './MainContent.css';

const products = [
  {
    id: 1,
    imageUrl: 'https://imgs.search.brave.com/hCbcrtdpsqCpHDgjZP5qd7Z1Ct6a0D--Ru9WxnE3uI8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWNzLmRpbm9vbmxp/bmUuY29tLmFyL2lt/YWdlbmVzL2Z1bGxf/NjAweDYwMF9tYS8y/MTgwNDU0X2YuanBn',
    description: 'Alfajor Oreo - 1000$ 50g',
  },
  {
    id: 2,
    imageUrl: 'https://imgs.search.brave.com/mMCGrGaLRPAqjG0pm8GS6J2NXqIntXeuB89VWhMoYpg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEydStGSVJkTkwu/anBn',
    description: 'Galletitas Don Satur - 800$ 100g',
  },
  {
    id: 3,
    imageUrl: 'https://imgs.search.brave.com/k3DFfaEqdz3LrcVm9iZyx3a_W19cNjXKRD1Q9b2Vkws/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NjExODE5L2VzL2Zv/dG8vY29jYS1jb2xh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1Dd1BGNWhLUzdZ/Uzk4TDVYODk1WHlB/aktqZVNBd1FkcDY1/VUpsMzFCcDQ4PQ',
    description: 'Gaseosa Coca Cola - 1000$ 500g',
  },
  {
    id: 4,
    imageUrl: 'https://imgs.search.brave.com/D6cIWyFbQqHNgxR8yPEmq6Rbo0XLzFYDoUJ97JlchKE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NjY5ODg3L3Bob3Rv/L3Nwcml0ZS0yLWxp/dGVyLWJvdHRsZS1v/bi1hbi1pc29sYXRl/ZC1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1SZFcyeDFVbTNN/ekNiN0ZMNDZVcGla/R1pyY1ZzS3B5QkJq/cUN1c2x3TVNRPQ',
    description: 'Gaseosa Sprite - 1000$ 500g',
  },
  {
    id: 5,
    imageUrl: 'https://imgs.search.brave.com/64NyKSHregvP74Uq-E8G_UggxpHGBA8AkMnhkaac-sY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcmRp/YXByb2QudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzMx/Njc1OS01MDAtYXV0/bz92PTYzODU5OTQ2/NDA0MzI3MDAwMCZ3/aWR0aD01MDAmaGVp/Z2h0PWF1dG8mYXNw/ZWN0PXRydWU.jpeg',
    description: 'Galletitas Pitusas - 800$ 200g',
  },
  {
    id: 6,
    imageUrl: 'https://imgs.search.brave.com/zfosHtLonDdHS-CDwGSsi1TTsmc2-lfeU-SkSRtHIzk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucmFwcGkuY29t/LmFyL3Byb2R1Y3Rz/LzIwMmVlNjczLWNj/ZTQtNDg0ZS1hMWEx/LTQ4NzQxYTk0ZjBm/My5wbmc_ZD0zMDB4/MzAwJmU9d2VicCZx/PTEw',
    description: 'Gaseosa Aquarius - 1000$ 500g',
  },
  {
    id: 7,
    imageUrl: 'https://imgs.search.brave.com/65A1cme06McM76DFWapvL17Wc98S0dg8fqQ15XZqzOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MTUxOTgtTUxBNDA5/NTYzMDM3NThfMDIy/MDIwLU8ud2VicA',
    description: 'Alfajor Guaymallen - 500$ 50g',
  },
  {
    id: 8,
    imageUrl: 'https://imgs.search.brave.com/VxfBWB8w2i-1Qu1wUIZmIcyUtgwQe4Vc4-uhfccimwM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2lvc2NvZWx0YW5v/LmNvbS5hci80My1O/aWFyYV9sYXJnZS9h/bGZham9yLWFndWls/YS1taW5pdG9ydGEt/Y29jby03MDUtZ3Iu/anBn',
    description: 'Alfajor Aguila - 1000$ 50g',
  },
  {
    id: 9,
    imageUrl: 'https://imgs.search.brave.com/Kb-GATqHUFkfGuJb5JLQa-Bol6IwB8kD3QcucPdFFDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDkvZ2FsbGV0aXRh/cy10cmlvLXBlcGFz/LW9mZXJ0YS5qcGc',
    description: 'Galletitas Pepas Trio -  700$ 200g',
  },
];

const MainContent = () => {
  return (
    <div className="main-content">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={`Producto ${product.id}`} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
