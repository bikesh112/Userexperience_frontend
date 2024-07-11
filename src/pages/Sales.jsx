

import React from 'react';

const products = [
  {
    id: 1,
    name: 'ARIA XD7 ATOMIC',
    image: 'https://img.freepik.com/premium-photo/adjustable-computer-gaming-chair-with-footrest-isolated-white-background_1126594-2155.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
    description: 'Superlightweight Gaming Mouse',
    price: '$68.80',
    colors: ['#4CAF50', '#9C27B0'],
  },
  {
    id: 2,
    name: 'ARIA XD7 HUANO VERSION',
    image: 'https://img.freepik.com/premium-photo/gaming-chair-design-gaming-concept_948265-304375.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
    description: 'Super Lightweight Gaming Mouse',
    price: 'From $68.80',
    colors: ['#000000', '#FFFFFF'],
  },
  {
    id: 3,
    name: 'ARIA XD7 KAILH VERSION',
    image: 'https://img.freepik.com/premium-photo/gaming-chair-design-gaming-concept_948265-306088.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
    description: 'Super Lightweight Gaming Mouse',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 4,
    name: 'ARIA HEADPHONE',
    image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072204.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
    description: 'Super Lightweight Gaming Mouse',
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
    name: 'ACER NITRO',
    image: 'https://mudita.com.np/media/catalog/product/cache/278abbc8911ee5bd8d9d36ef904a805f/n/i/nitro_ryzen_7_5800h-1.jpg',
    description: 'Super Lightweight Gaming Mouse',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 7,
    name: 'ASUS TUF',
    image: 'https://dlcdnwebimgs.asus.com/gain/ed4c3cdc-29c4-4bdf-a42b-9f008244a173/w185/fwebp',
    description: 'Super Lightweight Gaming Mouse',
    price: 'From $68.80',
    colors: ['#E91E63', '#000000', '#FFFFFF'],
  },
  {
    id: 8,
    name: 'AIR FORCE',
    image: 'https://lds.com.np/wp-content/uploads/2021/09/Nitro-V-15-ANV15-51-59MT-1-300x300.jpg',
    description: 'Super Lightweight Gaming Mouse',
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

