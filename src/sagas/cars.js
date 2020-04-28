import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';
import {fetchCarsSucceeded, submitCarsSucceeded} from '../actions/cars';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/cars')
    if (status !== 200){
      return[];
    }
    return data; 
  }
  const apiSave =  cars => {
    if(cars.id) {
        return Axios.put(`http://localhost:3001/api/cars/${cars.id}`, cars)
    } else {
        return Axios.post('http://localhost:3001/api/cars', cars)
    }
  }



export function* fetchCars({filter}) {
    const car = yield  call(apiCall, filter);
    yield put(fetchCarsSucceeded(car));
}

export function* submitCar() {
  const {currentCars} = yield select (state => state.cars);
  const {status, data} = yield call(apiSave, currentCars);
  yield put(submitCarsSucceeded(status, data))
}