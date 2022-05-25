import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const GetCart = (result) => ({
    type: constants.GETCART,
    data: fromJS(result)
})

export const getCart = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/cart/'+ uid).then((res) => {
            const result = res.data;
            //console.log(res.status);

            dispatch(GetCart(result));
        }).catch(() => {
            //console.log('error');
        })
    }
}

export const deleteCartitem = (uid, itemID) => {
    return () => {
        let postdata ={
            "itemID": itemID
        };
        axios.post('http://localhost:8080/api/user/cart/delete/' + uid, postdata).then(res =>{
            //console.log(res);
        })
    }
}

//Pendding-----------------------------------------------------------------------------------------------------

const GetPendding = (result) => ({
    type: constants.GETPENDDING,
    data: fromJS(result)
})

export const getPendding = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/Pendding/'+ uid).then((res) => {
            const result = res.data;
            //console.log(res.data);
            dispatch(GetPendding(result));
        }).catch(() => {
            //console.log('error');
        })
    }
}

export const deletePenddingitem = (uid, itemID) => {
    return () => {
        let postdata ={
            "itemID": itemID
        };
        axios.post('http://localhost:8080/api/user/Pendding/delete/' + uid, postdata).then(res =>{
            //console.log(res);
        })
    }
}

export const updateTotalPrice = (uid, TotalPrice) => {
    return () => {
        let postdata ={
            "CartTotalPrice": TotalPrice
        };
        axios.post('http://localhost:8080/api/user/update/' + uid, postdata).then(res =>{
            //console.log(res);
            //console.log(TotalPrice);
        })
    }
}

//--------------------------------------------------

const GetRentList = (result) => ({
    type: constants.GETRENTLIST,
    data: fromJS(result)
})

export const getRentdetail = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/RentRequestlist/'+ uid).then((res) => {
            const result = res.data;
            //console.log(res.data);
            dispatch(GetRentList(result));
        }).catch(() => {
            //console.log('error');
        })
    }
}

export const deleteRentRequest = (uid, itemID) => {
    return () => {
        let postdata ={
            "itemID": itemID
        };
        axios.post('http://localhost:8080/api/user/RentRequestlist/delete/' + uid, postdata).then(res =>{
            //console.log(res);
        })
    }
}

//-----------------------------

const RentList = (result) => ({
    type: constants.GETAPPROVERENTLIST,
    data: fromJS(result)
})

export const GETApprovelist = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/AllRentList/'+ uid).then((res) => {
            const result = res.data;
            //console.log(res.data);
            dispatch(RentList(result));
        }).catch(() => {
            //console.log('error');
        })
    }
}

export const deleteApproveRent = (uid, itemID) => {
    return () => {
        let postdata ={
            "itemID": itemID
        };
        console.log(postdata);
        axios.post('http://localhost:8080/api/user/RentList/delete/' + uid, postdata).then(res =>{
            //console.log(res);
        })
    }
}

export const updateTotalrent = (uid, TotalPrice) => {
    return () => {
        let postdata ={
            "TotalrentPrice": TotalPrice
        };
        axios.post('http://localhost:8080/api/user/update/' + uid, postdata).then(res =>{
            //console.log(res);
            //console.log(TotalPrice);
        })
    }
}


const NOTNULL = () => ({
    type: constants.LISTISNULL,
    value:true
})

export const updateNOTNULL = () => {
    return (dispatch) => {
        dispatch(NOTNULL());
    }
}

const AddressState = () => ({
    type: constants.ADDRESSSTATE,
    value:true
})

export const updateAddressState = (UID, address) => {
    return (dispatch) => {
        let postdata = {
            "ShippingAddress":address
        };
        axios.post('http://localhost:8080/api/user/update/' + UID, postdata).then((res) => {
            console.log(res);
        })

        dispatch(AddressState());
    }
}