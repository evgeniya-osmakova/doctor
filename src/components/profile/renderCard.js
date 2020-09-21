import React from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import * as allActions from '../../actions';

const renderCard = (appointments, countForRender) => {
  const dispatch = useDispatch();
  const onCancelClick = (e) => {
    const { value } = e.target;
    dispatch(allActions.removeAppointment({ id: value }));
  };
  const modifyDate = (date) => {
    const yearDayMonth = date.toLocaleDateString('ru-Ru', { year: '2-digit', month: 'numeric', day: 'numeric' });
    const weekday = date.toLocaleDateString('ru-Ru', { weekday: 'long' });
    const time = date.toLocaleDateString('ru-Ru', { hour: '2-digit', minute: 'numeric' }).split(' ')[1];
    return `${weekday} ${yearDayMonth} | ${time}`;
  };
  const idsForRender = _.keys(appointments).slice(0, countForRender);
  return (
    idsForRender.map((id) => {
      const {
        date,
        hospital,
        address,
        doctor,
        specialty,
        ava,
      } = appointments[id];
      return (
        <article className="appointment_item" key={id}>
          <div className="appointment_item__data">{modifyDate(date)}</div>
          <div className="appointment_item__hospital">{hospital}</div>
          <div className="appointment_item__address">{address}</div>
          <div className="appointment_item__cardFooter">
            <img alt="photo" className="cardFooter__photo" src={ava} width="100" height="100" />
            <div className="cardFooter__name">{doctor}</div>
            <div className="cardFooter__specialty">{specialty}</div>
            <button value={id} onClick={(e) => onCancelClick(e)}
                    className="cardFooter__btn btn">Отменить</button>
          </div>
        </article>
      );
    })
  );
};

export default renderCard;
