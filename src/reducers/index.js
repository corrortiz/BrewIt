import { combineReducers } from 'redux';

import lenguajeReducer from './lenguajeReducer';

const rootReducer = combineReducers({
    local: lenguajeReducer
});

export default rootReducer;
