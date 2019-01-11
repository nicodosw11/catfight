import React from 'react';

const Pet = props => {
  return (
    <div style={inlineStyle}>
      <h2>{props.result}</h2>
      <h3>{props.petName}: Likes: {props.likesCount}</h3>
      <img style={{height: 400, width: 400}} src={props.petImageUrl} alt="" />
      <br />
      <button style={btnStyle} value={props.petName} onClick={props.onLikeBtnClick}>Like</button>
      <button style={btnStyle} value={props.petName} onClick={props.onDislikeBtnClick}>Dislike</button>
    </div>
  )
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
