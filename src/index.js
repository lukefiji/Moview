import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import App from './components/App';

// Setup dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
