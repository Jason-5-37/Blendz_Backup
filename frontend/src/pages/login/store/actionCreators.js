import axios from "axios";
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = () => {
    return(dispatch) => {
        axios.get('http://localhost:8080/api/user').then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error);
        })
    }
}
