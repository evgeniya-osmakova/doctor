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
  return (
    <div className="mainAppointments">
      <div className="sectionName">Записи на приём</div>
      <section className="appointmentsPreview">
        {renderCard(appointments, 2)}
        {/* eslint-disable-next-line no-nested-ternary */}
        {(appointmentsCount === 0)
          ? (<div>Нет текущих записей на приём</div>)
          : (appointmentsCount > 2)
            ? (
              <div className="additionally_info">
                <div>Ещё {appointmentsCount - 2} записи</div>
                  <Link to="/appointments">Подробнее</Link>
              </div>
            )
            : (
              <div className="additionally_info">
                  <Link to="/appointments">Подробнее</Link>
              </div>
            )
        }
      </section>
    </div>
  );
}

export default ProfileMainAppointments;
