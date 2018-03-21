import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BLACK, RED } from '../constants/colors';
import { POSSIBLE_MOVER_HIGHLIGHT } from '../constants/positionHighlights';

function getHighlightClass(highlight) {
  switch(highlight) {
    case POSSIBLE_MOVER_HIGHLIGHT:
      return 'highlight possible-mover-highlight ';
    default:
      return '';
  }
}

function CheckerboardSquare(props) {
  const squareColorClass = (props.position === undefined ? 'red-square ' : 'black-square ');
  const squareHighlightClass = (props.position === undefined ? '' : getHighlightClass(props.allPositions[props.position].highlight));
  const squareClasses = 'checkerboard-square ' + squareColorClass + squareHighlightClass;
  let checkerPieceColor;
  let checkerPieceClasses;
  let checkerPiece;

  if(props.position !== undefined) {
    checkerPieceColor = props.allPositions[props.position].piece;

    if(checkerPieceColor !== null) {
      checkerPieceClasses = 'checker-piece ' + (checkerPieceColor === RED ? 'red-piece ' : 'black-piece ');

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
