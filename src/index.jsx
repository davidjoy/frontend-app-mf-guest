import 'core-js/stable';
import 'regenerator-runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import messages from './i18n';

import './index.scss';
import GuestPage from './guest-page/GuestPage';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <GuestPage />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
  handlers: {
    auth: () => {}, // This MFE turns off auth so it can run independently of edx-platform.
  },
});
