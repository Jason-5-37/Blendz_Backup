import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const questionON= () => ({
    type: constants.QUESTION_ON
});

export const questionOFF = () => ({
    type: constants.QUESTION_OFF
});