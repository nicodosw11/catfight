import React, { Component } from 'react';
import './App.css';

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCount: 0
    };
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
  }
  handleLikeBtnClick() {
    console.log(`${this.props.petName} component like button just clicked!`);
    this.setState(function(prevState) {
      return {
        likesCount: prevState.likesCount + 1
      };
    });
  }
  handleDislikeBtnClick() {
    console.log(`${this.props.petName} component dislike button just clicked!`);
    this.setState(function(prevState) {
      return {
        likesCount: prevState.likesCount - 1
      };
    });
  }
  render() {
    return (
      <div style={inlineStyle}>
        <h3>{this.props.petName}: Likes: {this.state.likesCount}</h3>
        <img style={{height: 400, width: 400}} src={this.props.petImageUrl} alt="" />
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

export default Pet;
