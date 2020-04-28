

export const FETCH_COUNTRY_REQUESTED = ' FETCH_COUNTRY_REQUESTED '   // Accion  de eventos, por ejemplo dame countries
export const FETCH_COUNTRY_SUCCEEDED = 'FETCH_COUNTRY_SUCCEEDED'  // Reaccion de eventos por ejemplo te doy countries

export const fetchCountryRequested = () => ({type: FETCH_COUNTRY_REQUESTED});
export const fetchCountrySucceeded = countries => ({type: FETCH_COUNTRY_SUCCEEDED, countries})

export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
export const updateCountry = countries => ({type: UPDATE_COUNTRY, countries});

export const SUBMIT_COUNTRY_REQUESTED = 'SUBMIT_COUNTRY_REQUESTED';
export const submitCountryRequested = () => ({type: SUBMIT_COUNTRY_REQUESTED});

export const SUBMIT_COUNTRY_SUCCEEDED = 'SUBMIT_COUNTRY_SUCCEEDED';
export const submitCountrySucceeded= (status, data) => ({type: SUBMIT_COUNTRY_SUCCEEDED, status, data});