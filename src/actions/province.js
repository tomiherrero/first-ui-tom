

export const FETCH_PROVINCE_REQUESTED = ' FETCH_PROVINCE_REQUESTED '   // Accion  de eventos, por ejemplo dame countries
export const FETCH_PROVINCE_SUCCEEDED = 'FETCH_PROVINCE_SUCCEEDED'  // Reaccion de eventos por ejemplo te doy countries

export const fetchProvinceRequested = () => ({type: FETCH_PROVINCE_REQUESTED});
export const fetchProvinceSucceeded = provinces => ({type: FETCH_PROVINCE_SUCCEEDED, provinces})

export const UPDATE_PROVINCE = 'UPDATE_PROVINCE';
export const updateProvince = provinces =>({type: UPDATE_PROVINCE, provinces});

export const SUBMIT_PROVINCE_REQUESTED = 'SUBMIT_PROVINCE_REQUESTED';
export const submitProvinceRequested = () => ({type: SUBMIT_PROVINCE_REQUESTED});

export const SUBMIT_PROVINCE_SUCCEEDED = 'SUBMIT_PROVINCE_SUCCEEDED';
export const submitProvinceSucceeded= (status, data) => ({type: SUBMIT_PROVINCE_SUCCEEDED, status, data});