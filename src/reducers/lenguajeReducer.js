import {SET_LOCALE} from '../action/index';

const INITIAL_STATE = { local: 'en' };

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case SET_LOCALE:
            return {...state, local: action.payload};
        default:
            return state;
    }
}