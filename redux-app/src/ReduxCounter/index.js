import React from 'react'
import {connect} from 'react-redux'

//return of this is stored in the props. From redux's state
function mapStateToProps(state){
    return {counter:state.counter};
}

function mapDispatchToProps(dispatch){
    return {
        inc : () => { 
            let action = {type:'INC',payload:1}      
            dispatch(action);
        },
        dec : () => { 
            let action = {type:'DEC',payload:1}      
            dispatch(action);
        },
    }
}

export function ReduxCounter(props){

    let increment = () => {
        props.inc();
    }

    let decrement = () => {
        props.dec();
    }

    return(
        <div className="container">
            <button onClick={increment}>Single Increment</button>
            <button onClick={decrement}>Single Decrement</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);