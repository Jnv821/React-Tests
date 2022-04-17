import React from 'react';
import './style.css';

export default function MyComponent(index, title, text) {
  return (
    <div>
      <h1>
        {index} {title}
      </h1>
      <p>{text}</p>
    </div>
  );
}
