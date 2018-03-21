import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux'; //predictable state container so app runs the same in different environments.
import { Provider } from 'react-redux';  //component to wrap app
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // write action creator that returns a function instead of action
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';

const store = createStore(  //tree, state object
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>,
   document.getElementById('root')
 );
registerServiceWorker();
