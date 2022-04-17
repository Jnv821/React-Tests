import React from 'react';
import './style.css';

export default function MyComponent(props) {
  return (
    <div class="special">
      <h1>
        {props.index} - {props.title}
      </h1>
      <p>{props.text}</p>
    </div>
  );
}
