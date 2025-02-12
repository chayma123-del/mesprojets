import React, { useState } from "react";
import "./DishForm.css";

const DishForm = ({ onAddDish }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newDish, setNewDish] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewDish({ ...newDish, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newDish.name || !newDish.description || !newDish.price || !newDish.image) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
    onAddDish({ ...newDish, id: Date.now() });
    setNewDish({ name: "", description: "", price: "", image: "" });
    setIsAdding(false);
  };

  return (
    <div className="dish-form">
      {isAdding ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom du plat" value={newDish.name} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={newDish.description} onChange={handleChange} required />
          <input type="text" name="price" placeholder="Prix" value={newDish.price} onChange={handleChange} required />
          <input type="text" name="image" placeholder="URL de l'image" value={newDish.image} onChange={handleChange} required />
          <button type="submit">Ajouter</button>
          <button type="button" onClick={() => setIsAdding(false)}>Annuler</button>
        </form>
      ) : (
        <button onClick={() => setIsAdding(true)}>Ajouter un plat</button>
      )}
    </div>
  );
};

export default DishForm;
