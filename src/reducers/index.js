import { combineReducers } from 'redux';
import { GET_USER_INFO } from '@/utils/actionTypes.js';

const rootReducer = (state, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return [...state, { userInfo: action.userInfo }];
  }
};

const reducers = combineReducers({
  rootReducer,
});

export default rootReducer;
