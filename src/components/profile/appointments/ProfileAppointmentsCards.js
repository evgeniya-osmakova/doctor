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
  return (
    <>
      <Link className="sectionName" to="/">Мои записи</Link>
      <section className="appointments">
        {/* eslint-disable-next-line no-nested-ternary */}
        {(_.isEmpty(appointments))
          ? (<div>Текущих записей нет</div>)
          : (_.isEmpty(selectedAppointments))
            ? renderCard(appointments, selectedAppointments.length)
            : renderCard(selectedAppointments, selectedAppointments.length)}
      </section>
    </>
  );
}

export default ProfileAppointmentsCards;
