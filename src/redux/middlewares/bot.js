import { SEND_TEXT } from '../modules/chatbot';
import { LOADING, LOADED } from '../modules/bot';

const botMiddleware = store => next => (action) => {
  if (action.type !== SEND_TEXT) {
    next(action);
    return;
  }
  if (!action.saitama) {
    if (action.payload.length <= 20) {
      store.dispatch({ type: LOADING });
      setTimeout(() => {
        store.dispatch({ type: SEND_TEXT, saitama: true, payload: '正義執行' });
        store.dispatch({ type: LOADED });
      }, 4000);
    }
    if (action.payload.length > 20) {
      store.dispatch({ type: LOADING });
      setTimeout(() => {
        store.dispatch({ type: SEND_TEXT, saitama: true, payload: '話が長い！２０文字以下でまとめやがれ！' });
        store.dispatch({ type: LOADED });
      }, 4000);
    }

    if (action.payload === 'ラムダ') {
      store.dispatch({ type: LOADING });
      setTimeout(() => {
        store.dispatch({ type: SEND_TEXT, saitama: true, payload: 'は？' });
        store.dispatch({ type: LOADED });
      }, 4000);
    }
  }
  next(action);
};

export default botMiddleware;
