import React from 'react';
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';
import PropTypes from 'prop-types';

function Biography({ biography }) {
  return (
    <div className="biography">
      <h3 className="biography__header">Biography</h3>
      <Timeline lineColor={'#cdf'}>
        {biography.map((el, index) => (
          <TimelineItem
            key={index}
            dateText={el.date}
            style={{ color: '#ddd' }}
            dateInnerStyle={{ background: '#900', color: '#fff' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            {el.event}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

Biography.propTypes = {
  biography: PropTypes.array.isRequired
}

export default Biography;
