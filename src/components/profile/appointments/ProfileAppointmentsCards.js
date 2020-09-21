import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import './ProfileAppointmentsCards.css';
import '../Card.css';
import { useSelector } from 'react-redux';
import renderCard from '../renderCard';

function ProfileAppointmentsCards() {
  const selectedAppointments = useSelector((state) => state.appointments.selectedAppointments);
  const appointments = useSelector((state) => state.appointments.allAppointments);
  const renderAppointments = () => {
    if (_.isEmpty(appointments)) {
      return (<div>Текущих записей нет</div>);
    }
    if (_.isEmpty(selectedAppointments)) {
      return renderCard(appointments, selectedAppointments.length);
    }
    return renderCard(selectedAppointments, selectedAppointments.length);
  };
  return (
    <>
      <Link className="sectionName link" to="/">Мои записи</Link>
      <section className="appointments">
        {renderAppointments()}
      </section>
    </>
  );
}

export default ProfileAppointmentsCards;
