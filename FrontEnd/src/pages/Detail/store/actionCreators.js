import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changedetail = (data) => ({
    type: constants.GETDETAIL,
    data:data
})


export const getMachineDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/machine/' + id).then((res) => {
            const result = res.data;
            //console.log(result);
            dispatch(changedetail(result));
        }).catch(() => {
            console.log('error');
        })
    }
}


export const getBeverageDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/beverage/' + id).then((res) => {
            const result = res.data;
            dispatch(changedetail(result));
        }).catch(() => {
            console.log('error');
        })
    }
}


export const getAccessorieDetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/accessorie/' + id).then((res) => {
            const result = res.data;
            //console.log("result");
            dispatch(changedetail(result));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const postItem = (UID, itemID, number, Price, Type) => {
    return (dispatch) => {
        //console.log(number);
        let postdata = {
            "itemID": itemID,
            "number":number,
            "Price":Price
        };
        
        if(Type === "machine"){
            if(number > 1){
                axios.post('http://localhost:8080/api/user/update/Pendding/' + UID, postdata).then(res=>{
                //console.log(res);
            })
                let updatePendingState = {
                    "Pendding": "Yes"
                }
                axios.post('http://localhost:8080/api/user/update/' + UID, updatePendingState).then(res=>{
                //console.log(res);
            })
            }else{
                axios.post('http://localhost:8080/api/user/update/cart/' + UID, postdata).then(res=>{
                //console.log(res);
            })
            }
        }else{
            axios.post('http://localhost:8080/api/user/update/cart/' + UID, postdata).then(res=>{
            //console.log(res);
        })
        }

        window.location.href = `/shop/detail/${itemID}`;
    }
}


const inputQUANTITY = (QUANTITY) => ({
    type: constants.QUANTITY,
    value: QUANTITY
})

export const QUANTITY = (inputNumber) => {
    return (dispatch) => {
        dispatch(inputQUANTITY(inputNumber));
    }
}

const openRequest = (True) => ({
    type: constants.RENTREQUEST,
    value: True
})

export const RequestRent = () => {
    return (dispatch) => {
        dispatch(openRequest(true));
    }
}

export const CancelRequestRent = () => {
    return (dispatch) => {
        dispatch(openRequest(false));
    }
}

export const handinRentRquest = (UID,itemID, Quantity, StartDate, EndDate) => {
    return(dispatch) => {
        if(Quantity !== '' && StartDate !== '' & EndDate !== ''){
            if(Quantity <= 0){
                alert("Quanlity must be postive number");
            }else{
                let postdate = {
                    "itemID":itemID,
                    "Quantity":Quantity, 
                    "StartDate":StartDate, 
                    "EndDate":EndDate,
                    "State":"NotPay"
                }
                axios.post('http://localhost:8080/api/user/update/RentRequest/' + UID, postdate).then(res=>{
                //console.log(res);
            })
                let updateRentRquestState = {
                    "RentRequest": "Yes"
                }
                axios.post('http://localhost:8080/api/user/update/' + UID, updateRentRquestState).then(res=>{
                //console.log(res);
            })
                console.log(postdate);
                alert("Request has been sent");
            }            
        }else{
            alert("must fill up all information");
        }
        dispatch(openRequest(false));
    }
}