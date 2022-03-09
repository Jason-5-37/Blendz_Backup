import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    switch: false
});


export default (state = defaultState, action) => {
    if(action.type === constants.QUESTION_ON) {
        return state.set('switch', true);
    }

    if(action.type === constants.QUESTION_OFF) {
        return state.set('switch', false);
    }

    return state;
}