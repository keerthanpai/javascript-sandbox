import React from 'react';
import ReactDOM from 'react-dom';

//let IBM = React.createElement('h1','','Hello World!!!');

//Following syntax is called JSX - is an XML/HTML like syntax used by React
let IBM_oneElement = <h1>Hello Keerthan!!!</h1>

//IBM is a variable having a element --- this can be reused
let IBM = (
    <div>
        <h1>Hello World!!!</h1>
        <h1>Hello Asia!!!</h1>
        <h1>Hello India!!!</h1>
    </div>
);


//Another way --- msg = model... returned view
function Head() {
    return (
        <div>
            <h1>
                Header Component
            </h1>
        </div>
    );
}

function MyComp() {
    let msg = 'This is my comp';
    return (
        <div>
            <Head />
            <Head />
            <h2>{msg}</h2>
        </div>
    )
}


//ReactDOM.render(IBM, document.getElementById('root'));

ReactDOM.render(<MyComp />, document.getElementById('root'));

