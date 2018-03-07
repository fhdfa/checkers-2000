import { POSITIONS_PER_ROW, POSITIONS_PER_CHECKERBOARD, PIECES_PER_PLAYER } from './constants/checkerboard';
import { BLACK, RED } from './constants/colors';
import { POSSIBLE_MOVER_HIGHLIGHT } from './constants/positionHighlights';
import { INITIAL_STATE, SELECT_PIECE, GAME_WON, GAME_ENDED } from './constants/gameStates';
import { GAME_CONTROL_ACTUATED } from './actions';

const defaultPosition = {
  piece: null,
  crown: false,
  highlight: null
};

const defaultState = {
  gameState: INITIAL_STATE,
  currentColor: null,
  blackPieces: 0,
  redPieces: 0,
  positions: new Array(POSITIONS_PER_CHECKERBOARD).fill(defaultPosition)
};

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case GAME_CONTROL_ACTUATED:
      if(state.gameState === INITIAL_STATE)
        return startGame(state);
      else if(state.gameState === GAME_WON || state.gameState === GAME_ENDED)
        return playAgain(state);
      else
        return endGame(state);
    default:
      return state;
  }
}

function containsBlackPiece(position) {
  return position.piece === BLACK;
}

function isEmptyPosition(position) {
  return position !== null && position.piece === null;
}

function addPossibleMoverHighlight(thisPosition, forwardLeftPosition, forwardRightPosition) {
  if(containsBlackPiece(thisPosition) && (isEmptyPosition(forwardLeftPosition) || isEmptyPosition(forwardRightPosition)))
    return Object.assign({}, thisPosition, { highlight: POSSIBLE_MOVER_HIGHLIGHT });
  else
    return thisPosition;
}

function rowStartsRed(index) {
  return index % (POSITIONS_PER_ROW * 2) < POSITIONS_PER_ROW;
}

function getForwardLeftPosition(index) {
  if(rowStartsRed(index))
    return index + POSITIONS_PER_ROW + 1;
  else
    return index + POSITIONS_PER_ROW;
}

function getForwardRightPosition(index) {
  if(rowStartsRed(index))
    return index + POSITIONS_PER_ROW;
  else
    return index + POSITIONS_PER_ROW - 1;
}

function someFunction(thisPosition, index, positions) {
  const leftEdgePositions = [ 4, 12, 20, 28 ];
  const rightEdgePositions = [ 3, 11, 19, 27 ];
  const forwardLeftPosition = (rightEdgePositions.includes(index) ? null : positions[getForwardLeftPosition(index)]);
  const forwardRightPosition = (leftEdgePositions.includes(index) ? null : positions[getForwardRightPosition(index)]);

  return addPossibleMoverHighlight(thisPosition, forwardLeftPosition, forwardRightPosition);
}

function addAllPossibleMoverHighlights(positions) {
  return positions.map(someFunction);
}

function positionsWithBlackPieces(positions) {
  return (
    positions.slice(0, PIECES_PER_PLAYER)
             .map(value => Object.assign({}, value, { piece: BLACK }))
  );
}

function emptyPositions(positions) {
  return positions.slice(PIECES_PER_PLAYER, POSITIONS_PER_CHECKERBOARD - PIECES_PER_PLAYER);
}

function positionsWithRedPieces(positions) {
  return (
    positions.slice(POSITIONS_PER_CHECKERBOARD - PIECES_PER_PLAYER, POSITIONS_PER_CHECKERBOARD)
             .map(value => Object.assign({}, value, { piece: RED }))
  );
}

function startGame(state) {
  const nextPositions = addAllPossibleMoverHighlights([
    ...positionsWithBlackPieces(state.positions),
    ...emptyPositions(state.positions),
    ...positionsWithRedPieces(state.positions)
  ]);

  return Object.assign({}, state, {
    gameState: SELECT_PIECE,
    currentColor: BLACK,
    blackPieces: PIECES_PER_PLAYER,
    redPieces: PIECES_PER_PLAYER,
    positions: nextPositions
  });
}

function playAgain(state) {
  return state;
}

function endGame(state) {
  return state;
}
