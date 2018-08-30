import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//applied global not like css class import
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
