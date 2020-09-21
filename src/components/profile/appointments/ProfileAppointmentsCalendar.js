import React, { useEffect } from 'react';
import './ProfileAppointments.css';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-glass.css';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import * as allActions from '../../../actions';

function ProfileCalendar() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.allAppointments);

  useEffect(() => {
    const eventsDate = _.keys(appointments).map((id) => {
      const { date, doctor } = appointments[id];
      return {
        id,
        name: doctor,
        start: date.toISOString(),
        end: date.toISOString(),
      };
    });
    // eslint-disable-next-line no-new
    new Calendar({
      id: '#myCal',
      theme: 'glass',
      weekdayType: 'long-upper',
      monthDisplayType: 'long',
      calendarSize: 'large',
      layoutModifiers: ['month-align-left'],
      primaryColor: '#7067f5',
      headerBackgroundColor: '#7067f5',
      weekdayDisplayType: 'long-lower',
      startWeekday: 1,
      eventsData: eventsDate,
      dateChanged: (currentDate, events) => {
        const eventsIds = events.map(({ id }) => id);
        const appointmentsOfaDay = _.keys(appointments).filter((id) => eventsIds.includes(id));
        dispatch(allActions.addSelectedAppointments({ ids: appointmentsOfaDay }));
      },
    });
  });

  return <div className="calendar" id="myCal"></div>;
}

export default ProfileCalendar;
