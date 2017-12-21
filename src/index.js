import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux'
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import store from './redux/store/store'
import Routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <Routes history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
