const SEND_TEXT = 'chatbot/SEND_TEXT';
export const sendText = text => ({
  type: SEND_TEXT,
  payload: text,
});

const initialState = [{
  iconUrl: 'http://onepunchman-anime.net/news/wp-content/uploads/2015/10/220f295df7ee3ed100bf0f646cbe4c3a.gif',
  contents: 'ヒーローをやっているものだ。',
  id: 1,
}, {
  iconUrl: 'http://onepunchman-anime.net/news/wp-content/uploads/2015/10/220f295df7ee3ed100bf0f646cbe4c3a.gif',
  contents: 'さいたまだ。',
  id: 2,
}];

const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TEXT: {
      return [...state, {
        iconUrl: !action.saitama ? 'https://avatars1.githubusercontent.com/u/11702423?s=460&v=4' : 'http://onepunchman-anime.net/news/wp-content/uploads/2015/10/220f295df7ee3ed100bf0f646cbe4c3a.gif',
        contents: action.payload,
        id: state.length + 1,
      }];
    }
    default:
      return state;
  }
};


export default chatbotReducer;
