import React, { Component } from 'react';
import './App.css';

class Cat extends Component {
  handleLikeBtnClick() {
    console.log("Cat component like button just clicked!");
  }
  handleDislikeBtnClick() {
    console.log("Cat component dislike button just clicked!");
  }
  render() {
    return (
      <div style={inlineStyle}>
        <h3>Here is the cat</h3>
        <img style={{height: 400, width: 400}} src="https://www.chewy.com/petcentral/wp-content/uploads/2018/05/big-cat-breeds-main.jpg" alt="" />
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

export default Cat;
