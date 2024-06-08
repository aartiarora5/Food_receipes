import React from 'react';

const FunctionalComponent = () => {
  const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={divStyle}>
      <h1>Welcome to Food Delight!</h1>
      <p>Explore delicious recipes.</p>
    </div>
  );
};

export default FunctionalComponent;
