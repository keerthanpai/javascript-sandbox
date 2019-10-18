import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import { Counter } from './counter';
import { reducer } from './ReduxCounter/reducer';
import ReduxCounter from './ReduxCounter'; //Imp {} is not required as default is returned (Rcounter connected to Redux)

let store = createStore(reducer);

ReactDOM.render(
    (<div>
        <Counter />        
        <ReduxCounter store={store}/>
    </div>)
    ,    
    document.getElementById('root'));
