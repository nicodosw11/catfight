import React, { Component } from 'react';
import Pet from './Pet';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catLikesCount: 0,
      dogLikesCount: 0,
      catLikesResult: '',
      dogLikesResult: ''
    };
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
  }
  handleLikeBtnClick(event) {
    let petName = event.target.value;
    console.log(`${petName} component like button just clicked!`);
    if (petName === 'Cat') {
      this.setState( prevState => {
        return {
          catLikesCount: prevState.catLikesCount + 1,
        };
      });
    } else if (petName === 'Dog') {
      this.setState( prevState => {
        return {
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
        };
      });
    } else if (petName === 'Dog') {
      this.setState(function(prevState) {
        return {
          dogLikesCount: prevState.dogLikesCount - 1
        };
      });
    }
  }
  handleShowWinnerBtnClick() {
    let catLikesCount = this.state.catLikesCount;
    let dogLikesCount = this.state.dogLikesCount;
    let catResult = 'Tie!', dogResult = 'Tie!';

    if (catLikesCount > dogLikesCount) {
      // console.log('Cat is the winner')
      catResult = 'Winner!'
      dogResult = 'Loser!'
    } else if (catLikesCount < dogLikesCount) {
      // console.log('Dog is the winner')
      catResult = 'Loser!'
      dogResult = 'Winner!'
    }

    this.setState({
      catLikesResult: catResult,
      dogLikesResult: dogResult
    });

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
            result={this.state.catLikesResult}
          />
          <Pet
            petName="Dog"
            petImageUrl="https://cdn7.littlethings.com/app/uploads/2017/05/big-dog-names-two-600x600.jpg"
            likesCount={this.state.dogLikesCount}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
            result={this.state.dogLikesResult}
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
