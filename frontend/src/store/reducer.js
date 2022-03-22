import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../pages/login/store/all.js';
import { reducer as shopreducer } from '../pages/Shop/store/index';
import { reducer as registerreducer } from '../pages/Register/store/index';

const reducer = combineReducers({
    login: loginReducer,
    shop: shopreducer,
    register: registerreducer
})

export default reducer;