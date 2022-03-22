import axios from "axios";
import * as constants from './constants';

const ChangeRLogin = () => ({
    type: constants.CHANGE_RLOGIN,
    value: true
})


export const register = (email, newpassword) => {
    return(dispatch) => {
        const userdata = {email,newpassword};

        axios.post('/api/user', userdata).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error);
        })
    }
}
