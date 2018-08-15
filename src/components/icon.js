import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ url }) => (
  <div className="icon-container">
    <img className="icon" src={url} alt="icon" />
  </div>
);
Icon.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Icon;
