import React, { Component } from 'react';
import './App.css';

class Dog extends Component {
  render() {
    return (
      <div style={InlineStyle}>
        <h3>Here is the dog</h3>
        <img style={{height: 400, width: 400}} src="https://cdn7.littlethings.com/app/uploads/2017/05/big-dog-names-two-600x600.jpg" alt="" />
      </div>
    );
  }
}

const InlineStyle = {
  display: 'inline-block',
  margin: 'auto'
};

export default Dog;
