import { POSITIONS_PER_CHECKERBOARD } from './constants/checkerboard';
import { INITIAL_STATE, GAME_WON, GAME_ENDED } from './constants/gameStates';
import { GAME_CONTROL_ACTUATED } from './actions';

// [ 'position1', 'position2', etc ]
const defaultPositionIds = new Array(POSITIONS_PER_CHECKERBOARD).fill('position').map((value, index) => value + (index + 1));

// { position1: { piece: null, highlight: null }, position2: { piece: null, highlight: null }, etc }
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

function startGame(state) {
  return state;
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
