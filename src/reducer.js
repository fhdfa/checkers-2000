import { POSITIONS_PER_CHECKERBOARD } from './constants/checkerboard';
import { INITIAL_STATE } from './constants/gameStates';

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

export default function game(state = defaultState, action) {
  return state;
}
