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

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/shopList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}