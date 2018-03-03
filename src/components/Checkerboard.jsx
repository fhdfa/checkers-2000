import React from 'react';
import CheckerboardRow from './CheckerboardRow.jsx';
import { ROWS_PER_CHECKERBOARD } from '../constants/checkerboard';

export default function Checkerboard() {
  let rows = [];

  for(let i = 0; i < ROWS_PER_CHECKERBOARD; i++)
    rows.push(<CheckerboardRow row={i} key={i.toString()} />);

  return (
    <div className="checkerboard">
      {rows}
    </div>
  );
}
