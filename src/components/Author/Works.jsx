import React from 'react';
import PropTypes from 'prop-types';

function Works({header, works}) {
  return (
    <div className="works">
    <h3 className="works__header">{header}</h3>
    <ul className="works__work-list">
      {works.map((work, index) => (
        <li className="works__item" key={index}>
          <span className="works__item-date">{work.date}</span>
          <span className="works__item-event">{work.event}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

Works.propTypes = {
  header: PropTypes.string,
  works: PropTypes.array.isRequired
};

export default Works;
