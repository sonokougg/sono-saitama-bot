const botMiddleware = store => next => (action) => {
  if (action.type !== 'chatbot/SEND_TEXT') {
    next(action);
    return;
  }
  if (!action.saitama) {
    if (action.payload.length <= 20) {
      store.dispatch({ type: 'bot/LOADING' });
      setTimeout(() => {
        store.dispatch({ type: 'chatbot/SEND_TEXT', saitama: true, payload: '正義執行' });
        store.dispatch({ type: 'bot/LOADED' });
      }, 4000);
    }
    if (action.payload.length > 20) {
      store.dispatch({ type: 'bot/LOADING' });
      setTimeout(() => {
        store.dispatch({ type: 'chatbot/SEND_TEXT', saitama: true, payload: '話が長い！２０文字以下でまとめやがれ！' });
        store.dispatch({ type: 'bot/LOADED' });
      }, 4000);
    }
  }
  next(action);
};

export default botMiddleware;
