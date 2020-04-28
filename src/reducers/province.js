import {
  FETCH_PROVINCE_REQUESTED,
  FETCH_PROVINCE_SUCCEEDED,
  UPDATE_PROVINCE
} from '../actions/province';


const initialState = {
    provinces: [],
    currentProvince: {
      name: ' ',
      codigo: ' '
    },
    headers: [ {
        label: 'Provincia',
        key: 'name'
      },
      {
        label: 'Codigo',
        key: 'code'
      },
      {
        label: 'ID',
        key: 'id'
      }]
}




export default (state = initialState,  action) => {
    switch(action.type){
      case FETCH_PROVINCE_REQUESTED:
        return {...state, provinces:[]}
      case FETCH_PROVINCE_SUCCEEDED:
          return {...state, provinces: action.provinces}
      case UPDATE_PROVINCE:
          return {...state, currentProvince: action.provinces}
        default:
            return {...state};
    }
}