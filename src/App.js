import React from 'react';
import MyComponent from './Header';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <MyComponent index="1" title="Test" description="first react component" />
    </div>
  );
}
