import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../pages/Login/store/index';
import { reducer as shopreducer } from '../pages/Shop/store/index';
import {reducer as detailreducer } from '../pages/Detail/store/index';

const reducer = combineReducers({
    login: loginReducer,
    shop: shopreducer,
    detail: detailreducer
})

export default reducer;