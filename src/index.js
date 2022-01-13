import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllPost from './AllPost';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import bookReducer from './Reducer/bookReducer';
const store = createStore(bookReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/create" exact component={AllPost}/>
            </Switch>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
