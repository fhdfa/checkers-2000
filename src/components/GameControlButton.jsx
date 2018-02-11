import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { INITIAL_STATE, GAME_WON, GAME_ENDED } from '../constants/gameStates';
import { actuateGameControl } from '../actions';

class GameControlButton extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.actuateGameControl();
  }

  render() {
    let buttonText;

    switch(this.props.gameState) {
      case INITIAL_STATE:
        buttonText = 'Start Game';
        break;
      case GAME_WON:
      case GAME_ENDED:
        buttonText = 'Play Again';
        break;
      default:
        buttonText = 'End Game';
    }

    return (
      <Button bsStyle="primary" onClick={this.handleButtonClick}>
        {buttonText}
      </Button>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.gameState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    actuateGameControl
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameControlButton);
