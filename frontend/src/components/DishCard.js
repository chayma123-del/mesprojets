import React from "react";
import "./DishCard.css";

const DishCard = ({ dish }) => {
  return (
    <div className="card">
      <img 
        src={`${process.env.PUBLIC_URL}/images/${dish.image}`} 
        alt={dish.name} 
        className="dish-image"
      />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <span>{dish.price} </span>
      <div className="card-buttons">
        {/* Boutons visibles mais sans action */}
        <button className="edit-btn">Modifier</button>
        <button className="delete-btn">Supprimer</button>
      </div>
    </div>
  );
};

export default DishCard;
