import React from 'react';

export class Home extends React.Component{
    render(){
        return(
            <h1>
                Welcome <b className="redColor">{this.props.match.params.user}</b>  to My React App
            </h1>
        )
    }
}