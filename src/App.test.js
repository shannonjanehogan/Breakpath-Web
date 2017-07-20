import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

it('renders without crashing', () => {
  injectTapEventPlugin();
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
});
