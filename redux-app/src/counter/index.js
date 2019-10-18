import React, {useState} from 'react'

export function Counter(){
    const [counter, setCounter] = useState(0);  //https://reactjs.org/docs/hooks-state.html

    let increment = () => {
        setCounter(counter+1);
    }

    let decrement = () => {
        setCounter(counter-1);
    }


    return(
        <div className="container">
            <h2>Component Counter : {counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}