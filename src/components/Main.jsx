import React from 'react';
import Nav from 'Nav';

export default function Main(props){
  return (
    <div>
      <Nav />
      <h2>main component</h2>
      {props.children}
    </div>
  );
};
