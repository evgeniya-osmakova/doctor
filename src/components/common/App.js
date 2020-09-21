import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './App.css';
import ProfileAppointments from '../profile/appointments/ProfileAppointments';
import * as allActions from '../../actions';
import ProfileMain from '../profile/main/ProfileMain';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    const appointmentsInfo = [
      {
        date: new Date('11 September 2020 12:00 UTC'),
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25",',
        address: 'пр.Солидарностиб д. 1б к. 1б лит. А',
        doctor: 'Малушко Т.Н.',
        specialty: 'Хирургия',
        ava: './public/images/avatar.png',
      },
      {
        date: new Date('12 September 2020 14:40 UTC'),
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25",',
        address: 'пр.Солидарностиб д. 1б к. 1б лит. А',
        doctor: 'Харьков В.С.',
        specialty: 'Терапевтическое отделение',
        ava: './public/images/avatar.png',
      },
      {
        date: new Date('10 September 2020 11:30 UTC'),
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25",',
        address: 'пр.Солидарностиб д. 1б к. 1б лит. А',
        doctor: 'Малушко Т.Н.',
        specialty: 'хирургия',
        ava: './public/images/avatar.png',
      },
      {
        date: new Date('15 September 2020 16:00 UTC'),
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25",',
        address: 'пр.Солидарностиб д. 1б к. 1б лит. А',
        doctor: 'Харьков В.С.',
        specialty: 'Терапевтическое отделение',
        ava: './public/images/avatar.png',
      },
      {
        date: new Date('22 September 2020 19:10 UTC'),
        hospital: 'СПБ ГБУЗ "Городская поликлиника №25",',
        address: 'пр.Солидарностиб д. 1б к. 1б лит. А',
        doctor: 'Малушко Т.Н.',
        specialty: 'хирургия',
        ava: './public/images/avatar.png',
      },
    ];
    switch (status) {
      case ('loading'): {
        appointmentsInfo.forEach((appointment) => {
          dispatch(allActions.addAppointment({ appointment }));
        });
        dispatch(allActions.changeStatus({ newStatus: 'loaded' }));
        break;
      }
      case ('loaded'): {
        break;
      }
      default:
        throw new Error(`Unknown loading status: '${status}'!`);
    }
  });

  return (
    <div className="app">
      <header className="header">
        <div>Мой профиль</div>
        <nav>
          <ul className="horizontal_menu">
            <li><a href="#"><img alt="img" src="https://i.ibb.co/PGS3zTD/watch.png" width="25" height="25" /></a></li>
            <li><a href="#"><img alt="img" src="https://i.ibb.co/F76RnLY/watch.png" width="25" height="25" /></a></li>
            <li><a href="#"><img alt="img" src="https://i.ibb.co/FYSnmxX/watch.png" width="25" height="25" /></a></li>
            <li><a href="#"><img alt="img" src="https://i.ibb.co/XsycmZ0/2020-09-18-08-39-33.png" width="50" height="50" /></a></li>
            <li><a href="#"><img alt="img" src="https://i.ibb.co/4MKb5nD/watch.png" width="25" height="25" /></a></li>
          </ul>
        </nav>
      </header>
      <div className="asideElements">
        <div className="logo">Логотип</div>
        <aside className="sidebar">
          <div className="selected"><a href="#" className="sidebar_style">Профиль</a></div>
          <div><a href="#" className="sidebar_style">Врачи и клиники</a></div>
          <div><a href="#" className="sidebar_style">Сообщения</a></div>
          <div><a href="#" className="sidebar_style">Тестирование</a></div>
          <div><a href="#" className="sidebar_style">Полезно знать</a></div>
          <div><button className="btn">Подать заявку</button></div>
        </aside>
        <footer className="footer">
          <a href="#">Помощь</a>
        </footer>
      </div>
      <main className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ProfileMain />
            </Route>
            <Route path="/appointments">
              <ProfileAppointments />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
