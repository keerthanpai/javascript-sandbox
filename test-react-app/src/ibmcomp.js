import React from 'react';

export class IBMComp extends React.Component {
    render(){
        return (
            <div>
                <h3> This is IBM {this.props.match.params.city} </h3>
            </div>
        )   
    }
}