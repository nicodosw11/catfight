import React, { Component } from 'react';

class Pet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={inlineStyle}>
        <h3>{this.props.petName}: Likes: {this.props.likesCount}</h3>
        <img style={{height: 400, width: 400}} src={this.props.petImageUrl} alt="" />
        <br />
        <button style={btnStyle} value={this.props.petName} onClick={this.props.onLikeBtnClick}>Like</button>
        <button style={btnStyle} value={this.props.petName} onClick={this.props.onDislikeBtnClick}>Dislike</button>
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
