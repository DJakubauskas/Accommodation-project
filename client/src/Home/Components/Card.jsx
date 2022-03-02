import React from 'react'
import './Card.css'

function Card({ src, title, description, price, perks }) {
    return (
      <div className="card">
        <img src={src} alt="" />
        <div className="card_info">
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
          <h5>{perks}</h5>
        </div>
      </div>
    );
  }
  
  export default Card;
