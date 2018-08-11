import React from 'react';
import PropTypes from 'prop-types';

import Icon from './icon';
import Contents from './contents';


const Message = ({ iconUrl, contents }) => (
  <div className="message-container">
    <Icon url={iconUrl} />
    <Contents contents={contents} />
  </div>
);

Message.propTypes = {
  contents: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default Message;
