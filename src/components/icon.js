import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };
	render() {
    const { url } = this.props;
		return (<div className="icon-container">
			<img className="icon" src={url}/>
		</div>);
	}
}

export default Icon;
