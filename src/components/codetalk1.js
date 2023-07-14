import React from 'react';

function MyButton(props) {
  return (
    <button>
      {props.title}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="Add to cart" />
      <MyButton title="Find out more" />
    </div>
  );
}
