import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'som car stuff',
    body: 'with soap',
    done: false,
    todoId: 1
  },
  2: {
    id: 2,
    title: 'spray car',
    body: 'with hose',
    done: false,
    todoId: 1
  },
};


const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_STEPS:
      newState = {};
      action.steps.forEach(step => {
        newState[step.id] = step;
      });
      return newState;
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};
export default stepsReducer;
