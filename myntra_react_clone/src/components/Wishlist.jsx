import React, { useState } from 'react';
import '../styles/wishlist.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      name: 'Nike Air Max',
      image: './images/1.jpg',
    },
    {
      name: 'Topper T-shirt',
      image: './images/2.jpg',
    },
    {
      name: 'Roadster Jacket',
      image: './images/3.jpg',
    },
    {
      name: 'Indian jarshi',
      image: './images/4.jpg',
    },
    {
      name: 'Puma T-shirt',
      image: './images/5.jpg',
    },
    {
      name: 'Adidas Sneakers',
      image: './images/6.jpg',
    }
  ]);

  const removeItem = (index) => {
    const updatedList = [...wishlist];
    updatedList.splice(index, 1);
    setWishlist(updatedList);
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
