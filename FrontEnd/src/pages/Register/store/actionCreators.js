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
            console.log(res._tokenResponse.localId);
            let id = res._tokenResponse.localId;
            let postdata = {
                "id":id, 
                "email":email,
                "name": "new user",
                "PriceToPay":0};
            axios.post('http://localhost:8080/api/user',postdata).then(res=>{
                console.log(res);
            })
            var storage=window.localStorage;
            storage.setItem("Islogin", "login");
            storage.setItem("UID", id);
            dispatch(ChangeRLogin())
        }).catch(error => {
            console.log(error);
            alert(error);
        })
    }
}