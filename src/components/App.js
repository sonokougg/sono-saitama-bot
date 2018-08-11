import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/App.css';
import Message from './message';
import {
  sendText as _sendText,
} from '../redux/modules/chatbot';


class App extends Component {
  constructor(props) {
    super(props);
    const { sendText } = props;
    this.state = {
      inputText: '',
    };

    this.handleChange = (e) => {
      this.setState({
        inputText: e.target.value,
      });
    };

    this.pressSend = () => {
      const { inputText } = this.state;
      if (inputText.length !== 0) {
        sendText(inputText);
        this.setState({ inputText: '' });
      }
    };
  }


  render() {
    const { loading, chatbot } = this.props;
    const { inputText } = this.state;
    return (
      <div className="App">
        {chatbot.map(m => <Message {...m} />)}
        {loading && (
        <div className="typing">
          <span>
          ・
          </span>
          <span>
          ・
          </span>
          <span>
          ・
          </span>
        </div>
        )}
        <div className="App-input">
          <input type="input" value={inputText} onChange={e => this.handleChange(e)} className="input" />
          <button onClick={this.pressSend} type="button" className="send">
            send
          </button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  sendText: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  chatbot: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = state => ({
  chatbot: state.chatbot,
  loading: state.bot.loading,
});

const mapDispatchToProps = dispatch => ({
  sendText: text => dispatch(_sendText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
