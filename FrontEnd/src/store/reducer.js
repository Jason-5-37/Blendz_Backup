import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../pages/Login/store/index';
import { reducer as shopreducer } from '../pages/Shop/store/index';
import { reducer as detailreducer } from '../pages/Detail/store/index';
import { reducer as userreducer } from '../pages/User/store/index';
import { reducer as cartreducer } from '../pages/Cart/store/index';
import { reducer as orderreducer } from '../pages/OrderList/store/index';
import { reducer as Adminreducer } from '../pages/Administrators/store/index';

const reducer = combineReducers({
    login: loginReducer,
    shop: shopreducer,
    detail: detailreducer,
    user: userreducer,
    cart: cartreducer,
    order: orderreducer,
    Admin: Adminreducer
})

export default reducer;