import { createAction } from 'redux-actions';

export const SEND_TEXT = 'SEND_TEXT';
export const sendText = (text) => {
  console.log("create action: ", text)
  return {
    type: SEND_TEXT,
    payload: text
  };
}

const initialState = [{
	iconUrl: '../images/saitama.gif',
	contents: 'はやくやれよ'
}, {
	iconUrl: '../images/saitama.gif',
	contents: 'you can warp!!!'
}];

const chatbotReducer = (state = initialState, action) => {
  console.log("reducer receive action: ", action);
  switch (action.type) {
    case SEND_TEXT: {
    return [...state, {
      iconUrl: 'https://avatars1.githubusercontent.com/u/11702423?s=460&v=4',
      contents: action.payload
    }];
  }
    default:
      return state;
  }
};


export default chatbotReducer;
