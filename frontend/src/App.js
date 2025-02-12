import React from "react";
import Navbar from "./components/Navbar";
import DishCard from "./components/DishCard";
import "./App.css";

const initialDishes = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Tomate, mozzarella, basilic",
    price: "15 TND",
    image: "Pizza Margherita.jpg",
  },
  {
    id: 2,
    name: "Couscous Royal",
    description: "Agneau, merguez, légumes",
    price: "20 TND",
    image: "Couscous Royal.jpg",
  },
  {
    id: 3,
    name: "Burger",
    description: "Viande, fromage, laitue",
    price: "12 TND",
    image: "Burger.jpg",
  },
];

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Bouton Ajouter qui ne fait rien */}
      <div className="add-container">
        <button className="add-btn">Ajouter un plat</button>
      </div>

      <div className="menu">
        {initialDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>

      <footer className="footer">
        <p>© 2025 Street 19</p>
      </footer>
    </div>
  );
}

export default App;
