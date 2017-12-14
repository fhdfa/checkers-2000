import React, { Component } from 'react';

import BlackPiecesRemainingLabel from './BlackPiecesRemainingLabel.jsx';
import Checkerboard from './Checkerboard.jsx';
import GameControlButton from './GameControlButton.jsx';
import GameStatusLabel from './GameStatusLabel.jsx';
import GameTitleLabel from './GameTitleLabel.jsx';
import RedPiecesRemainingLabel from './RedPiecesRemainingLabel.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="checkers-2000">
        <GameTitleLabel />
        <BlackPiecesRemainingLabel />
        <RedPiecesRemainingLabel />
        <Checkerboard />
        <GameControlButton />
        <GameStatusLabel />
      </div>
    );
  }
}
