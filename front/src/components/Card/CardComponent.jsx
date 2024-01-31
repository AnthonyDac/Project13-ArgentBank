import React from 'react';
import './CardComponent.css'

function CardComponent({ picture, title, description }) {
  return (
    <>
      <div className="card">
        <img src={picture} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}


export default CardComponent;
