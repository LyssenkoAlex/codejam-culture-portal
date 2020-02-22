import React from 'react';
import './Header.scss';

// Вместо button.lang и ul вставим компоненты...
function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <h1>Theater directors of Belarus</h1>
        <button className="lang">Ru</button>
      </div>
      <nav className="header__nav">
        <ul >
          <li>Главная</li>
          <li>Список режиссеров</li>
          <li>Команда разработчиков</li>
          <li>Журнал</li>
          <li>Руководство по стилю</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
