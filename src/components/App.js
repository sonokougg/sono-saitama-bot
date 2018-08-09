import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/App.css';
import Message from './message';
import {
  sendText as _sendText,
  sendBot as _sendBot,
} from '../redux/modules/chatbot';


class App extends Component {
  constructor(props) {
    super(props);
    const { sendText, sendBot } = props;
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
      if (inputText.length != 0) {
        sendText(inputText);
        this.setState({inputText: ''});
      }
    }
  }


  render() {
    const { text, sendText, chatbot } = this.props;
    const { inputText } = this.state;
    return (
      <div className="App">
        {chatbot.map((m, i) => <Message key={`msg-${i}`} {...m}/>)}
        <div className="App-input">
          <input type="input" value={inputText} onChange={e => this.handleChange(e)} className="input"/>
          <button onClick={this.pressSend} type="button" className="send">send</button>
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
  sendBot: (text) => dispatch(_sendBot(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
