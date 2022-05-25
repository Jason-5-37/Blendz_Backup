import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const selectMachine = () => ({
    type: constants.SELECT_MACHINE
});

export const selectBeverages = () => ({
    type: constants.SELECT_BEVERAGES
});

export const selectAccessories = () => ({
    type: constants.SELECT_ACCESSORIES
});

const changeList = (result) => ({
    type: constants.CHANGELIST,
    data: fromJS(result)
})

export const getMachineList = () => {
    return (dispatch) => {
        var storage=window.localStorage;
        storage.setItem("Select", "Machine");
        axios.get('http://localhost:8080/api/machines').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
    }
}
export const getBeveragesList = () => {
    return (dispatch) => {
        var storage=window.localStorage;
        storage.setItem("Select", "Beverage");
        axios.get('http://localhost:8080/api/beverages').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
    }
}

export const getAccessoriesList = () => {
    return (dispatch) => {
        var storage=window.localStorage;
        storage.setItem("Select", "Accessorie");
        axios.get('http://localhost:8080/api/accessories').then((res) => {
            const result = res.data;
            dispatch(changeList(result));
        }).catch(() => {
            console.log('error');
        })
    }
}