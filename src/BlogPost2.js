import React from 'react';
import './BlogPost.css';
import SandwichImage from './image/Avocado.jpg';

const BlogPost2 = () => {
  return (
    <div className="blog-post">
      <h2>Avocado Sandwich Recipe</h2>
      <p className="meta">May 31, 2024 by Aarti Arora</p>
      <img src={SandwichImage} alt="Avocado Sandwich" />
      <p>
        Avocado sandwich is a simple and healthy meal option, perfect for a quick lunch or snack. Here's how to make it at home:
      </p>
      <h3>Ingredients:</h3>
      <ul>
        <li>2 slices of whole grain bread</li>
        <li>1 ripe avocado</li>
        <li>1 tablespoon lemon juice</li>
        <li>Salt and pepper to taste</li>
        <li>Optional toppings: sliced tomato, cucumber, lettuce</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>Toast the bread slices until golden brown.</li>
        <li>Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.</li>
        <li>Add lemon juice, salt, and pepper to the avocado and mash it with a fork until smooth.</li>
        <li>Spread the mashed avocado onto one slice of toasted bread.</li>
        <li>Layer the optional toppings (sliced tomato, cucumber, lettuce) on top of the avocado.</li>
        <li>Place the second slice of toasted bread on top to form a sandwich.</li>
        <li>Cut the sandwich in half and serve immediately.</li>
      </ol>
      <hr />
    </div>
  );
};

export default BlogPost2;
