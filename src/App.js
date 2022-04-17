import React from 'react';
import MyComponent from './Header.js';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <MyComponent
        index="1"
        title="Hello!"
        text="This is a React component test :)"
      />
    </div>
  );
}
