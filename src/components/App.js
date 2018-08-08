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
    this.state = {
      inputText: '',
    };

    this.handleChange = (e) => {
      this.setState({
        inputText: e.target.value,
      });
    };
  }


  render() {
    const { text, sendText, chatbot } = this.props;
    const { inputText } = this.state;
    return (
      <div className="App">
        {chatbot.map((m, i) => <Message key={`msg-${i}`} {...m}/>)}
        <div className="App-input">
          <input type="input" value={inputText} onChange={e => this.handleChange(e)} className="input"/>
          <button onClick={() => sendText(inputText)} type="button" className="send">send</button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.number.isRequired,
  sendText: PropTypes.func.isRequired,
  chatbot: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { text } = state.chatbot;
  return {
    text,
    chatbot: state.chatbot,
  };
};

const mapDispatchToProps = dispatch => ({
  sendText: (text) => dispatch(_sendText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
