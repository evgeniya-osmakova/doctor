import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const appointments = handleActions({
  [actions.addAppointment](state, { payload: { appointment } }) {
    const { allAppointments, selectedAppointments } = state;
    const {
      date,
      hospital,
      address,
      doctor,
      specialty,
      ava,
    } = appointment;
    return {
      allAppointments: {
        ...allAppointments,
        [_.uniqueId()]: {
          date,
          hospital,
          address,
          doctor,
          specialty,
          ava,
        },
      },
      selectedAppointments,
    };
  },
  [actions.removeAppointment](state, { payload: { id } }) {
    const { allAppointments, selectedAppointments } = state;
    return {
      allAppointments: _.omit(allAppointments, id),
      selectedAppointments,
    };
  },
  [actions.addSelectedAppointments](state, { payload: { ids } }) {
    const { allAppointments } = state;
    const selectedAppointments = _.pick(allAppointments, ids);
    return {
      allAppointments,
      selectedAppointments,
    };
  },
}, { allAppointments: {}, selectedAppointments: {} });

const status = handleActions({
  [actions.changeStatus](state, { payload: { newStatus } }) {
    return newStatus;
  },
}, 'loading');

export default combineReducers({
  status,
  appointments,
});
