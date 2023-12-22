import { combineReducers } from 'redux';
import doctorReducer from './doctorReducer';

const rootReducer = combineReducers({
  doctor: doctorReducer,
});

export default rootReducer;
