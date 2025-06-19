'use client'; // Important for using client-side features like useState if you add any

import React from 'react';
import './ProductGrid.css'; // This will be the CSS for your grid items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export default function ProductGrid({ products = [] }) {
  return (
    <section className="product-grid-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.title} className="product-image" />
            {/* You can add status badges if needed */}
          </div>
          <div className="product-details">
            <div className="product-name">{product.title}</div>
            <div className="product-pricing-info">
              ${product.price}
            </div>
            <FontAwesomeIcon icon={faHeartRegular} className="wishlist-icon" />
          </div>
        </div>
      ))}
    </section>
  );
}