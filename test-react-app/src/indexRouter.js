import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter} from 'react-router-dom'
import { IBMComp } from './ibmcomp'
import { Topics } from './topics/Topics';
import { MyComp } from './mycomp';
import './index.css';

//npm install react-router-dom --save
function AppRouter(){
    return (
        <div>
            <ul>
                <li> <Link to="/ibmcomp/bangalore">IBM BLR</Link> </li>
                <li> <Link to="/ibmcomp/pune">IBM Pune</Link> </li>
                <li> <Link to="/topicscomp">Topics</Link> </li>
                <li> <Link to="/mycomp">My Component</Link> </li>
            </ul>
            <div className="container">
                <Route path='/ibmcomp/:city' component={IBMComp}/>
                <Route path='/topicscomp' component={Topics}/>
                <Route path='/mycomp' component={MyComp}/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
    , document.getElementById('root'));

