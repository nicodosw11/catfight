import React, { Component } from 'react';
import './App.css';

class Cat extends Component {
  render() {
    return (
      <div style={InlineStyle}>
        <h3>Here is the cat</h3>
        <img style={{height: 400, width: 400}} src="https://www.chewy.com/petcentral/wp-content/uploads/2018/05/big-cat-breeds-main.jpg" alt="" />
      </div>
    );
  }
}

const InlineStyle = {
  display: 'inline-block',
  margin: 'auto'
};

export default Cat;
