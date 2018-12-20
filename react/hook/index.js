import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { useState,useEffect } from 'react';

// 表单组件，有name, phone两个输入框。
const App  = () => {
  const name = useSetValue('hello');
  const phone = useSetValue('120');
  useEffect(
    () => {
      
      console.log('useEffect')
      return () => {
        
      };
    },
    [a],
  );
  return (
    <React.Fragment>
      <Item {...name} />
      <br />
      <Item {...phone} />
    </React.Fragment>
  );
}

const a={}


  

// controlled input component
const Item = ({ value, setValue }) => (
  <React.Fragment>
    <label>{value}</label>
    <br />
    <input value={value} onChange={setValue} />
  </React.Fragment>
);

// 可以将state连同handler function一起挪到组件外面。
// 甚至可以export出去，让其他组件也能使用这个state逻辑
const useSetValue = (initvalue) => {
    console.log(initvalue)
    console.log(useState(initvalue))
  const [value, setValue] = useState(initvalue);
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return {
    value,
    setValue: handleChange,
  };
}




const root = document.getElementById('root')

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)
