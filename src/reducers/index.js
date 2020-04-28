import {combineReducers} from 'redux';
import country from './country';
import province from './province'; 
import cars from './cars';

export default combineReducers({
    cars,
    province,
    country
});

