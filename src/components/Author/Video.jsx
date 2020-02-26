import React from 'react';
import PropTypes from 'prop-types';

export default function Video({video, title}) {
  return (
    <div className="video">
      <iframe
        src={video}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  )
}
Video.propTypes = {
  video: PropTypes.string.isRequired,
  title: PropTypes.string
}