import { sendTextFromSaitama, SEND_TEXT } from '../modules/chatbot';
import { LOADING, LOADED } from '../modules/bot';

const SaitamaWords = ['正義執行',
  '続けることが大事だ',
  '俺はヒーローがやりたいからやってんだ',
  '腹筋１００回、腕立て伏せ１００回、ランニング１０km、これを毎日やる！'];
const botMiddleware = store => next => (action) => {
  if (action.type !== SEND_TEXT) {
    next(action);
    return;
  }
  if (!action.saitama) {
    if (action.payload.length <= 20) {
      store.dispatch({ type: LOADING });
      setTimeout(() => {
        store.dispatch(
          sendTextFromSaitama(SaitamaWords[Math.floor(Math.random() * SaitamaWords.length)]),
        );
        store.dispatch({ type: LOADED });
      }, 4000);
    }
    if (action.payload.length > 20) {
      store.dispatch({ type: LOADING });
      setTimeout(() => {
        store.dispatch(sendTextFromSaitama('話が長い！２０文字以下でまとめやがれ！'));
        store.dispatch({ type: LOADED });
      }, 4000);
    }

  }
  next(action);
};

export default botMiddleware;
