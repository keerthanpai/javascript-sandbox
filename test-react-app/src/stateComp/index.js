import React from 'react';

export class StateComp extends React.Component{
    label = "Stateful Component";
    constructor(props){
        super(props);
        this.state = {
            msg:'Hello World!!'
        }
    }

    hclick = () => {
        alert('Hello');
        /*
        this.setState({
            msg:'Hello IBM!!'
        })*/
        this.label = "new State";
    }

    render(){
        return (
            <div>
                <h3>{this.label}</h3>
                <h4>{this.state.msg}</h4>
                <button onClick={this.hclick}>Click</button>
            </div>
        )
    }
}