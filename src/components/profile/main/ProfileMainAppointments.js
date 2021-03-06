import React from 'react';
import _ from 'lodash';
import './ProfileMain_Appointments.css';
import '../Card.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import renderCard from '../renderCard';

function ProfileMainAppointments() {
  const appointments = useSelector((state) => state.appointments.allAppointments);
  const appointmentsCount = _.keys(appointments).length;
  const renderAppointments = () => {
    if (appointmentsCount === 0) {
      return (<div>Нет текущих записей на приём</div>);
    }
    if (appointmentsCount > 2) {
      return (
        <div className="additionally_info">
          <div>Ещё {appointmentsCount - 2} записи</div>
          <Link className="link" to="/appointments">Подробнее</Link>
        </div>
      );
    }
    return (
      <div className="additionally_info">
        <Link className="link" to="/appointments">Подробнее</Link>
      </div>
    );
  };
  return (
    <div className="mainAppointments">
      <div className="sectionName">Записи на приём</div>
      <section className="appointmentsPreview">
        {renderCard(appointments, 2)}
        {renderAppointments()}
      </section>
    </div>
  );
}

export default ProfileMainAppointments;
