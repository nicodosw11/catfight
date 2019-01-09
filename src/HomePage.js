import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';
import './App.css';

class HomePage extends Component {
  render() {
    const style = {
      textAlign: 'center',
      fontSize: '3em',
      color: 'teal'
    }
    return (
      <div>
        <h1 style={style}>Cats vs Dogs: the fight!</h1>
        <div style={{textAlign: 'center', marginTop: 50}}>
          <Cat />
          <Dog />
        </div>
      </div>
    );
  }
}

export default HomePage;
