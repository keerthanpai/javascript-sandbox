import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter} from 'react-router-dom'
import { Topics } from './topics/Topics';
import { MyComp } from './mycomp';
import './index.css';
import { Login } from './Login';
import { Home } from './Home';
import { RestComp } from './rest';
import { ReactComp } from './reactcomp';

//npm install react-router-dom --save
function AppRouter(){
    return (
        <div>
            <ul>

                <li className="nav"> <img src="logo512.png" alt="reactlogo" width="100px"/> </li>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/reactcomp/bangalore">React BLR</Link> </li>
                <li> <Link to="/reactcomp/pune">React Pune</Link> </li>
                <li> <Link to="/topicscomp">Topics</Link> </li>
                <li> <Link to="/mycomp">My Component</Link> </li>
                <li> <Link to="/signin">Sign in</Link> </li>
                <li> <Link to="/rest">Rest</Link> </li>
            </ul>
            <div className="container">
                <Route path='/' exact component={Home}/>
                <Route path='/reactcomp/:city' component={ReactComp}/>
                <Route path='/topicscomp' component={Topics}/>
                <Route path='/mycomp' component={MyComp}/>
                <Route path='/signin' component={Login}/>
                <Route path='/rest' component={RestComp}/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
    , document.getElementById('root'));

