import axios from "axios";
import * as constants from '../../login/store/constants';
import { signup } from "../../../firebase";

const ChangeRLogin = () => ({
    type: constants.CHANGE_RLOGIN,
    value: true
})


export const sign_up = (email, password) => {
    return(dispatch) => {
        signup(email, password).then((res) => {
            console.log(res);
            dispatch(ChangeRLogin())
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }
}