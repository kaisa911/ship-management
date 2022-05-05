import { combineReducers } from 'redux';
import { GET_USER_INFO } from '@/utils/actionTypes';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, userInfo: action.data };
    default: // need this for default case
      return state;
  }
};

const reducers = combineReducers({
  rootReducer,
});

export default reducers;
