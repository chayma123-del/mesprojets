import React, { useState, useEffect } from "react";
import DishCard from "./components/DishCard";
import Navbar from "./components/Navbar";

//import ImageGallery from "./components/ImageGallery";
import UploadImage from "./components/UploadImage";
import Pagination from "./components/Pagination";
import { fetchDishes,  deleteDish } from "./services/api"; // Importez les fonctions d'API
import "./App.css";

const App = () => {
  const [dishes, setDishes] = useState([]); // Pour stocker les plats récupérés
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(""); // Pour gérer les erreurs
  const dishesPerPage = 6;

  // Récupérer les plats au chargement du composant
  useEffect(() => {
    const getDishes = async () => {
      try {
        const data = await fetchDishes(); // Appel GET pour récupérer les plats
        setDishes(data);
      } catch (err) {
        setError("Erreur lors de la récupération des plats.");
        console.error(err);
      }
    };

    getDishes();
  }, []);

    

  // Supprimer un plat
  const handleDeleteDish = async (id) => {
    try {
      await deleteDish(id); // Appel DELETE pour supprimer un plat
      setDishes(dishes.filter((dish) => dish.id !== id)); // Mettre à jour la liste des plats
      setError("");
    } catch (err) {
      setError("Erreur lors de la suppression du plat.");
      console.error(err);
    }
  };

  // Calculer les plats à afficher sur la page actuelle
  const indexOfLastDish = currentPage * dishesPerPage;
  const indexOfFirstDish = indexOfLastDish - dishesPerPage;
  const currentDishes = dishes.slice(indexOfFirstDish, indexOfLastDish);

  // Gérer la page suivante
  const nextPage = () => {
    if (currentPage < Math.ceil(dishes.length / dishesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Gérer la page précédente
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <UploadImage />
   
      
      

      <div className="menu">
        {currentDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} onDelete={handleDeleteDish} /> 
        ))}
      </div>

      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={Math.ceil(dishes.length / dishesPerPage)}
      />

      {/* Affichage des erreurs */}
      {error && (
        <div style={{ color: "red", marginTop: "20px" }}>
          <strong>Erreur :</strong> {error}
        </div>
      )}
    </div>
  );
};

export default App; 



















// import React, { useState, useEffect } from "react";
// import DishCard from "./components/DishCard";
// import Navbar from "./components/Navbar";
// import DishForm from "./components/DishForm";
// import Pagination from "./components/Pagination";
// import { fetchDishes, addDish, deleteDish, getDishById } from "./services/api"; // Importer getDishById
// import "./App.css";

// const App = () => {
//   const [dishes, setDishes] = useState([]); // Pour stocker les plats récupérés
//   const [dishDetail, setDishDetail] = useState(null); // Pour stocker le plat récupéré par ID
//   const [currentPage, setCurrentPage] = useState(1);
//   const [error, setError] = useState(""); // Pour gérer les erreurs
//   const dishesPerPage = 10;

//   // Récupérer tous les plats au chargement du composant
//   useEffect(() => {
//     const getDishes = async () => {
//       try {
//         const data = await fetchDishes(); // Appel GET pour récupérer les plats
//         setDishes(data);
//       } catch (err) {
//         setError("Erreur lors de la récupération des plats.");
//         console.error(err);
//       }
//     };

//     getDishes();
//   }, []);

  

//   // Ajouter un nouveau plat
//   const handleAddDish = async (newDish) => {
//     try {
//       const addedDish = await addDish(newDish); // Appel POST pour ajouter un plat
//       setDishes([...dishes, addedDish]); // Mettre à jour la liste des plats
//       setError("");
//     } catch (err) {
//       setError("Erreur lors de l'ajout du plat.");
//       console.error(err);
//     }
//   };

//   // Supprimer un plat
//   const handleDeleteDish = async (id) => {
//     try {
//       await deleteDish(id); // Appel DELETE pour supprimer un plat
//       setDishes(dishes.filter((dish) => dish.id !== id)); // Mettre à jour la liste des plats
//       setError("");
//     } catch (err) {
//       setError("Erreur lors de la suppression du plat.");
//       console.error(err);
//     }
//   };

//   // Calculer les plats à afficher sur la page actuelle
//   const indexOfLastDish = currentPage * dishesPerPage;
//   const indexOfFirstDish = indexOfLastDish - dishesPerPage;
//   const currentDishes = dishes.slice(indexOfFirstDish, indexOfLastDish);

//   // Gérer la page suivante
//   const nextPage = () => {
//     if (currentPage < Math.ceil(dishes.length / dishesPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Gérer la page précédente
//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="app">
//       <Navbar />
//       <DishForm onAddDish={handleAddDish} /> {/* Passer la fonction handleAddDish */}

//       {/* Afficher les détails du plat récupéré par ID */}
//       {dishDetail && (
//         <div className="dish-detail">
//           <h2>{dishDetail.name}</h2>
//           <p>{dishDetail.description}</p>
//           <p>Prix : {dishDetail.price}€</p>
//           {dishDetail.image && <img src={dishDetail.image} alt={dishDetail.name} width="200" />}
//         </div>
//       )}

//       <div className="menu">
//         {currentDishes.map((dish) => (
//           <DishCard key={dish.id} dish={dish} onDelete={handleDeleteDish} />
//         ))}
//       </div>

//       <Pagination
//         prevPage={prevPage}
//         nextPage={nextPage}
//         currentPage={currentPage}
//         totalPages={Math.ceil(dishes.length / dishesPerPage)}
//       />

//       {/* Affichage des erreurs */}
//       {error && (
//         <div style={{ color: "red", marginTop: "20px" }}>
//           <strong>Erreur :</strong> {error}
//         </div>
//       )}
//     </div>
//   );
// };



//   const [imageData, setImageData] = useState([]);
//   const [base64Images, setBase64Images] = useState([]);
 
//   useEffect(() => {
//     fetch('http://localhost:8082/api/uploads/images')
//       .then((response) => response.json())
//       .then((data) => {
//         setImageData(data);
//         convertByteArraysToBase64(data);
//       })
//       .catch((error) => console.error('Error fetching the images:', error));
//   }, []);
 
//   const convertByteArraysToBase64 = (images) => {
//     const base64Array = images.map((image) => {
//       const binaryString = String.fromCharCode.apply(null, new Uint8Array(image.imageData));
//       return `data:image/jpeg;base64,${btoa(binaryString)}`;
//     });
//     setBase64Images(base64Array);
//   };
 
//   if (!imageData.length || !base64Images.length) {
//     return <div>Loading...</div>;
//   }
 
//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       {imageData.map((image, index) => (
//         <div key={index}>
//           <p><strong>Name:</strong> {image.name}</p>
//           <p><strong>Description:</strong> {image.description}</p>
//           {/* Use the corresponding base64 string for each image */}
//           {base64Images[index] ? (
//             <img src={base64Images[index]} alt={image.name} />
//           ) : (
//             <p>Image not available</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
 
// export default App;




// Récupérer les images au chargement du composant
//useEffect(() => {
  //fetch('http://localhost:8082/api/uploads/images')
   // .then((response) => response.json())
    //.then((data) => {
    //  setImageData(data);
    //  convertByteArraysToBase64(data);
    //})
    //.catch((error) => console.error('Error fetching the images:', error));
//}, []);

// Convertir les images de byte arrays en base64
//const convertByteArraysToBase64 = (images) => {
  //const base64Array = images.map((image) => {
    //const binaryString = String.fromCharCode.apply(null, new Uint8Array(image.imageData));
    //return `data:image/jpeg;base64,${btoa(binaryString)}`;
  //});
  //setBase64Images(base64Array);
//}
//if (!imageData.length || !base64Images.length) {
  //return <div>Loading...</div>;
//}






//{/* Afficher les images */}
//<h1>Image Gallery</h1>
//{imageData.map((image, index) => (
  //<div key={index}>
  //  <p><strong>Name:</strong> {image.name}</p>
  //  <p><strong>Description:</strong> {image.description}</p>
  //  {/* Utiliser l'image correspondante en base64 */}
  //  {base64Images[index] ? (
  //    <img src={base64Images[index]} alt={image.name} />
  //  ) : (
  //    <p>Image not available</p>
  //  )}
  //</div>
//))}
