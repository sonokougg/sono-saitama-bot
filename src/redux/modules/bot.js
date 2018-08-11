const LOADING = 'bot/LOADING';
const LOADED = 'bot/LOADED';

const InitialState = {
  loading: false,
};

const botReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case LOADED: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default botReducer;
