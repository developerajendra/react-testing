import {actionTypes} from '../actions';
 


/**
 * guess word reducer
 */
export const guessedWords =  (state=[], action) => {
    switch(action.type){
        case actionTypes.GUESS_WORD:
            return [...state, action.payload]
            default:
                return state;
    }
}