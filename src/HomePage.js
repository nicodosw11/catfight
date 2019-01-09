import React, { Component } from 'react';
import './App.css';

class HomePage extends Component {
  render() {
    const style = {
      textAlign: 'center',
      fontSize: '3em',
      color: 'teal'
    }
    return (
      <h1 style={style}>Cats vs Dogs: the fight!</h1>
    );
  }
}

export default HomePage;
