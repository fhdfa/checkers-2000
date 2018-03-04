import { POSITIONS_PER_CHECKERBOARD, PIECES_PER_PLAYER } from './constants/checkerboard';
import { BLACK, RED } from './constants/colors';
import { INITIAL_STATE, GAME_WON, GAME_ENDED } from './constants/gameStates';
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
  const nextPositions = [
    ...positionsWithBlackPieces(state.positions),
    ...emptyPositions(state.positions),
    ...positionsWithRedPieces(state.positions)
  ];

  return Object.assign({}, state, { positions: nextPositions });
}

function playAgain(state) {
  return state;
}

function endGame(state) {
  return state;
}

export default function game(state = defaultState, action) {
  switch(action.type) {
    case GAME_CONTROL_ACTUATED:
      if(state.gameState == INITIAL_STATE)
        return startGame(state);
      else if(state.gameState == GAME_WON || state.gameState == GAME_ENDED)
        return playAgain(state);
      else
        return endGame(state);
    default:
      return state;
  }
}
