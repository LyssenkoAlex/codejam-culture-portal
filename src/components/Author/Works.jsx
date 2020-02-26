import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

function Works({ header, works }) {
  return (
    <div className="works">
      <h3 className="works__header">{header}</h3>
      <List className="works__work-list">
        {works.map((work, index) => (
          <ListItem button key={index}>
            <ListItemText >
              <span className="works__item-date">{work.date}</span>
              <span className="works__item-event">{work.event}</span>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

Works.propTypes = {
  header: PropTypes.string,
  works: PropTypes.array.isRequired
};

export default Works;
