import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import { Counter } from './counter';
import ReduxCounter from './ReduxCounter'; //Imp {} is not required as default is returned (Rcounter connected to Redux)
import ReduxDoubleCounter  from './ReduxDoubleCounter';
import { reducer } from './ReduxStore/reducer';
import CounterDisplay from './CounterDisplay';
import TopicsComp from './Topics';
import { Provider } from "react-redux";

let store = createStore(reducer);

ReactDOM.render(
    (<div>
        <Counter />  
        <Provider store={store}>
            <CounterDisplay/>      
            <ReduxCounter/>
            <ReduxDoubleCounter/>
        </Provider>
        <TopicsComp store={store}/>
        
    </div>)
    ,    
    document.getElementById('root'));
