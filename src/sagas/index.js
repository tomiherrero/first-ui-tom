// root Sagas
import {all, takeEvery} from 'redux-saga/effects';
import {FETCH_COUNTRY_REQUESTED, SUBMIT_COUNTRY_REQUESTED} from '../actions/country';
import {FETCH_PROVINCE_REQUESTED, SUBMIT_PROVINCE_REQUESTED} from '../actions/province';
import {FETCH_CARS_REQUESTED, SUBMIT_CARS_REQUESTED} from '../actions/cars';
import {fetchCountry, submitCountry} from './country';
import {fetchProvince, submitProvince} from './province';
import {fetchCars, submitCar} from './cars';

//funcion de escucha, y se ejecuta de manera asyncrona, solamente funcionan con funciones comunes y corrientes
//nos permite usar el yield, es una funcion de llamado que va a ejecutarse, va a llamar algo y ba a esperar que esa funcion se ejecute
//nos permite llamar muchas cosas momentanemente sin perder la funcion asyncrona. 

export default function* root(){
    yield all([
        takeEvery(FETCH_COUNTRY_REQUESTED, fetchCountry),
        takeEvery(FETCH_PROVINCE_REQUESTED, fetchProvince),
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(SUBMIT_COUNTRY_REQUESTED, submitCountry),
        takeEvery(SUBMIT_PROVINCE_REQUESTED, submitProvince),
        takeEvery(SUBMIT_CARS_REQUESTED, submitCar)

    ]);
}