import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    Quantity:1,
    data:[],
    RequestState:false
});

const detailstate = (state = defaultState, action) => {

    if (action.type === constants.QUANTITY){
        return state.set('Quantity', action.value);
    }

    if (action.type === constants.GETDETAIL){
        return state.set('data', action.data);
    }

    if (action.type === constants.RENTREQUEST){
        return state.set('RequestState', action.value);
    }

    return state;
}

export default detailstate;