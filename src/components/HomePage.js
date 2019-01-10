import React, { Component } from 'react';
import Pet from './Pet';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catLikesCount: 0,
      dogLikesCount: 0
    };
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
  }
  handleLikeBtnClick(event) {
    let petName = event.target.value;
    console.log(`${petName} component like button just clicked!`);
    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount + 1,
          dogLikesCount: prevState.dogLikesCount
        };
      });
    } else if (petName === 'Dog') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount,
          dogLikesCount: prevState.dogLikesCount + 1
        };
      });
    }
  }
  handleDislikeBtnClick(event) {
    let petName = event.target.value;
    console.log(`${petName} component dislike button just clicked!`);
    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount - 1,
          dogLikesCount: prevState.dogLikesCount
        };
      });
    } else if (petName === 'Dog') {
      this.setState(function(prevState) {
        return {
          catLikesCount: prevState.catLikesCount,
          dogLikesCount: prevState.dogLikesCount - 1
        };
      });
    }
  }
  handleShowWinnerBtnClick() {
    var catLikesCount = this.state.catLikesCount;
    var dogLikesCount = this.state.dogLikesCount;
    if (catLikesCount > dogLikesCount) {
      console.log('Cat is the winner')
    } else if (catLikesCount < dogLikesCount) {
      console.log('Dog is the winner')
    } else {
      console.log ('Same number of likes!')
    }
  }
  render() {
    return (
      <div>
        <h1 style={style}>Cats vs Dogs: the fight!</h1>
        <div style={{textAlign: 'center', marginTop: 50}}>
          <Pet
            petName="Cat"
            petImageUrl="https://www.chewy.com/petcentral/wp-content/uploads/2018/05/big-cat-breeds-main.jpg"
            likesCount={this.state.catLikesCount}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
          <Pet
            petName="Dog"
            petImageUrl="https://cdn7.littlethings.com/app/uploads/2017/05/big-dog-names-two-600x600.jpg"
            likesCount={this.state.dogLikesCount}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
          />
          <div style={{textAlign: 'center'}}>
            <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show winner</button>
            <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start over</button>
          </div>
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

const btnStyle = {
  marginTop: '30px',
  marginRight: '5px',
  height: '25px'
}

export default HomePage;
