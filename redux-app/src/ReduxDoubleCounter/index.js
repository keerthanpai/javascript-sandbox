import React from 'react'
import {connect} from 'react-redux'

//return of this is stored in the props. From redux's state
function mapStateToProps(state){
    return {counter:state.counter};
}

function mapDispatchToProps(dispatch){
    return {
        inc : () => { 
            let action = {type:'INC',payload:2}      
            dispatch(action);
        },
        dec : () => { 
            let action = {type:'DEC',payload:2}      
            dispatch(action);
        },
    }
}

export function ReduxDoubleCounter(props){

    let increment = () => {
        props.inc();
    }

    let decrement = () => {
        props.dec();
    }

    return(
        <div className="container">
            <button onClick={increment}>Double Increment</button>
            <button onClick={decrement}>Double Decrement</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDoubleCounter);