import React from 'react';
import ReactDOM from 'react-dom';

let Topics = () =>{
    let tps = ['Angular','React','Vue','Chai','Mocha'];
    let tmp = tps.map( (tps) => {
        return (<li>{tps}</li>)
    });
    return(
        <div>
            <h4>Topics</h4>
            <ul>
                {tmp}
            </ul>
        </div>
    )
}

ReactDOM.render(<Topics/>, document.getElementById('root'));

