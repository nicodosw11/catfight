import React, { Component } from 'react';
import Pet from './Pet';
import './App.css';


class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 style={style}>Cats vs Dogs: the fight!</h1>
        <div style={{textAlign: 'center', marginTop: 50}}>
          <Pet petName="Cat" petImageUrl="https://www.chewy.com/petcentral/wp-content/uploads/2018/05/big-cat-breeds-main.jpg"/>
          <Pet petName="Dog" petImageUrl="https://cdn7.littlethings.com/app/uploads/2017/05/big-dog-names-two-600x600.jpg"/>
        </div>
      </div>
    );
  }
}

const style = {
  textAlign: 'center',
  fontSize: '3em',
  color: 'teal'
}

export default HomePage;
