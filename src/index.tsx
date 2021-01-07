import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import { Router } from 'react-router-dom';
import i18n from './config/i18n';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';

const customHistory = createBrowserHistory();
const props: any = {};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<Router history={customHistory}>
					<App {...props} />
				</Router>
			</I18nextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
