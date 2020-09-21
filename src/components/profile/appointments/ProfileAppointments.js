import React from 'react';
import ProfileCalendar from './ProfileAppointmentsCalendar';
import ProfileAppointmentsCards from './ProfileAppointmentsCards';
import './ProfileAppointments.css';

function ProfileAppointments() {
  return (
    <div className="allAppointments">
      <ProfileAppointmentsCards />
      <ProfileCalendar />
    </div>
  );
}

export default ProfileAppointments;
