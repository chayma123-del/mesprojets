import React from "react";

const DishCard = ({ dish, image, onDelete }) => {
  return (
    <div className="dish-card">
      {image && <img src={image} alt={dish.name} className="dish-image" />} {/* Afficher l'image si disponible */}
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <button onClick={() => onDelete(dish.id)}>Supprimer</button>
    </div>
  );
};

export default DishCard;



