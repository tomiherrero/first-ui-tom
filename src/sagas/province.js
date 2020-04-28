import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';
import {fetchProvinceSucceeded, submitProvinceSucceeded} from '../actions/province';


const apiSave =  province=> {
  if(province.id) {
      return Axios.put(`http://localhost:3001/api/province/${province.id}`, province)
  } else {
      return Axios.post('http://localhost:3001/api/province', province)
  }
}

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/province')
    if (status !== 200){
      return[];
    }
    return data; 
  }


export function* fetchProvince({filter}) {
    const provinces = yield  call(apiCall, filter);
    yield put(fetchProvinceSucceeded(provinces));
}


export function* submitProvince() {
  const {currentProvince} = yield select (state => state.provinces);
  const {status, data} = yield call(apiSave, currentProvince);
  yield put(submitProvinceSucceeded(status, data))
}