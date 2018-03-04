import React from 'react';
import PropTypes from 'prop-types';
import CheckerboardSquare from './CheckerboardSquare.jsx';
import { POSITIONS_PER_ROW } from '../constants/checkerboard';

function pushRedBlack(squares, position) {
  squares.push(<CheckerboardSquare key={'red' + position} />);
  squares.push(<CheckerboardSquare position={position} key={position.toString()} />);
}

function pushBlackRed(squares, position) {
  squares.push(<CheckerboardSquare position={position} key={position.toString()} />);
  squares.push(<CheckerboardSquare key={'red' + position} />);
}

export default function CheckerboardRow(props) {
  let squares = [];
  const pushSquarePair = (props.row % 2 === 0 ? pushRedBlack : pushBlackRed);

  for(let i = 0; i < POSITIONS_PER_ROW; i++)
    pushSquarePair(squares, props.row * POSITIONS_PER_ROW + i);

  return (
    <div className="checkerboard-row">
      {squares}
    </div>
  );
}

CheckerboardRow.propTypes = {
  row: PropTypes.number.isRequired
};
