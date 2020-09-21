import React from 'react';
import ProfileMainAppointments from './ProfileMainAppointments';
import ProfileMainMenu from './ProfileMainMenu';
import './ProfileMain.css';

function ProfileMain() {
  return (
    <div className="mainPage">
      <ProfileMainAppointments />
      <ProfileMainMenu />
    </div>
  );
}

export default ProfileMain;
