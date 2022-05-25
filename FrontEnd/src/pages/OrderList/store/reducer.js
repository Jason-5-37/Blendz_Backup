import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    Orderlist: [],
    OrderDetaillist: [],
    Rentlist:[],
    RentDetaillist: [],
    OrderID: '',
    ShippingAddress: ''
})

const orderstate = (state = defaultState, action) => {
    
    if (action.type === constants.GETORDERLIST) {
        return state.set('Orderlist',action.data);
    }

    if (action.type === constants.GETORDERLISTDETAIL) {
        return state.set('OrderDetaillist',action.data);
    }

    if (action.type === constants.GETRENTLIST) {
        return state.set('Rentlist',action.data);
    }

    if (action.type === constants.GETRENTDETAIL) {
        return state.set('RentDetaillist',action.data);
    }

    if (action.type === constants.ORDERID) {
        return state.set('OrderID',action.data);
    }

    if (action.type === constants.SHIPPINGADDRESS) {
        return state.set('ShippingAddress',action.data);
    }
    return state;
}

export default orderstate;