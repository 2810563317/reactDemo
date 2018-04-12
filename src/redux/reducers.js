import { combineReducers } from 'redux';

// Reducers
import planlist from './reducer';

// Combine Reducers
var reducers = combineReducers({
    planlist: planlist
});

export default reducers;