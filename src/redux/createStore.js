import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './modules';

const store = createStore(
  reducers,
  {},
  devToolsEnhancer()
);

export default function configureStore() {
  return store
}
