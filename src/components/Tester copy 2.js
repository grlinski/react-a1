


// MyComponent.js
import React from 'react';

const MyComponent = ({ fruits }) => {
  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {/* Using map() to iterate over the array of fruits passed as props */}
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;

