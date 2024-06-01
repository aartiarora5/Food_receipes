import React from 'react';
import './BlogPost.css';
import puddingImage from './image/Pudding.webp';

const BlogPost1 = () => {
  return (
    <div className="blog-post">
      <h2>Delicious Indian Rice Pudding Recipe (Kheer)</h2>
      <p className="meta">May 31, 2024 by Aarti Arora</p>
      <img src={puddingImage} alt="Indian Rice Pudding (Kheer)" />
      <p>
        Kheer, also known as Indian rice pudding, is a popular dessert in Indian cuisine. It's made with rice, milk, sugar, and flavored with cardamom, saffron, and nuts. Here's how to make this delicious dessert:
      </p>
      <h3>Ingredients:</h3>
      <ul>
        <li>1/2 cup basmati rice</li>
        <li>4 cups whole milk</li>
        <li>1/2 cup sugar</li>
        <li>1/4 teaspoon cardamom powder</li>
        <li>A pinch of saffron strands</li>
        <li>2 tablespoons chopped nuts (almonds, cashews, pistachios)</li>
        <li>1 tablespoon raisins</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>Wash the rice and soak it in water for 30 minutes. Drain and set aside.</li>
        <li>In a heavy-bottomed pan, bring the milk to a boil.</li>
        <li>Add the soaked rice to the boiling milk and simmer on low heat, stirring occasionally, until the rice is cooked and the mixture thickens (about 30-40 minutes).</li>
        <li>Add sugar, cardamom powder, saffron strands, chopped nuts, and raisins. Cook for another 5-10 minutes until the sugar is fully dissolved and the kheer thickens further.</li>
        <li>Remove from heat and let it cool slightly. Serve warm or chilled, garnished with additional nuts and saffron strands.</li>
      </ol>
      <hr />
    </div>
  );
};

export default BlogPost1;
