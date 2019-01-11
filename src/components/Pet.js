import React from 'react';

const Pet = props => {
  let result = null;
  let disabled = false;

  if (props.result !== '') {
    let resultStyle = null;
    if (props.result === 'Loser!') {
      resultStyle = { color: 'red'};
    } else {
      resultStyle = { color: 'green'};
    }
    result = <h2 style={resultStyle}>{props.result}</h2>
    disabled = true;
  }
  return (
    <div style={inlineStyle}>
      {result}
      <h3>{props.petName}: Likes: {props.likesCount}</h3>
      <img style={{height: 400, width: 400}} src={props.petImageUrl} alt="" />
      <br />
      <button style={btnStyle} value={props.petName} disabled={disabled} onClick={props.onLikeBtnClick}>Like</button>
      <button style={btnStyle} value={props.petName} disabled={disabled} onClick={props.onDislikeBtnClick}>Dislike</button>
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
