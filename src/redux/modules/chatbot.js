export const SEND_TEXT = 'chatbot/SEND_TEXT';
const SaitamaIconUrl = 'http://onepunchman-anime.net/news/wp-content/uploads/2015/10/220f295df7ee3ed100bf0f646cbe4c3a.gif';
const SonodaIconUrl = 'https://avatars1.githubusercontent.com/u/11702423?s=460&v=4';

export const sendText = text => ({
  type: SEND_TEXT,
  payload: text,
});

export const sendTextFromSaitama = content => ({
  type: SEND_TEXT,
  saitama: true,
  payload: content,
});

const initialState = [{
  iconUrl: SaitamaIconUrl,
  contents: 'ヒーローをやっているものだ。',
  id: 1,
}, {
  iconUrl: SaitamaIconUrl,
  contents: 'さいたまだ。',
  id: 2,
}];

const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TEXT: {
      return [...state, {
        iconUrl: !action.saitama ? SonodaIconUrl : SaitamaIconUrl,
        contents: action.payload,
        id: state.length + 1,
      }];
    }
    default:
      return state;
  }
};


export default chatbotReducer;
