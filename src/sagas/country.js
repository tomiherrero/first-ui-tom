import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';
import {fetchCountrySucceeded, submitCountrySucceeded} from '../actions/country';

const apiSave =  country => {
  if(country.id) {
      return Axios.put(`http://localhost:3001/api/country/${country.id}`, country);
  } else {
      return Axios.post('http://localhost:3001/api/country', country)
  }
}


const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/country')
    if (status !== 200){
      return[];
    }
    return data; 
  }


export function* fetchCountry({filter}) {
    const countries = yield  call(apiCall, filter);
    yield put(fetchCountrySucceeded(countries));
}

export function* submitCountry() {
  const {currentCountry} = yield select (state => state.country);
  const {status, data} = yield call(apiSave, currentCountry);
  yield put(submitCountrySucceeded(status, data))
}