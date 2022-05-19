import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from '@/App';
import store from '@/store';
import '@/assets/css/index.less';
import 'antd/dist/antd.less';

const history = createBrowserHistory({ window });
console.log(history, 'Browser history');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App history={history} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
