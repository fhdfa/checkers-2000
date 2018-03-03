import { POSITIONS_PER_CHECKERBOARD, PIECES_PER_PLAYER } from './constants/checkerboard';
import { BLACK, RED } from './constants/colors';
import { INITIAL_STATE, GAME_WON, GAME_ENDED } from './constants/gameStates';
import { GAME_CONTROL_ACTUATED } from './actions';

// [ 'position1', 'position2', ... ]
const defaultPositionIds = new Array(POSITIONS_PER_CHECKERBOARD).fill('position').map((value, index) => value + (index + 1));

// { position1: { piece: null, highlight: null }, position2: { piece: null, highlight: null }, ... }
const defaultPositions = new Object();
defaultPositionIds.forEach(value => {
  defaultPositions[value] = {
    piece: null,
    highlight: null
  };
});

const defaultState = {
  gameState: INITIAL_STATE,
  currentColor: null,
  blackPieces: 0,
  redPieces: 0,
  positions: {
    byId: defaultPositions,
    allIds: defaultPositionIds
  },
  pieces: {
    byId: {},
    allIds: []
  },
  highlights: {
    byId: {},
    allIds: []
  }
};

// [ 'position1', 'position2', ..., 'position12' ]
const blackStartingPositions = new Array(PIECES_PER_PLAYER).fill('position').map((value, index) => value + (index + 1));

// [ 'position21', 'position22', ..., 'position32' ]
const redStartingPositions = new Array(PIECES_PER_PLAYER).fill('position').map((value, index) => value + (POSITIONS_PER_CHECKERBOARD - index));

function startGame(state) {
  const nextState = Object.assign({}, state);

  blackStartingPositions.forEach(value => {
    nextState.positions.byId[value].piece = BLACK;
  });

  redStartingPositions.forEach(value => {
    nextState.positions.byId[value].piece = RED;
  });

  nextState.positions = Object.assign({}, nextState.positions);

  return nextState;
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
