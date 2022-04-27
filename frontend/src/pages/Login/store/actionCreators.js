import axios from "axios";
import * as constants from './constants';
import { login, logout, UseAuth, reSetPassword } from "../../../firebase";
import { fromJS } from "immutable";

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

const ChangeLogout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})

const GetUser = (data) => ({
    type: constants.GET_USER,
    data: fromJS(data)
})


export const log_in = (email, password) => {
    return(dispatch) => {
        login(email, password).then((res) => {
            console.log(res);
            var storage=window.localStorage;
            storage.setItem("Islogin", 1);
            dispatch(changeLogin());
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }
}

export const log_out = () => {
    return(dispatch) => {
        logout().then((res) => {
            console.log("Logout");
            //change localstorage
            var storage=window.localStorage;
            storage.setItem("Islogin", 0);
            //nav to login page
            window.location.replace("/login");
            dispatch(ChangeLogout())
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }
}

export const Reset_Password = (email) => {
    return(dispatch) => {
        reSetPassword(email).then((res) => {
            console.log("email has sended");
            dispatch(ChangeLogout())
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }
}

export const get_User = () =>{
    return(dispatch) => {
        const data = UseAuth().email;
        dispatch(GetUser(data.data));
    }
};
