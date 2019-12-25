import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import burgerBuilderReducer from './store/reducers/burgerBuilder';
// import orderReducer from './store/reducers/order';
// import authReducer from './store/reducers/auth';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    // burgerBuilder: burgerBuilderReducer,
    // order: orderReducer,
    // auth: authReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// basepath in <BrowserRouter basename="/my-app/"></BrowserRouter>
const app = (   
    <Provider store={store}>        
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));