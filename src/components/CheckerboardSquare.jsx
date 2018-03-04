import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BLACK, RED } from '../constants/colors';

function CheckerboardSquare(props) {
  const squareClasses = 'checkerboard-square ' + (props.position === undefined ? 'red-square' : 'black-square');
  let checkerPieceColor;
  let checkerPieceClasses;
  let checkerPiece;

  if(props.position !== undefined) {
    checkerPieceColor = props.allPositions[props.position].piece;

    if(checkerPieceColor !== null) {
      checkerPieceClasses = 'checker-piece ' + (checkerPieceColor === RED ? 'red-piece' : 'black-piece');

      checkerPiece = (
        <div className={checkerPieceClasses}>
          <div className="checker-piece-inner-ring" />
        </div>
      );
    }
  }

  return (
    <div className={squareClasses}>
      {checkerPiece}
    </div>
  );
}

CheckerboardSquare.propTypes = {
  position: PropTypes.number
};

function mapStateToProps(state) {
  return {
    allPositions: state.positions
  };
}

export default connect(mapStateToProps)(CheckerboardSquare);
