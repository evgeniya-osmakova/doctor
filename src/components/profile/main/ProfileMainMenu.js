import React from 'react';
import './ProfileMain_Menu.css';
import doctor2 from '../../../../public/images/doctor2.png';
import analysis from '../../../../public/images/analysis.png';
import updating from '../../../../public/images/updating.png';
import doctor from '../../../../public/images/doctor.png';

function ProfileMainMenu() {
  return (
    <div className="mainMenu">
      <div className="sectionName">Электронная карта</div>
      <section className="options">
        <a href="#" className="card options_1">
          <div className="options__image">
            <img alt="photo" src={doctor2} width="100" height="100" />
          </div>
          <div className="options__info">
            <h2>Информация о пациенте</h2>
            <hr align="left"/>
            <ul>
              <li>Ваши личные данные</li>
              <li>Рекомендации врачей</li>
              <li>История болезней</li>
            </ul>
          </div>
        </a>
        <a href="#" className="card options_2">
          <div className="options__image">
            <img alt="photo" src={analysis} width="100" height="100" />
          </div>
          <div className="options__info">
            <h2>Результаты анализов</h2>
            <hr align="left"/>
            <p>Вы можете узнать здесь результаты своих анализов</p>
          </div>
        </a>
        <a href="#" className="card options_3">
          <div className="options__image">
            <img alt="photo" src={updating} width="100" height="100" />
          </div>
          <div className="options__info">
            <h2>Добавить информацию</h2>
            <hr align="left"/>
            <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
          </div>
        </a>
        <a href="#" className="card options_4">
          <div className="options__image">
            <img alt="photo" src={doctor} width="100" height="100" />
          </div>
          <div className="options__info">
            <h2>История приёмов</h2>
            <hr align="left"/>
            <p>Вся информация о полученных услугах за всю историю хранится здесь</p>
          </div>
        </a>
      </section>
    </div>
  );
}

export default ProfileMainMenu;
