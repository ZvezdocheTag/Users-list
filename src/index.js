import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore'
import Root from './components/Root'
import { fetchUsers } from './api'

// fetchUsers().then(res => console.log(res))
const store = configureStore();
ReactDOM.render(
<Root store={store}/>    
, document.getElementById('root'));
registerServiceWorker();
