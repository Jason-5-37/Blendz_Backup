import axios from "axios";
import * as constants from '../../Login/store/constants';
import { signup } from "../../../firebase";

const ChangeRLogin = () => ({
    type: constants.CHANGE_RLOGIN,
    value: true
})


export const sign_up = (email, password) => {
    return(dispatch) => {
        signup(email, password).then((res) => {
            console.log(res);
            var storage=window.localStorage;
            storage.setItem("Islogin", 1);
            dispatch(ChangeRLogin())
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }
}