import React, { useState } from 'react';
import axios from 'axios';

export function RestComp(){
    const [users, setUsers] = useState([]);

    let getProducts = () => {
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then( (res) => {
            //alert(JSON.stringify(res.data));
            setUsers([...res.data])
        }).catch((err) => {
            alert("error getting products")
        });
    }

    let tmp = users.map( (u) => {
        return <p>{u.id}, {u.name}, {u.email} </p>
    });
    
    return (
        <div>
            <h3>Rest Calls</h3>
            <button onClick={getProducts}>Get products</button>
            {tmp}
        </div>    
    )
}