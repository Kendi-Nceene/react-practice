import MyComponentB from "./MyComponentB.jsx";
import React,{useState} from 'react';

function MyComponentA() {
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <MyComponentB />
    </div>
  );
}

export default MyComponentA;
