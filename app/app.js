import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './touch/NewsList.js';
import './app.css';
/*
class HelloWorld extends React.Component{
  render(){
    return (
        <div>Hello World魂牵梦萦</div>
        );
  }
}

render(<HelloWorld />, $('#app')[0]);
*/
render(<NewsList />, $('#app')[0]);