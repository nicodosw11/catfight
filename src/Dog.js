import React, { Component } from 'react';
import './App.css';

class Dog extends Component {
  handleLikeBtnClick() {
    console.log("Dog component like button just clicked!");
  }
  handleDislikeBtnClick() {
    console.log("Dog component dislike button just clicked!");
  }
  render() {
    return (
      <div style={inlineStyle}>
        <h3>Here is the dog</h3>
        <img style={{height: 400, width: 400}} src="https://cdn7.littlethings.com/app/uploads/2017/05/big-dog-names-two-600x600.jpg" alt="" />
        <br />
        <button style={btnStyle} onClick={this.handleLikeBtnClick}>Like</button>
        <button style={btnStyle} onClick={this.handleDislikeBtnClick}>Dislike</button>
      </div>
    );
  }
}

const inlineStyle = {
  display: 'inline-block',
  margin: 'auto'
};

const btnStyle = {
  height: '30px',
  width: '60px',
  margin: '10px 5px 0 5px'
};

export default Dog;
