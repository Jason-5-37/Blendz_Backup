import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    Productlist: [],
    userList:[],
    penddingList:[],
    productdetail:[],
    rentlist:[],
    TotalPrice:'',
    TotalPriceState:false,
    ApproveList:[]
})

const AdministratorsState = (state = defaultState, action) => {
    
    if (action.type === constants.GETPRODUCT) {
        return state.set('Productlist',action.data);
    }
    if (action.type === constants.GETUSERS) {
        return state.set('userList',action.data);
    }
    if (action.type === constants.GETUSER) {
        return state.set('penddingList',action.data);
    }
    if (action.type === constants.PRODUCTINFO) {
        return state.set('productdetail',action.data);
    }
    if (action.type === constants.GETUSERRENT) {
        return state.set('rentlist',action.data);
    }
    if (action.type === constants.TOTALPRICESTATE) {
        return state.set('TotalPriceState',action.state);
    }
    if (action.type === constants.RESETTOTALPRICE) {
        return state.set('TotalPriceState',action.state);
    }
    if (action.type === constants.GETTOTALPRICE) {
        return state.set('TotalPrice',action.value);
    }
    if (action.type === constants.GETRENTLIST) {
        return state.set('ApproveList',action.data);
    }

    return state;
}

export default AdministratorsState;