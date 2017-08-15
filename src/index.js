import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store, history } from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// https://github.com/callemall/material-ui/issues/4670
// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
