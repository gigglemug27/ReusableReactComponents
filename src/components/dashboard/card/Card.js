// Card.js
import React from 'react';
import './CardStyle.css';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="card">
      <img className="card-image" src={"https://images.unsplash.com/photo-1705789546054-fb2105887ab8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
