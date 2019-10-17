import React from 'react';
import ReactDOM from 'react-dom';

let Product = (props) =>{
    //props.name = 'Changed..' Does not work. Its immutable
    return(
        <div>
            <h4>{props.name}</h4>
            <h4>{props.price}</h4>
        </div>
    )
}

ReactDOM.render(<Product name="Mouse" price="500" />, document.getElementById('root'));

