import React from 'react';
import PropTypes from 'prop-types';
import { BLACK, RED } from '../constants/colors';

export default function CheckerboardSquare(props) {
  const classes = 'checkerboard-square ' + (props.color == RED ? 'red-square' : 'black-square');

  return (
    <div className={classes}>
      <div className="checkerboard-square-contents" />
    </div>
  );
}

CheckerboardSquare.propTypes = {
  color: PropTypes.string.isRequired
};
