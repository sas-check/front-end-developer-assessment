import React from 'react';

function Name() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default Name;
