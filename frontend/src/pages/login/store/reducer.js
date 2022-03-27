import { UseAuth } from "../../../firebase";
import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    login: false,
    Currentuser: 'a'
});


const Loginstate = (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.CHANGE_LOGOUT:
            return state.set('login',action.value);
        case constants.CHANGE_RLOGIN:
            return state.set('login',action.value);
        case constants.GET_USER:
            return state.set('Currentuser', action.data);

        default:
            return state;
    }
}

export default Loginstate;