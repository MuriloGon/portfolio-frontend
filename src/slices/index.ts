import { combineReducers } from 'redux';
import globalReducer from './global.slice';

const rootReducer = combineReducers({
  globalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
