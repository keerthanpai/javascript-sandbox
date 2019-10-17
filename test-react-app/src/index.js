import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter} from 'react-router-dom'
import { IBMComp } from './ibmcomp'
import { Topics } from './topics/Topics';
import { MyComp } from './mycomp';
import './index.css';
import { Login } from './Login';
import App from './App';
import { Home } from './Home';

//npm install react-router-dom --save
function AppRouter(){
    return (
        <div>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/ibmcomp/bangalore">IBM BLR</Link> </li>
                <li> <Link to="/ibmcomp/pune">IBM Pune</Link> </li>
                <li> <Link to="/topicscomp">Topics</Link> </li>
                <li> <Link to="/mycomp">My Component</Link> </li>
                <li> <Link to="/signin">Sign in</Link> </li>
            </ul>
            <div className="container">
                <Route path='/' exact component={Home}/>
                <Route path='/userhome/:user' component={Home}/>
                <Route path='/ibmcomp/:city' component={IBMComp}/>
                <Route path='/topicscomp' component={Topics}/>
                <Route path='/mycomp' component={MyComp}/>
                <Route path='/signin' component={Login}/>
            </div>
            <div>
                <Route path='/' component={App}/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
    , document.getElementById('root'));

