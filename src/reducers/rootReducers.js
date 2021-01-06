import { combineReducers } from 'redux';
import commonReducer from './common';

const mainReducer = combineReducers({
	commonReducer,
});

const rootReducer = (state, action) => {
	return mainReducer(state, action);
};

export default rootReducer;
