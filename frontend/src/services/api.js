import axios from 'axios';

// Configuration globale d'Axios
const api = axios.create({
  baseURL: 'http://localhost:8082/api', // Remplacez par l'URL de votre API Spring Boot
  headers: {
    'Content-Type': 'multipart/form-data', // Utiliser multipart/form-data pour les fichiers
  },
});

// Fonction pour récupérer tous les plats (GET)
export const fetchDishes = async () => {
  try {
    const response = await api.get('/dishes'); // Endpoint GET pour récupérer les plats
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des plats :', error);
    throw error;
  }
};

// Fonction pour ajouter un plat (POST)
export const addDish = async (formData) => {
  try {
    const response = await api.post('/dishes', formData); // Envoyer FormData
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du plat :', error);
    throw error;
  }
};

// Fonction pour supprimer un plat (DELETE)
export const deleteDish = async (id) => {
  try {
    const response = await api.delete(`/dishes/${id}`); // Endpoint DELETE
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du plat :', error);
    throw error;
  }
};

// Fonction pour récupérer tous les plats (GET)
export const getAllDishes = async () => {
  try {
    const response = await axios.get('/api/dishes'); // Appel GET pour récupérer tous les plats
    return response.data; // Retourne l'array contenant tous les plats
  } catch (error) {
    console.error('Erreur lors de la récupération des plats :', error);
    throw error; // Lancer l'erreur pour qu'elle puisse être gérée ailleurs
  }
};
