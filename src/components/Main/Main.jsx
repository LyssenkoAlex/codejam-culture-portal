import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

function Main(props) {
  const { children } = props;
  return (
    <main>
      <p className="text-test">Карточка рандомного режиссера</p>
      {children}
    </main>
  );
}

export default Main;

Main.propsType = {
  children: PropTypes.element.isRequired,
};
