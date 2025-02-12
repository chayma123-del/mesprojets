import React, { useState } from "react";

const DishForm = ({ onAddDish }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null); // Pour stocker le fichier image
  const [imagePreview, setImagePreview] = useState(""); // Pour afficher l'aperçu de l'image

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Récupérer le fichier sélectionné
    if (file) {
      setImage(file); // Stocker le fichier dans l'état
      setImagePreview(URL.createObjectURL(file)); // Créer un aperçu de l'image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Créer un objet FormData pour envoyer le fichier
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image); // Ajouter le fichier image

    onAddDish(formData); // Appeler la fonction onAddDish avec FormData
    setName("");
    setDescription("");
    setPrice("");
    setImage(null); // Réinitialiser le fichier image
    setImagePreview(""); // Réinitialiser l'aperçu de l'image
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom du plat"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="text"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ flex: 1 }}
          required
        />
        
      </div>
      <input
        type="file"
        accept="image/*" // Accepter uniquement les fichiers image
        onChange={handleImageChange} // Gérer la sélection de l'image
        required
      />
      {imagePreview && (
        <div>
          <h4>Aperçu de l'image :</h4>
          <img
            src={imagePreview}
            alt="Aperçu de l'image"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
      )}
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default DishForm;