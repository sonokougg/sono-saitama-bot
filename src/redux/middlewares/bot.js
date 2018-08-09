import {sendText} from '../modules/chatbot';
import {sendBot} from '../modules/chatbot';

const botMiddleware = store => {
  return next => {
		return action => {
			if (action.type !== 'chatbot/SEND_TEXT') {
				next(action);
				return;
			}
			console.log(action);
			else {
				store.dispatch({type: 'bot/LOADING'});
				setTimeout(() => {
					store.dispatch({type: 'chatbot/SEND_BOT'});
					store.dispatch({type: 'bot/LOADED'});
				}, 4000);
			}
			next(action);
		};
	};
};

export default botMiddleware;
