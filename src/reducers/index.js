import { combineReducers } from 'redux';
import HistoryReducer from './history-reducer';
import LaunchReducer from './launch-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  historyStore: HistoryReducer,
  launchStore: LaunchReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
