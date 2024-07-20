

import React from 'react';

const products = [
  {
    id: 1,
    name: 'ARIA XD7 ATOMIC',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUusmMIKXUJemtKUreospeVfp7MjG9bmbjnA&s',
    description: 'Superlightweight Trending',
    price: '$68.80',
    colors: ['#4CAF50', '#9C27B0'],
  },
  {
    id: 2,
    name: 'DSLR ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuCP-l1xaEbMFjGjbIgQ6hk-pDYB90AKlLA&s',
    description: 'Super Trending',
    price: 'From $68.80',
    colors: ['#000000', '#FFFFFF'],
  },
  {
    id: 3,
    name: 'Jockey For Men',
    image: 'https://m.media-amazon.com/images/I/61ngazJnVkL._AC_SL1500_.jpg',
    description: 'Super Light ',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 4,
    name: 'Summer OutFits',
    image: 'https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/229563/french-girl-style-summer-229563-1690252517573-square-1200-80.jpg',
    description: 'Super Trending',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 5,
    name: 'ARORA HEADPHONE',
    image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072238.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
    description: 'Super Lightweight Gaming Mouse',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 6,
    name: 'White Sandals',
    image: 'https://static-01.daraz.com.np/p/d7a8c941442dbf46bf1c4ecdb698034a.jpg',
    description: 'Super Easy',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 7,
    name: 'Suits for Men',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SUWzAi5pWo_9rmG3oEEKR5YneqemMv5x2kUw6G_U3ZltijoZtZvRS6rUC8AmuX-U5xk&usqp=CAU',
    description: 'Super Lightweight Gaming Mouse',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 8,
    name: 'Belt',
    image: 'https://djd1xqjx2kdnv.cloudfront.net/photos/36/72/488708_11388_XL.jpg',
    description: 'Outfits',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  }

];

const ProductPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1200px', margin: 'auto', backgroundColor: '#121212', color: 'white' }}>
      <h1 style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>Products</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map(product => (
          <div key={product.id} style={{ flex: '1 0 30%', boxSizing: 'border-box', margin: '10px', textAlign: 'center', border: '1px solid #333', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', backgroundColor: '#1e1e1e' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h2 style={{ fontSize: '18px', color: 'white', margin: '10px 0' }}>{product.name}</h2>
            <p style={{ fontSize: '16px', color: '#aaa', margin: '5px 0' }}>{product.description}</p>
            <p style={{ fontSize: '16px', color: 'white', margin: '5px 0' }}>{product.price}</p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
              {product.colors.map((color, index) => (
                <span key={index} style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%', display: 'inline-block', margin: '0 5px' }}></span>
              ))}
            </div>
            {/* <button style={{ padding: '10px 20px', backgroundColor: '#0073e6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
              Buy Now
            </button> */}
          </div>
        ))}
      </div>      
    </div>
  );
};

export default ProductPage;

