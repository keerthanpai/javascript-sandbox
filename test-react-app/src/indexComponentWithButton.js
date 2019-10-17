import React, {createRef} from 'react';
import ReactDOM from 'react-dom';

let fnameref = createRef();
let handleClick = () => {
    //alert('Hello World!!');
    //alert(document.getElementsByName('fname')[0].value);  //avoid DOM in React
    alert(fnameref.current.value);         //need to import createRef for this
}

/*
let handleClick = (e) => {
    alert(e.type);
    alert(e.target);
    alert(e.target.textContent);
}
*/

let ComponentWithButton = () =>{
    return(
        <div>
            <h4>Events</h4>
            <input type='text' name='fname' ref={fnameref}></input>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

ReactDOM.render(<ComponentWithButton/>, document.getElementById('root'));

