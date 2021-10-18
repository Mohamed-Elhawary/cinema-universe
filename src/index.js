import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
			<React.StrictMode>
    			<App />
  			</React.StrictMode>
	</Provider>
  , document.getElementById('root')
);