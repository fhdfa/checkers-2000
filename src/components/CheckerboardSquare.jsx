import React from 'react';
import { BLACK, RED } from '../constants/colors';

export default function CheckerboardSquare(props) {
  const classes = 'checkerboard-square ' + (props.color == RED ? 'red-square' : 'black-square');

  return (
    <div className={classes}>
      <div className="checkerboard-square-contents" />
    </div>
  );
}
