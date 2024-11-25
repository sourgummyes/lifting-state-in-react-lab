import { availableIngredients } from "../App";

// src/components/IngredientList.jsx
const IngredientList = ({ addToBurger }) => {
    return <ul>
        {availableIngredients.map((ingredient, index) => (
        <li key={index}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}</ul>;
  };
  
  export default IngredientList;
