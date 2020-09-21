import React from 'react';
import ProfileCalendar from './ProfileAppointmentsCalendar';
import ProfileAppointsmentsCards from './ProfileAppointmentsCards';
import './ProfileAppointments.css';

function ProfileAppointments() {
  return (
    <div className="allAppointments">
      <ProfileAppointsmentsCards />
      <ProfileCalendar />
    </div>
  );
}

export default ProfileAppointments;
