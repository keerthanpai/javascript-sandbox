import React from 'react';
/*
export class Home extends React.Component{
    render(){
        let login = this.props.match.params.user;
        return(
            <h1>
                Welcome <b className="redColor">{login}</b>
            </h1>
        )
    }
}
*/
export function Home(){
    let login = sessionStorage.getItem('login') || 'Guest';
    return(
        <h1>
                Welcome <b className="redColor">{login}</b>
        </h1>
    )
}