import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as loginReducer } from '../pages/login/store/all.js';
import { reducer as helpReducer } from '../pages/Help/store';

const reducer = combineReducers({
    header: headerReducer,
    login: loginReducer,
    help: helpReducer
})

export default reducer;