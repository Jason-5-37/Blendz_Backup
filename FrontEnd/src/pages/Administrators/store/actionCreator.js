import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (result) => ({
    type: constants.GETPRODUCT,
    data: fromJS(result)
})

export const getProductList = (Type) => {
    return (dispatch) => {        
        var storage=window.localStorage;
        if(Type === "Beverage"){
            storage.setItem("Type", "beverage");
            axios.get('http://localhost:8080/api/beverages').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
        }else if(Type === "Accessories"){
            storage.setItem("Type", "accessories");
            axios.get('http://localhost:8080/api/accessories').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
        }else{
            storage.setItem("Type", "machine");    
            axios.get('http://localhost:8080/api/machines').then((res) => {
            const result = res.data;        
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
    }}
}

export const updateProduct = (name, dprice, PriceToPay, ImgUrl, pdfUrl, VideoUrl, des, params) => {
    var storage=window.localStorage;
    var submitType = storage.getItem("Type");
    return () => {
        if( params === "AddProduct"){
            let postdata = {
                "id":name,
                "name":name,
                "price":dprice,
                "imgUrl":ImgUrl,
                "type":submitType,
                "priceforPay":PriceToPay,
                "pdfUrl":pdfUrl,
                "VideoUrl":VideoUrl,
                "description":des
            }
            if(submitType === "machine"){
                axios.post('http://localhost:8080/api/machine', postdata).then((res) => {
                console.log(res);
                console.log(params);

            })
            }else if (submitType === "beverage"){
                axios.post('http://localhost:8080/api/beverage', postdata).then((res) => {
                console.log(params);
                console.log(res);
            })
            }else if(submitType === "accessories"){
                axios.post('http://localhost:8080/api/accessorie', postdata).then((res) => {
                console.log(params);
                console.log(res);
            })
            }
        }else{
            let postdata = {
                "id":params,
                "name":params,
                "price":dprice,
                "imgUrl":ImgUrl,
                "type":submitType,
                "priceforPay":PriceToPay,
                "pdfUrl":pdfUrl,
                "VideoUrl":VideoUrl,
                "description":des
            }
            if(submitType === "machine"){
                axios.post('http://localhost:8080/api/machine/update/'+ params, postdata).then((res) => {
                console.log(params);
                console.log(res);
            })
            }else if (submitType === "beverage"){
                axios.post('http://localhost:8080/api/beverage/update/'+ params, postdata).then((res) => {
                console.log(params);
                console.log(res);
                console.log(postdata);
            })
            }else if(submitType === "accessories"){
                axios.post('http://localhost:8080/api/accessorie/update/'+ params, postdata).then((res) => {
                console.log(params);
                console.log(res);
            })
            }
        }

        window.location.href = 'http://localhost:3000/Administrators/ManageProduct';

    }
}

export const deletItem = (id) => {
    return() => {
        console.log(id);
        var storage=window.localStorage;
        var submitType = storage.getItem("Type");
        if(submitType === "machine"){
            axios.post('http://localhost:8080/api/machine/delete/'+ id).then((res) => {
                console.log(res);
            })
        }else if (submitType === "beverage"){
            axios.post('http://localhost:8080/api/beverage/delete/'+ id).then((res) => {
                console.log(res);
            })
        }else if(submitType === "accessories"){
            axios.post('http://localhost:8080/api/accessorie/delete/'+ id).then((res) => {
                console.log(res);
            })
        }
        window.location.href = 'http://localhost:3000/Administrators/ManageProduct';
    }
}


const getProductdetail = (result) => ({
    type: constants.PRODUCTINFO,
    data: result
})

export const getProduct = (id) => {
    return(dispatch) => {
        var storage=window.localStorage;
        var submitType = storage.getItem("Type");
        if(submitType === "machine"){
            axios.get('http://localhost:8080/api/machine/'+ id).then((res) => {
                //console.log(res);
                const data = res.data;
                dispatch(getProductdetail(data));
            })
        }else if (submitType === "beverage"){
            axios.get('http://localhost:8080/api/beverage/'+ id).then((res) => {
                //console.log(res);
                const data = res.data;
                dispatch(getProductdetail(data));
            })
        }else if(submitType === "accessories"){
            axios.get('http://localhost:8080/api/accessorie/'+ id).then((res) => {
                //console.log(res);
                const data = res.data;
                dispatch(getProductdetail(data));
            })
        }
    }
}


//Manage User ------------------------------------------------

//get all User ------------------------------------------------
const UserList = (users) => ({
    type: constants.GETUSERS,
    data: fromJS(users)
})

export const getUserList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/users').then((res) => {
            const users = res.data;
            dispatch(UserList(users));
        }).catch(() => {
            console.log('error');
        })
    }
}


//get  User detail------------------------------------------------

const changedetail = (date) => ({
    type: constants.GETUSER,
    data: fromJS(date)
})

export const getUserdetail = (id) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/pendding/' + id).then((res) => {
            const penddingList = res.data;
            dispatch(changedetail(penddingList));
        }).catch(() => {
            console.log('error');
        })
    }
}

//Change user state------------------------------------------------

export const postToCart = (UID, itemID, number, Price) => {
    return () => {
        let postdata = {
            "itemID": itemID,
            "number":number,
            "Price":Price
        }
        axios.post('http://localhost:8080/api/user/update/cart/' + UID, postdata).then(res=>{
                //console.log(res);
            })
        axios.post('http://localhost:8080/api/user/Pendding/delete/' + UID, postdata).then(res =>{
                //console.log(res);
            })
        window.location.reload();
        }
}

export const DeletePendding = (UID) => {
    return () => {
        let updatePendingState = {
            "Pendding": "Nothing"
        }
    axios.post('http://localhost:8080/api/user/update/' + UID, updatePendingState).then(res=>{
    //console.log(res);
})
    }
}

export const AddePendding = (UID) => {
    return () => {
        let updatePendingState = {
            "Pendding": "Yes"
        }
    axios.post('http://localhost:8080/api/user/update/' + UID, updatePendingState).then(res=>{
    //console.log(res);
})
    }
}


//Rent start--------------------------------------

const GetRentList = (result) => ({
    type: constants.GETUSERRENT,
    data: fromJS(result)
})

export const getRentdetail = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/RentRequestlist/'+ uid).then((res) => {
            const result = res.data;
            console.log(res.data);
            dispatch(GetRentList(result));
        }).catch(() => {
            //console.log('error');
        })
    }
}


export const RentpostToCart = (UID, itemID, TotalPrice) => {
    return () => {
        console.log(TotalPrice);
        let postdata = {
            "itemID": itemID,
            "TotalPrice":TotalPrice,
        }
        axios.post('http://localhost:8080/api/user/RentRequestlist/update/' + UID, postdata).then(res=>{
                //console.log(res);
            })
            window.location.reload();
        }
}

export const DeleteRentstate = (UID) => {
    return () => {
        let updateState = {
            "RentRequest": "Nothing"
    }
    axios.post('http://localhost:8080/api/user/update/' + UID, updateState).then(res=>{
    console.log(res);})
    }
}

export const AddeRentstate = (UID) => {
    return () => {
        let updateState = {
            "RentRequest": "Yes"
    }
    axios.post('http://localhost:8080/api/user/update/' + UID, updateState).then(res=>{
    console.log(res);})
    }
}


//Rent approve list----------------

export const PostToApprove = (UID, itemID, number,StartDate, EndDate, TotalPrice) => {
    return () => {
        let postdata = {
            "itemID": itemID,
            "number":number,
            "StartDate":StartDate, 
            "EndDate":EndDate,
            "TotalPrice":TotalPrice,
            "State":"NotPay"
        }
        //console.log(postdata);
        axios.post('http://localhost:8080/api/user/RentList/' + UID, postdata).then(res=>{
                //console.log(res);
            })
        axios.post('http://localhost:8080/api/user/RentRequestlist/delete/' + UID, postdata).then(res =>{
                //console.log(res);
            })
        
        window.location.reload();
        
        }
}

const RentList = (result) => ({
    type: constants.GETRENTLIST,
    data: fromJS(result)
})

export const GETApprovelist = (uid) => {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/user/AllRentList/'+ uid).then((res) => {
            const result = res.data;
            console.log(res.data);
            dispatch(RentList(result));
        }).catch(() => {
            //console.log('error');
        })
    }
}

//get Total price --------------------

const SetPrice = () => ({
    type: constants.TOTALPRICESTATE,
    state:true
})

export const SetPriceState = () => {
    return (dispatch) => {
        dispatch(SetPrice())
    }
}

const ResetPrice = () => ({
    type: constants.RESETTOTALPRICE,
    state:false
})

export const RestPrice = () => {
    return (dispatch) => {
        dispatch(ResetPrice())
    }
}

const SetTotalPrice = (TotalPrice) => ({
    type: constants.GETTOTALPRICE,
    value:TotalPrice
})

export const GetTotalPrice = (TotalPrice) => {
    return (dispatch) => {
        dispatch(SetTotalPrice(TotalPrice))
    }
}