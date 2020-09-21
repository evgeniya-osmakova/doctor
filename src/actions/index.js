import { createAction } from 'redux-actions';

export const changeStatus = createAction('STATUS_CHANGE');
export const addAppointment = createAction('APPOINTMENT_ADD');
export const removeAppointment = createAction('APPOINTMENT_REMOVE');
export const addSelectedAppointments = createAction('SELECTED_APPOINTMENT_ADD');
