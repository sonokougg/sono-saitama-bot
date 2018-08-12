import { sendTextFromSaitama, SEND_TEXT } from '../modules/chatbot';
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
        store.dispatch(sendTextFromSaitama('正義執行'));
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

    if (action.payload === 'ラムダ') {
      store.dispatch({ type: LOADING });
      setTimeout(() => {
        store.dispatch(sendTextFromSaitama('は？'));
        store.dispatch({ type: LOADED });
      }, 4000);
    }
  }
  next(action);
};

export default botMiddleware;
