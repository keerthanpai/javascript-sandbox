import React from 'react';
import axios from 'axios';

let getProducsts = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then( (res) => {
        alert(JSON.stringify(res.data));

    }).catch((err) => {
        alert("error getting products")
    });
}

export function RestComp(){
    return (
        <div>
            <h3>Rest Calls</h3>
            <button onClick={getProducsts}>Get products</button>
        </div>    
    )
}