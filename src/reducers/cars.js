import {
  FETCH_CARS_REQUESTED,
  FETCH_CARS_SUCCEEDED,
  UPDATE_CARS
} from '../actions/cars';


const initialState = {
    car: [],
    currentCars: {
      brand: ' ',
      models: ' ' 
    },
    headers: [ {
        label: 'Marca',
        key: 'brand'
      },
      {
        label: 'Modelos',
        key: 'models'
      },
      {
        label: 'ID',
        key: 'id'
      }]
}




export default (state = initialState,  action) => {
    switch(action.type){
      case FETCH_CARS_REQUESTED:
        return {...state, car:[]}
      case FETCH_CARS_SUCCEEDED:
          return {...state, car: action.car}
      case UPDATE_CARS:
        return {...state, currentCars: action.car}
        default:
            return {...state};
    }
}