import React from 'react';
import CheckerboardRow from './CheckerboardRow.jsx';
import { ROWS_PER_CHECKERBOARD } from '../constants/checkerboard';
import { BLACK, RED } from '../constants/colors';

export default function Checkerboard() {
  let rows = [];
  let color = RED;

  for(let i = 0; i < ROWS_PER_CHECKERBOARD; i++) {
    rows.push(<CheckerboardRow startingColor={color} key={i.toString()} />);

    if(color == RED)
      color = BLACK;
    else
      color = RED;
  }

  return (
    <div className="checkerboard">
      {rows}
    </div>
  );
}
