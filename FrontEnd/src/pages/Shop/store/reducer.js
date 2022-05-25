import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    selected: "Machine",
    list: []
});

const selecter = (state = defaultState, action) => {

    if(action.type === constants.SELECT_MACHINE) {
        return state.set('selected', "Machine");
    }

    if(action.type === constants.SELECT_BEVERAGES) {
        return state.set('selected', "Beverages");
    }

    if(action.type === constants.SELECT_ACCESSORIES) {
        return state.set('selected', "Accessories");
    }
    
    if (action.type === constants.CHANGELIST) {
        return state.set('list',action.data);
    }

    return state;
}

export default selecter;