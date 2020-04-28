import {
  FETCH_COUNTRY_REQUESTED,
  FETCH_COUNTRY_SUCCEEDED,
  UPDATE_COUNTRY
} from '../actions/country';


const initialState = {
    countries: [],
    currentCountry: {
      name: ' ',
      codigo: ' '
    },
    headers: [ {
        label: 'Nombre',
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
      case FETCH_COUNTRY_REQUESTED:
        return {...state, countries:[]}
      case FETCH_COUNTRY_SUCCEEDED:
          return {...state, countries: action.countries}
      case UPDATE_COUNTRY:
          return {...state,  currentCountry: action.countries}
        default:
            return {...state};
    }
}