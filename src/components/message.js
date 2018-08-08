import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Icon, Contents} from '.';

class Message extends Component {
  static propTypes = {
    contents: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
  };
  render() {
    const { contents, iconUrl } = this.props;
    return(
      <div className="message-container">
        <Icon url={iconUrl} />
        <Contents contents={contents} />
      </div>
    );
  }
}

export default Message;
