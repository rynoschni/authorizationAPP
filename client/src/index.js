import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './components/Welcome';
import Feature from './components/Feature'; //protect
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import BaseLayout from './components/layout/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import requireAuth from './requireAuth';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
let store = createStore(reducer, undefined, 
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
          {/* Missing Stuff */}
      </BaseLayout>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
