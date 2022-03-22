import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
});


const Registerstate = (state = defaultState, action) => {
    if(action.type === constants.CHANGE_RLOGIN) {
        return state.set('login', "true");
    }
    return state;
}

export default Registerstate;