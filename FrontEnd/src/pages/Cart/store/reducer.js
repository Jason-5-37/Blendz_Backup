import * as constants from './constants';
import { fromJS } from 'immutable';
import { getPrice } from './actionCreators';

const defaultState = fromJS({
    cartlist:[],
    penddinglist:[],
    rentlist:[],
    Approverentlist:[],
    NullApproveRentList:false,
    AddressState:false
});

const Cartstate = (state = defaultState, action) => {

    
    if (action.type === constants.GETPENDDING) {
        return state.set('penddinglist',action.data);
    }

    if (action.type === constants.GETCART) {
        return state.set('cartlist',action.data);
    }
    if (action.type === constants.GETRENTLIST) {
        return state.set('rentlist',action.data);
    }
    if (action.type === constants.GETAPPROVERENTLIST) {
        return state.set('Approverentlist',action.data);
    }
    if (action.type === constants.LISTISNULL) {
        return state.set('NullApproveRentList',action.value);
    }
    if (action.type === constants.ADDRESSSTATE) {
        return state.set('AddressState',action.value);
    }
    return state;
}

export default Cartstate;

