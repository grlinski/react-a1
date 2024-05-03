



function MyComponent(props) {
  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {/* Using map() to iterate over the array of fruits passed as props */}
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;

