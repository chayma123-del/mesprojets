import React, { useState, useEffect } from "react";
import axios from "axios";

function DishList() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Charger les plats
  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("http://localhost:8084/api/dishes");
      setDishes(response.data);
    } catch (err) {
      setError("Erreur lors de la récupération des plats.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      <h1>Liste des Plats</h1>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <img
              src={`http://localhost:8084/images/${dish.image}`}
              alt={dish.name}
              style={{ width: "100%", height: "auto" }}
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishList;












// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DishList() {
//   const [dishes, setDishes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Charger les plats
//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   const fetchDishes = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.get("http://localhost:8084/api/dishes");
//       setDishes(response.data);
//     } catch (err) {
//       setError("Erreur lors de la récupération des plats.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <div>
//       <h1>Liste des Plats</h1>
//       {loading && <p>Chargement...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {dishes.map((dish) => (
//           <div
//             key={dish.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               margin: "10px",
//               width: "200px",
//               textAlign: "center",
//             }}
//           >
//             <h3>{dish.name}</h3>
//             <p>{dish.description}</p>
//             <img
//               src={`http://localhost:8084/images/${dish.image}`}
//               alt={dish.name}
//               style={{ width: "100%", height: "auto" }}
//             />
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DishList;
