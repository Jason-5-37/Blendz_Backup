import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    name:'',
    email:'',
    CartTotalPrice:0,
    TotalrentPrice:0,
    ChangeNameState:false
});

const Userdetail  = (state = defaultState, action) => {
    
    if (action.type === constants.GETUSER) {
        return state.merge({
            name:action.name,
            email:action.email,
            CartTotalPrice:action.CartTotalPrice,
            TotalrentPrice:action.TotalrentPrice
        });
    }
    if (action.type === constants.CHANGENAME) {
        return state.set('ChangeNameState', action.value);
    }

    if (action.type === constants.CANCELCHANGENAME) {
        return state.set('ChangeNameState', action.value);
    }

    return state;
}

export default Userdetail ;