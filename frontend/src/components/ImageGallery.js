import React, { useState, useEffect } from 'react';

function ImageGallery() {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState('');

  // Récupération des images au chargement
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:8084/api/dishes'); // Vérifie l'URL de l'API
        const data = await response.json();

        console.log("Données reçues de l'API :", data); // Debug

        if (!Array.isArray(data)) {
          throw new Error("Format de données invalide");
        }

        setImageData(data);
      } catch (err) {
        setError('Erreur lors de la récupération des images.');
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  if (!imageData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Image Gallery</h1>

      {/* Affichage des erreurs */}
      {error && <div style={{ color: 'red', marginTop: '20px' }}><strong>Erreur :</strong> {error}</div>}

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageData.map((image, index) => (
          <div key={index} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            margin: '10px', 
            textAlign: 'center', 
            width: '250px' 
          }}>
            <p><strong>Name:</strong> {image.name}</p>
            <p><strong>Description:</strong> {image.description}</p>

            {/* Vérifie que image.imagePath contient bien une chaîne Base64 */}
            {image.imagePath ? (
              <img 
                src={`data:image/jpeg;base64,${image.imagePath}`} 
                alt={image.name} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
              />
            ) : (
              <p>Image not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
