import React from 'react';
import {connect} from 'react-redux'

//return of this is stored in the props. From redux's state
function mapStateToProps(state){
    return {counter:state.counter};
}

export function CounterDisplay(props){
    return (
        <div className="container">
            <h2>Redux Counter : {props.counter}</h2>
        </div>
    )
}

export default connect(mapStateToProps)(CounterDisplay);