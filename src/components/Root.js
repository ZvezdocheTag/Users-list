import React from 'react';
import App from './App';
import { Provider } from 'react-redux'
import {
    Router,
    Route,
    Link
  } from 'react-router-dom'

  import createHistory from 'history/createBrowserHistory'


const Root = ({store}) => (
    <Provider store={store}> 
        <Router history={createHistory()}>
            <Route path="/" component={App} />
        </Router>
    </Provider> 
)

export default Root;