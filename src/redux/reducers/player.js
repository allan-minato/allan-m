import { UPDATE_EMAIL, UPDATE_USERNAME, UPDATE_SCORE, TOTAL_SCORE } from '../actions';

const INITIAL_STATE = {
  email: '',
  userName: '',
  score: 0,
  assertions: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_EMAIL:
    return {
      ...state,
      email: action.email,
    };

  case UPDATE_USERNAME:
    return {
      ...state,
      userName: action.userName,
    };

  case UPDATE_SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };

  case TOTAL_SCORE:
    return {
      ...state,
      assertions: state.assertions + action.assertions,
    };
  default:
    return state;
  }
};

export default player;
