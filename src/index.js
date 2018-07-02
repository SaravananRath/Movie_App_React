import React from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import Routing from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/Reducer'

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => (
    <Provider store = {store}>
        <Routing />
    </Provider>

);


render(<App/>,document.getElementById('root'));


