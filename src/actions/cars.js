

export const FETCH_CARS_REQUESTED = ' FETCH_CARS_REQUESTED '   // Accion  de eventos, por ejemplo dame countries
export const FETCH_CARS_SUCCEEDED = 'FETCH_CARS_SUCCEEDED'  // Reaccion de eventos por ejemplo te doy countries

export const fetchCarsRequested = () => ({type: FETCH_CARS_REQUESTED});
export const fetchCarsSucceeded = car => ({type: FETCH_CARS_SUCCEEDED, car})

export const UPDATE_CARS = 'UPDATE_CARS';
export const updateCars = car => ({type: UPDATE_CARS, car});

export const SUBMIT_CARS_REQUESTED = 'SUBMIT_CARS_REQUESTED';
export const submitCarsRequested = () => ({type: SUBMIT_CARS_REQUESTED});

export const SUBMIT_CARS_SUCCEEDED = 'SUBMIT_CARS_SUCCEEDED';
export const submitCarsSucceeded= (status, data) => ({type: SUBMIT_CARS_SUCCEEDED, status, data});