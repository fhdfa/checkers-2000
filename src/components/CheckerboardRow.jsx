import React from 'react';
import CheckerboardSquare from './CheckerboardSquare.jsx';
import { SQUARES_PER_ROW } from '../constants/checkerboard';
import { BLACK, RED } from '../constants/colors';

export default function CheckerboardRow(props) {
  let squares = [];
  let color = props.startingColor;

  for(let i = 0; i < SQUARES_PER_ROW; i++) {
    squares.push(<CheckerboardSquare color={color} key={i.toString()} />);

    if(color == RED)
      color = BLACK;
    else
      color = RED;
  }

  return (
    <div className="checkerboard-row">
      {squares}
    </div>
  );
}
