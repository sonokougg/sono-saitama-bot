import React from 'react';
import PropTypes from 'prop-types';

const Contents = ({ contents }) => (
  <div className="contents-container">
    {contents}
  </div>
);
Contents.propTypes = {
  contents: PropTypes.string.isRequired,
};

export default Contents;
