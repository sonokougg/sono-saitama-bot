import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contents extends Component {
  static propTypes = {
    contents: PropTypes.string.isRequired
  };
	render() {
    const { contents } = this.props;
		return (<div className="contents-container">
      {contents}
		</div>);
	}
}

export default Contents;
