import React, { Component } from 'react';
import './App.css';


import Header from './components/Header';
import Card from './components/Card';
import cards from './cards.json'

function shuffleCard(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {


  state = {
    cards,
    selected: [],
    currentScore: 0,
    topScore: 0,
    message: 'Click On A Character'
  }

  //shuffles the cards
  handleShuffle = () => {
    let shuffledCards = shuffleCard(cards);
    this.setState({
      cards: shuffledCards
    });
  }

  //sets the new topscore
  handleUpdateTopScore = () => {
    if(this.state.topScore < this.state.currentScore){
      this.setState({
        topScore: this.state.currentScore
      })
    }
  }


  //does most of the work, updating the message, shuffling the cards
  //and updates the score
  handleClick = id => {
    // const newArray = this.state.selected
    if (this.state.selected.includes(id)) {
      this.setState({
        selected: [],
        message: 'YOU LOSE!',
        currentScore: 0        
      })
      this.handleUpdateTopScore();
    } else {
      this.setState({
        selected: this.state.selected.concat(id),
        currentScore: this.state.currentScore + 1,
        message: 'Good Job!'
      })
    }
    this.handleShuffle();
  }

  render() {
    return (
      <div className="App" style={styles.mainContainer}>

        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <div style={styles.cardContainer}>
          {this.state.cards.map(card => (
            <Card
              handleClick={this.handleClick}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </div>

      </div>
    );



  }



}

const styles = {
  cardContainer: {
    display: 'flex',
    flexFlow: 'wrap'
  },

  mainContainer: {
    width: 808,
    padding: 45
  }
}

export default App;
