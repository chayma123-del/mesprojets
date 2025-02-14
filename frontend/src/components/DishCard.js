import React from "react";


const DishCard = ({ dish, onDelete }) => {
  return (
    <div className="dish-card">
      {/* Affichage de l'image en Base64 si disponible */}
      {dish.imagePath ? (
        <img src={`data:image/jpeg;base64,${dish.imagePath}`} alt={dish.name} className="dish-image" />
      ) : (
        <p className="no-image">Image non disponible</p>
      )}

      <h3 className="dish-name">{dish.name}</h3>
      <p className="dish-description">{dish.description}</p>
      <p className="dish-price"><strong>{dish.price} TND</strong></p>

      <button className="delete-button" onClick={() => onDelete(dish.id)}>
        Supprimer
      </button>
    </div>
  );
};

export default DishCard;










// import React from "react";
// import axios from "axios";

// const DishCard = ({ dish, onDelete }) => {
//   const handleDelete = async () => {
//     if (window.confirm(`Voulez-vous supprimer le plat "${dish.name}" ?`)) {
//       try {
//         await axios.delete(`http://localhost:8084/api/dishes/${dish.id}`);
//         onDelete(dish.id); // Supprimer l'élément de l'interface après la suppression
//       } catch (err) {
//         console.error("Erreur lors de la suppression :", err);
//         alert("Erreur lors de la suppression du plat.");
//       }
//     }
//   };

//   return (
//     <div className="dish-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "center" }}>
//       <img src={`http://localhost:8084/images/${dish.image}`} alt={dish.name} style={{ width: "100%", height: "auto" }} />
//       <h3>{dish.name}</h3>
//       <p>{dish.description}</p>
//       <p>{dish.price} €</p>
//       <button onClick={handleDelete} style={{ background: "red", color: "white", border: "none", padding: "5px", cursor: "pointer" }}>
//      Supprimer
//       </button>
//     </div>
//   );
// };

// export default DishCard;











// // import React from "react";

// // const DishCard = ({ dish, onDelete }) => {
// //   return (
// //     <div className="dish-card">
// //       <img src={dish.image} alt={dish.name} />
// //       <h3>{dish.name}</h3>
// //       <p>{dish.description}</p>
// //       <p>{dish.price}</p>
      
// //       <button onClick={() => onDelete(dish.id)}>Supprimer</button> {/* Appeler la fonction onDelete */}
// //     </div>
// //   );
// // };

// // export default DishCard; 

// //return (
//   //<div className="dish-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "center" }}>
//     //<img src={`http://localhost:8084/images/${dish.image}`} alt={dish.name} style={{ width: "100%", height: "auto" }} />
//     //<h3>{dish.name}</h3>
//     //<p>{dish.description}</p>
//    // <p>{dish.price} €</p>
//    // <button onClick={handleDelete} style={{ background: "red", color: "white", border: "none", padding: "5px", cursor: "pointer" }}>
//   // Supprimer
//   //  </button>
//  // </div>
// //);
// //};