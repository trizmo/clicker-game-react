import React from 'react';


const Header = (props) => (
 
    <div>
      <div style={styles.mainHeader}>
        <h1>clicker-game!</h1>
        <h2>Current Score: {props.currentScore} | Top Score: {props.topScore}</h2>
        <h2></h2>
        <h2>{props.message}</h2>
      </div>

      <div>
        
        <h3>
          welcome to clicker-game<br></br>
          click on a char to gain a point<br></br>
          dont click and the same char more than once<br></br>
          get highest score = winner<br></br>
        </h3>


      </div>

      </div>
)

const styles = {
  mainHeader: {
    backgroundColor: 'dodgerblue',
    color: '#fff'
  }
}

export default Header;
