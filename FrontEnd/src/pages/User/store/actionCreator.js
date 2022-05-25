import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const getUserdetail = (name, email,CartTotalPrice, TotalrentPrice) => ({
    type: constants.GETUSER,
    name,
    email,
    CartTotalPrice,
    TotalrentPrice,
})

export const getUser = (UID) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/' + UID).then((res) => {
            const result = res.data;
            //console.log(res);
            //console.log(result.CartTotalPrice);
            dispatch(getUserdetail(result.name, result.email, result.CartTotalPrice,result.TotalrentPrice));
        }).catch(() => {
            console.log('error');
        })
    }
}

const SendChangeName = () => ({
    type : constants.CHANGENAME,
    value: true
})

export const Changename = () => {
    return (dispatch) => {
        dispatch(SendChangeName());
    }
}

const SendChangeName2 = () => ({
    type : constants.CANCELCHANGENAME,
    value: false
})

export const CancelChangename = () => {
    return (dispatch) => {
        dispatch(SendChangeName2());
    }
}


export const updatename = (name, UID) => {
    return () => {
        let postdata = {
            "name":name
        };
        axios.post('http://localhost:8080/api/user/update/' + UID, postdata).then((res) => {
            console.log(res);
        })
    }
}