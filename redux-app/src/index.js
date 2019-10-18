import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import { Counter } from './counter';
import ReduxCounter from './ReduxCounter'; //Imp {} is not required as default is returned (Rcounter connected to Redux)
import ReduxDoubleCounter  from './ReduxDoubleCounter';
import { reducer } from './CounterState/reducer';
import CounterDisplay from './CounterDisplay';

let store = createStore(reducer);

ReactDOM.render(
    (<div>
        <Counter />  
        <CounterDisplay store={store}/>      
        <ReduxCounter store={store}/>
        <ReduxDoubleCounter store={store}/>
    </div>)
    ,    
    document.getElementById('root'));
